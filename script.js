var debug = false;

var currentMap = window.location.pathname.split("/").pop();
currentMap = currentMap.substr(0, currentMap.indexOf('.')); 

if (debug)
    currentMap += '_dev';

if (currentMap == 'index')
    currentMap = 'mountain_town';

var bounds = [[85.02070774312594, -179.64843750000003], [-84.9747260970686, 179.12109375000003]];

var map = L.map('map').setView([0, 0], 3);
L.tileLayer('./maps/'+currentMap+'/{z}/{x}/{y}.png', {
    attribution: '<a href="https://github.com/emmasab/tld-map/">Credits and info</a>',
    maxZoom: 4,
    noWrap: true,
    bounds: bounds
}).addTo(map);


// Toggles opacity on right click (to indicate whether visited or not)
function toggleMarkerOpacity(e) {
    if (this.options.opacity == 1) {
        this.setOpacity(0.5);
    } else {
        this.setOpacity(1);
    }
}

// Creates markers
var markerGroups = {};
var innerMarkerGroups = {};
for (let key in mapdata) { // Each marker key (aka type)
    markerGroups[key] = new L.layerGroup()

    mapdata[key].forEach((loc) => { // Each marker location
        var marker = L.marker(loc.coord, {icon: icons[key], riseOnHover: true});
        var popupContent = '';

        if ('name' in loc) {
            popupContent += '<span class="markerName">'+loc.name+'</span>';
        } else if (debug) {
            popupContent += '['+loc.coord[0]+', '+loc.coord[1]+']'; // !DEBUG
        }

        if ('contains' in loc) { // add submarkers
            if (popupContent != '') {
                popupContent += '<br/><span class="innerMarker">';
            }
            loc.contains.forEach((item) => {
                popupContent += '<img class="'+item+'Inner" src="'+icons[item].options.iconUrl+'"/>';
            });
            popupContent += '</span>'
        }

        if (key=='houseUndetermined') {
            popupContent = '<select id="'+L.stamp(marker)+'" onchange="accessDetermined(this)"><option value="Undetermined">Undetermined</option><option value="Accessible">Accessible</option><option value="Destroyed">Destroyed</option></select>';
            popup = new popupClass();
            popup.setContent(popupContent);
            marker.bindPopup(popup, {autoClose: false});
        } else if (popupContent != '') {
            popupContent = '<span>'+popupContent+'</span>';
            popup = new popupClass();
            popup.setContent(popupContent);
            if ('contains' in loc) { // add submarkers to group
                loc.contains.forEach((item) => {
                    if (!innerMarkerGroups[item]) {
                        innerMarkerGroups[item] = new L.layerGroup();
                    }
                    innerMarkerGroups[item].addLayer(popup);
                });
            }
            marker.bindPopup(popup);
        }

        marker.on('contextmenu', toggleMarkerOpacity);
        markerGroups[key].addLayer(marker);
    });
    markerGroups[key].addTo(map);

    // Sets icons for sidebar list and popups
    $('.'+key+'>i').css('background-image', 'url('+icons[key].options.iconUrl+' )');
}


// Random building changes type
// !TODO remove from layergroup and add to correct one
function accessDetermined(e) 
{
    var marker = markerGroups['houseUndetermined'].getLayer(e.id);
    var iconName = e.value;

    if (e.value == 'Accessible') {
        marker.setIcon(icons['houseAccess']);
    } else if (e. value == 'Destroyed') {
        marker.setIcon(icons['houseDestroyed']);
    } else {
        marker.setIcon(icons['houseUndetermined']);
    }
}

// Shows all markers for keyId and restores keyName opacity
function showKey(keyName, keyId) {
    if (keyId in markerGroups) { // Add markers back to map
        markerGroups[keyId].addTo(map);
    }
    if (keyId in innerMarkerGroups) { // Un-hide inner markers
        innerMarkerGroups[keyId].eachLayer(function (popup) { // in each popup containing that inner marker
            var popupHTML = $(popup.getContent());
            $('img.'+keyId+'Inner', popupHTML).removeClass('innerHidden');
            popup.setContent(popupHTML.get(0).outerHTML);

            // Un-hide popup if hidden
            if (popup.isHidden) {
                popup.isHidden = false;
                popup._source.bindPopup(popup);
            }
        });
    }
    if (keyName.hasClass('hidden')) {
        keyName.removeClass('hidden');
    }
}

