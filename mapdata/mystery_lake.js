var mapdata = {
    // LOCATIONS //

    houseUndetermined: [{
        coord: [-76.35189643112588, 142.20703125000003],
        name: 'Cabin',
        contains: ['bed']
    }, {
        coord: [-77.05911588252368, 138.60351562500003],
        name: 'Cabin',
        contains: ['bed']
    }, {
        coord: [-77.57995914400348, 134.64843750000003],
        name: 'Cabin',
        contains: ['bed']
    }, {
        coord: [-80.54651780307105, 114.34570312500001],
        name: 'Cabin',
        contains: ['bed']
    }, {
        coord: [-80.80285378098482, 111.62109375000001],
        name: 'Cabin',
        contains: ['bed']
    }, {
        coord: [-81.18796547824081, 108.89648437500001],
        name: 'Cabin',
        contains: ['bed']                              
    }],

    houseAccess: [{
        coord: [74.54332982677906, 152.66601562500003],
        name: 'Carter Hydro Dam',
        contains: ['workshop', 'fireplace', 'safe', 'corpse', 'rifle', 'axe', 'spawn']
    }, {
        coord: [65.76672667423811, 15.380859375000002],
        name: 'Trailer',
        contains: ['bed', 'corpse']
    }, {
        coord: [66.26685631430843, 9.492187500000002],
        name: 'Trailer',
        contains: ['bed', 'corpse']
    }, {
        coord: [64.66151739623564, 10.195312500000002],
        name: 'Trailer',
        contains: ['bed', 'corpse']
    }, {
        coord: [30.221101852485987, -137.81250000000003],
        name: 'Cabin',
        contains: ['bed', 'corpse']
    }, {
        coord: [-78.61266542765814, -140.88867187500003],
        name: 'Trapper\'s Cabin',
        contains: ['bed', 'workshop', 'fireplace', 'safe', 'rifle', 'spawn']
    }, {
        coord: [-63.54855223203643, 150.90820312500003],
        name: 'Lone Lake Cabin',
        contains: ['bed', 'corpse']
    }, {
        coord: [-49.66762782262193, 32.69531250000001],
        name: 'Camp Office',
        contains: ['bed', 'workshop', 'fireplace', 'corpse', 'spawn']
    }, {
        coord: [64.1297836764257, 140.36132812500003],
        name: 'Trailer',
        contains: ['bed']
    }, {
        coord: [63.58767529470318, 151.962890625],
        name: 'Trailer',
        contains: ['bed']     
    }, {
        coord: [49.83798245308484, 21.796875000000004],
        name: 'Forestry Lookout',
        contains: ['bed', 'fireplace', 'rifle']                                                            
    }],

    houseNonAccess: [{
        coord: [70.49557354093137, 155.654296875]
    }, {
        coord: [64.20637724320852, 15.468750000000002]
    }, {
        coord: [38.89103282648846, -69.34570312500001],
        contains: ['firepit', 'rifle', 'rope']
    }, {
        coord: [-17.476432197195518, -127.52929687500001],
        name: 'Hunter\'s Blind',
        contains: ['bow']
    }, {
        coord: [-77.57995914400348, -123.39843750000001]
    }, {
        coord: [-66.30220547599843, -49.921875],
        contains: ['fireplace']
    }, {
        coord: [-70.55417853776078, 98.96484375000001],
        name: 'Ice Fishing Hut',
        contains: ['fireplace', 'fishingHole']
    }, {
        coord: [-63.54855223203643, 82.79296875000001],
        name: 'Ice Fishing Hut',
        contains: ['fireplace', 'fishingHole']
    }, {
        coord: [-68.65655498475736, 122.25585937500001],
        name: 'Ice Fishing Hut',
        contains: ['fireplace', 'fishingHole']
    }, {
        coord: [-51.508742458803326, 129.90234375000003],
        name: 'Ice Fishing Hut',
        contains: ['fireplace', 'fishingHole']
    }, {
        coord: [12.811801316582619, 143.52539062500003],
        name: 'Hunter\'s Blind'       
    }, {
        coord: [15.114552871944115, 21.4453125],
        name: 'Train Cart',
        contains: ['corpse', 'rifle']                                                                        
    }],

    houseDestroyed: [],

    caveAccess: [],

    caveNonAccess: [{
        coord: [15.284185114076445, 118.21289062500001]
    }, {
        coord: [-21.94304553343818, 80.15625000000001]
    }, {
        coord: [-42.29356419217008, 143.43750000000003]
    }, {
        coord: [-84.5329939004419, 24.082031250000004]
    }, {
        coord: [-78.06198918665974, 18.369140625000004]
    }, {
        coord: [-75.80211845876491, -100.986328125]
    }, {
        coord: [-5.615985819155327, -137.28515625000003]                                                        
    }],

    spawn: [{
        coord: [68.30190453001559, 153.80859375000003]
    }, {
        coord: [83.17403513173129, -70.66406250000001]
    }, {
        coord: [54.36775852406841, -9.140625000000002]
    }, {
        coord: [13.923403897723347, 123.39843750000001]
    }, {
        coord: [25.3241665257384, -48.86718750000001]
    }, {
        coord: [-44.46515101351963, -160.6640625]
    }, {
        coord: [-58.53959476664049, -65.21484375000001]
    }, {
        coord: [-27.839076094777816, 105.82031250000001]
    }, {
        coord: [-78.76779175784321, 23.5546875]
    }, {
        coord: [-67.60922060496382, 6.328125000000001]                                                                                
    }],

    car: [{
        coord: [67.03316279015063, 137.37304687500003]
    }],

    tractor: [],

    regionChange: [{
        coord: [68.97416358340674, 171.298828125],
        name: 'To Ravine'
    }, {
        coord: [-82.86430834427168, -13.710937500000002],
        name: 'To Forlorn Muskeg'        
    }],

    oneway: [],

    twoway: [],

    ropePresent: [{
        coord: [-27.371767300523032, 86.57226562500001]
    }, {
        coord: [-25.324166525738384, 95.71289062500001]
    }, {
        coord: [-81.97243132048266, 71.27929687500001]                   
    }],

    ropeMissing: [{
        coord: [39.842286020743394, -62.22656250000001] 
    }],

    // INTERACTIBLE LOCATIONS //
    fireplace: [],

    firepit: [],

    // ENVIRONMENT //
    corpse: [{
        coord: [68.75231494434473, 123.48632812500001],
        contains: ['rifle']
    }, {
        coord: [58.58543569119917, 91.7578125]
    }, {
        coord: [60.50052541051131, 81.12304687500001]
    }, {
        coord: [63.39152174400885, 19.248046875000004]
    }, {
        coord: [64.28275952823397, -98.87695312500001]
    }, {
        coord: [56.07203547180089, -88.154296875]
    }, {
        coord: [39.436192999314095, -72.24609375000001]
    }, {
        coord: [14.859850400601037, -87.01171875]
    }, {
        coord: [-17.14079039331665, -123.04687500000001]
    }, {
        coord: [35.60371874069731, -136.31835937500003]
    }, {
        coord: [33.358061612778876, -133.41796875000003]
    }, {
        coord: [-80.8309067512456, -91.66992187500001]
    }, {
        coord: [-83.44032649527307, -73.65234375000001]
    }, {
        coord: [-79.4484773996116, -41.39648437500001]
    }, {
        coord: [-81.8612078903467, -8.789062500000002]
    }, {
        coord: [-77.97074497652059, 24.082031250000004]
    }, {
        coord: [-79.0049621603135, 130.16601562500003]
    }, {
        coord: [-62.79493487887007, 154.24804687500003],
        contains: ['rifle']
    }, {
        coord: [-68.97416358340674, 113.02734375000001]
    }, {
        coord: [-70.40734767606811, 92.90039062500001]
    }, {
        coord: [-44.21370990970205, 37.17773437500001]
    }, {
        coord: [21.53484700204879, 29.355468750000004]
    }, {
        coord: [-68.07330474079025, 33.39843750000001],
        contains: ['rifle']
    }, {
        coord: [-58.26328705248602, -3.1640625000000004]
    }, {
        coord: [-61.3546135846894, -132.97851562500003]                                                                                         
    }],

    cattail: [{
        coord: [-71.18775391813159, 114.78515625000001]
    }, {
        coord: [-64.28275952823394, 107.138671875]
    }, {
        coord: [-66.99884379185184, 79.716796875]
    }, {
        coord: [-64.88626540914476, 58.97460937500001]
    }, {
        coord: [-55.07836723201514, 67.50000000000001]
    }, {
        coord: [-49.89463439573421, 44.56054687500001]
    }, {
        coord: [-76.8207925254374, 121.02539062500001]
    }, {
        coord: [-57.56299545938714, 148.44726562500003]
    }, {
        coord: [-44.653024159812, 132.53906250000003]
    }, {
        coord: [69.06856318696033, 128.93554687500003]
    }, {
        coord: [-7.449624260197816, -113.11523437500001]                                                                             
    }],

    mushroom: [{
        coord: [72.1548895826075, 134.29687500000003]
    }, {
        coord: [11.350796722383672, -45]
    }, {
        coord: [-70.95969716686398, -53.26171875]
    }, {
        coord: [-20.3034175184893, -134.64843750000003]    
    }, {
        coord: [-11.436955216143177, -120.05859375000001]                                    
    }],

    saplingBirch: [{
        coord: [-82.34410000677865, 11.337890625]
    }, {
        coord: [-28.613459424004414, 112.060546875]
    }, {
        coord: [47.754097979680026, 117.42187500000001]
    }, {
        coord: [76.67978490310692, 78.92578125000001]
    }, {
        coord: [72.81607371878991, -90.17578125000001]
    }, {
        coord: [-44.21370990970205, -49.5703125]
    }, {
        coord: [-74.86788912917916, -149.23828125000003]
    }, {
        coord: [-54.97761367069625, -149.06250000000003]
    }, {
        coord: [-34.30714385628803, -119.53125000000001]
    }, {
        coord: [45.706179285330855, -142.73437500000003]
    }, {
        coord: [68.13885164925576, -130.95703125000003]
    }, {
        coord: [76.14295846479848, -120.76171875000001] 
    }, {
        coord: [-82.8533822917608, -70.48828125000001]                                                                                               
    }],

    saplingMaple: [{
        coord: [70.95969716686398, 131.13281250000003]
    }, {
        coord: [-82.54060382149495, 38.58398437500001]
    }, {
        coord: [76.413973015132, 42.36328125000001]
    }, {
        coord: [-27.137368359795595, -47.109375]
    }, {
        coord: [80.28310417537246, -142.73437500000003]
    }, {
        coord: [72.60712040027555, -150.46875000000003]
    }, {
        coord: [39.027718840211605, -147.83203125000003]
    }, {
        coord: [-60.54377524118842, -163.82812500000003]
    }, {
        coord: [78.31385955743478, -39.02343750000001]                                                                 
    }],

    lichen: [{
        coord: [-83.06877413473718, 18.984375000000004]
    }, {
        coord: [-83.55971676457146, 27.949218750000004]
    }, {
        coord: [-84.37156598282918, 29.355468750000004]
    }, {
        coord: [1.5818302639606454, 141.50390625000003]
    }, {
        coord: [44.715513732021336, 120.23437500000001]
    }, {
        coord: [-54.47003761280576, -82.96875000000001]
    }, {
        coord: [-24.686952411999144, -110.74218750000001]
    }, {
        coord: [-9.79567758282973, -92.81250000000001]  
    }, {
        coord: [-80.02765497223292, -149.41406250000003]  
    }, {
        coord: [-51.179342979289274, -69.43359375000001]                                                                            
    }],

    rosehips: [{
        coord: [4.039617826768437, -55.72265625]
    }, {
        coord: [16.13026201203477, 148.88671875000003]                
    }, {
        coord: [67.7094454829218, 14.677734375000002]
    }],

    // HUNTING //
    bear: [{
        coord: [66.01801815922045, -116.71875000000001]        
    }],

    wolf: [{
        coord: [52.908902047770255, 60.64453125000001]
    }, {
        coord: [-15.961329081596647, 17.050781250000004]
    }, {
        coord: [-73.17589717422608, -1.2304687500000002]
    }, {
        coord: [-80.90066856076275, -79.1015625]
    }, {
        coord: [64.24459476798195, -78.39843750000001]                                
    }],

    rabbit: [{
        coord: [75.00494000767517, -130.60546875000003]
    }, {
        coord: [45.9511496866914, -136.31835937500003]
    }, {
        coord: [-12.64033830684679, -13.271484375000002]
    }, {
        coord: [-57.938183012205315, -74.79492187500001]
    }, {
        coord: [-72.63337363853837, -103.71093750000001]
    }, {
        coord: [-76.39331166244494, -148.62304687500003]
    }, {
        coord: [-82.86430834427168, 27.070312500000004]
    }, {
        coord: [-75.49715731893083, 32.43164062500001]
    }, {
        coord: [-30.372875188118016, 75.41015625]
    }, {
        coord: [5.178482088522876, 151.962890625]
    }, {
        coord: [-44.715513732021336, 111.70898437500001]                                                                                
    }],

    deer: [{
        coord: [-56.559482483762245, 59.06250000000001]
    }, {
        coord: [12.726084296948196, 137.81250000000003]
    }, {
        coord: [-4.740675384778361, -123.22265625000001]
    }, {
        coord: [-78.31385955743478, -131.66015625000003]
    }, {
        coord: [-70.55417853776078, -64.51171875000001]                                
    }],

    moose: [{
        coord: [42.35854391749705, -136.66992187500003]        
    }],

    // MISC //
    axe: [{
        coord: [-78.31385955743478, 131.74804687500003]        
    }],

    cache:[{
        coord: [83.599030708362, -146.25000000000003],
        name: 'Prepper Cache (food)',
        contains: ['bed']
    }, {
        coord: [81.97243132048267, -159.08203125000003],
        name: 'Prepper Cache (firewood)',
        contains: ['bed']
    }, {
        coord: [64.92354174306499, -149.23828125000003],
        name: 'Prepper Cache (food)',
        contains: ['bed']
    }, {
        coord: [-26.902476886279807, -161.01562500000003],
        name: 'Prepper Cache (food)',
        contains: ['bed']
    }, {
        coord: [-50.84757295365388, -14.765625000000002],
        name: 'Prepper Cache (hunting)',
        contains: ['bed', 'rifle']
    }, {
        coord: [-81.2550322990594, 58.35937500000001],
        name: 'Prepper Cache (medical)',
        contains: ['bed']
    }, {
        coord: [-21.37124437061831, 142.47070312500003],
        name: 'Prepper Cache (tools)',
        contains: ['bed']
    }, {
        coord: [45.089035564831036, 84.02343750000001],
        name: 'Prepper Cache (food)',
        contains: ['bed']
    }, {
        coord: [80.70399666821143, 85.693359375],
        name: 'Prepper Cache (clothes)'  ,
        contains: ['bed']               
    }]
};