// Hides all markers for keyId and lowers keyName opacity
function hideKey(keyName, keyId) {
    if (keyId in markerGroups) { // Remove markers from map
        markerGroups[keyId].remove();
        
    }
    if (keyId in innerMarkerGroups) { // Hide inner markers
        innerMarkerGroups[keyId].eachLayer(function (popup) { // in each popup containing that inner marker
            var popupHTML = $(popup.getContent());
            $('img.'+keyId+'Inner', popupHTML).addClass('innerHidden');
            popup.setContent(popupHTML.get(0).outerHTML);

            // TODO remove popup if no name and all markers are hidden
            if(popupHTML.find('span.markerName').length == 0) { // check whether no name
                var hasVisibleMarker = false;
                $('img', popupHTML).each(function(i, e) { // check each inner marker whether hidden
                    hasVisibleMarker = hasVisibleMarker || !$(e).hasClass('innerHidden');
                });
                if (!hasVisibleMarker) {
                    popup.isHidden = true;
                    if (popup._source.isPopupOpen()) {
                        popup._source.closePopup();
                    }
                    popup._source.unbindPopup();
                }
            }
        });
    }
    if (!keyName.hasClass('hidden')) {
        keyName.addClass('hidden');
    }
}

// Hide / show all markers for all keys in category
$('#sidebar-wrap>h3').each(function() {
    $(this).click(function() {
        var keyCategory = $(this);
        $('#'+this.id+'Items>li').each(function() {
            if (keyCategory.hasClass('hidden')) {
                showKey($(this), this.id);
            } else {
                hideKey($(this), this.id);
            }
        });
        if (keyCategory.hasClass('hidden')) {
            keyCategory.removeClass('hidden');
        } else {
            keyCategory.addClass('hidden');
        }
    });
});

// Hide / show all markers for key
$('.key').each(function(){
    $(this).children('li').each(function() {
        // Toggle each marker
        $(this).click(function() {
            var keyObject = $(this);
            if (keyObject.hasClass('hidden')) {
                showKey(keyObject, this.id);
            } else {
                hideKey(keyObject, this.id);
            }
        });
    });
});

// Open all popups
$('#openAll').click(function() {
    for (key in markerGroups) {
        markerGroups[key].eachLayer(function(marker) {
            var popup = marker.getPopup();
            if (popup) {
                // only open popups with inner markers
                var popupHTML = popup.getContent();
                if (popupHTML.includes('img')) { 
                    marker.openPopup();
                }
            }
        });
    }
});

// Close all popups
$('#closeAll').click(function() {
    for (key in markerGroups) {
        markerGroups[key].eachLayer(function(marker) {
            var popup = marker.getPopup();
            if (popup) {
                marker.closePopup();
            }
        });
    }
});



// !DEBUG - display coordinates when clicking
function displayCurrentCoord(e) 
{
   	window.prompt("You clicked the map at ", e.latlng.lat + ', ' + e.latlng.lng);
}

// !DEBUG - helper function to create markers
function printFormattedCoord(e)
{
    // Get type of building
    var name = window.prompt("Name");
    // Build printout text
    var printout =  "}, {\n"
    printout += "coord: ["+ e.latlng.lat + ', ' + e.latlng.lng +"]";
    if (name) {
        printout += ",\nname: '"+name+"'\n";
    } else {
        printout += "\n";
    }

    // Copy to clipboard
    var id = "mycustom-clipboard-textarea-hidden-id";
    var textarea = document.createElement("textarea");
    textarea.id = id;
    textarea.style.position = 'fixed';
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.width = '1px';
    textarea.style.height = '1px';
    textarea.style.padding = 0;
    textarea.style.border = 'none';
    textarea.style.outline = 'none';
    textarea.style.boxShadow = 'none';
    textarea.style.background = 'transparent';
    document.querySelector("body").appendChild(textarea);
    textarea = document.getElementById(id);
    textarea.value = printout;
    textarea.select();
    document.execCommand('copy');
    console.log(printout);
}

if (debug) {
    map.on('click', printFormattedCoord)
}