var icon = L.Icon.extend({
    options: {
        iconAnchor:     [15, 15],
        popupAnchor:  [0, -5],
        tooltipAnchor: [15, 0]
    }
});

var popupClass = L.Popup.extend( {
    options: {
        isHidden: false,
        autoClose: false
    }
});

var icons = {};
// Locations
icons.houseUndetermined = new icon({iconUrl: './icons/house_undetermined.png'});
icons.houseAccess = new icon({iconUrl: './icons/house_access.png'});
icons.houseNonAccess = new icon({iconUrl: './icons/house_nonaccess.png'});
icons.houseDestroyed = new icon({iconUrl: './icons/house_destroyed.png'});
icons.caveAccess = new icon({iconUrl: './icons/cave_access.png'});
icons.caveNonAccess = new icon({iconUrl: './icons/cave_nonaccess.png'});
icons.spawn = new icon({iconUrl: './icons/spawn.png'});
icons.car = new icon({iconUrl: './icons/car.png'});
icons.tractor = new icon({iconUrl: './icons/tractor.png'});
icons.ropePresent = new icon({iconUrl: './icons/rope_present.png'});
icons.ropeMissing = new icon({iconUrl: './icons/rope_missing.png'});
icons.oneway = new icon({iconUrl: './icons/oneway.png'});
icons.twoway = new icon({iconUrl: './icons/twoway.png'});
icons.regionChange = new icon({iconUrl: './icons/region_change.png'});
// Interactible locations
icons.fireplace = new icon({iconUrl: './icons/fireplace.png'});
icons.bed = new icon({iconUrl: './icons/bed.png'});
icons.workshop = new icon({iconUrl: './icons/workshop.png'});
icons.safe = new icon({iconUrl: './icons/safe.png'});
icons.firepit = new icon({iconUrl: './icons/firepit.png'});
// Items
icons.coal = new icon({iconUrl: './icons/coal.png'});
icons.book = new icon({iconUrl: './icons/book.png'});
icons.firestriker = new icon({iconUrl: './icons/firestriker.png'});
icons.axe = new icon({iconUrl: './icons/axe.png'});
icons.rifle = new icon({iconUrl: './icons/rifle.png'});
icons.revolver = new icon({iconUrl: './icons/revolver.png'});
icons.bow = new icon({iconUrl: './icons/bow.png'});
icons.hacksaw = new icon({iconUrl: './icons/hacksaw.png'});
icons.hammer = new icon({iconUrl: './icons/hammer.png'});
icons.rope = new icon({iconUrl: './icons/rope.png'});
// Environment
icons.corpse = new icon({iconUrl: './icons/corpse.png'});
icons.cattail = new icon({iconUrl: './icons/cattail.png'});
icons.mushroom = new icon({iconUrl: './icons/mushroom.png'});
icons.saplingBirch = new icon({iconUrl: './icons/sapling_birch.png'});
icons.saplingMaple = new icon({iconUrl: './icons/sapling_maple.png'});
icons.lichen = new icon({iconUrl: './icons/lichen.png'});
icons.rosehips = new icon({iconUrl: './icons/rosehips.png'});
// Hunting
icons.bear = new icon({iconUrl: './icons/bear.png'});
icons.wolf = new icon({iconUrl: './icons/wolf.png'});
icons.rabbit = new icon({iconUrl: './icons/rabbit.png'});
icons.deer = new icon({iconUrl: './icons/deer.png'});
icons.moose = new icon({iconUrl: './icons/moose.png'});
// Misc
icons.key = new icon({iconUrl: './icons/key.png'});
icons.cache = new icon({iconUrl: './icons/cache.png'});
icons.fishingHole = new icon({iconUrl: './icons/fishing_hole.png'});