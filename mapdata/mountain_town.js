var mapdata = {
    // LOCATIONS //

    houseUndetermined: [{
        coord: [49.03786794532644, -10.810546875000002]
    }, {
        coord: [52.05249047600099, -12.919921875000002]
    }, {
        coord: [48.40003249610685, -14.853515625000002]
    }, {
        coord: [50.401515322782366, -8.876953125000002]
    }, {
        coord: [50.736455137010665, -1.6699218750000002]
    }, {
        coord: [49.38237278700955, -0.3515625]
    }, {
        coord: [55.825973254619015, 2.1093750000000004]
    }, {
        coord: [56.022948079627454, 4.218750000000001]
    }, {
        coord: [56.607885465009254, 6.416015625000001]
    }, {
        coord: [59.40036514079251, -10.019531250000002]
    }, {
        coord: [48.80686346108519, 9.316406250000002]
    }, {
        coord: [46.31658418182218, 10.986328125000002]
    }, {
        coord: [45.336701909968134, 2.6367187500000004]
    }, {
        coord: [41.178653972331674, 4.218750000000001]
    }, {
        coord: [42.48830197960227, 7.822265625000001]
    }, {
        coord: [40.58058466412764, 12.392578125]
    }, {
        coord: [38.61687046392973, 4.306640625000001]
    }, {
        coord: [38.06539235133249, 9.140625000000002]                                                                                                                        
    }],

    houseAccess: [{
        coord: [58.263287052486035, 0],
        name: 'Milton House',
        contains: ['bed', 'fireplace', 'spawn', 'rifle', 'revolver' ]
    }, {
        coord: [52.05249047600099, 2.3730468750000004],
        name: 'Post Office',
        contains: ['book']
    }, {
        coord: [54.41892996865827, -5.097656250000001],
        name: 'Milton Credit Union',
        contains: ['safe', 'corpse']
    }, {
        coord: [34.452218472826566, -18.281250000000004],
        name: 'Milton House',
        contains: ['bed', 'fireplace', 'rifle', 'hacksaw', 'hammer']
    }, {
        coord: [31.653381399664, -86.57226562500001],
        name: 'Paradise Meadows Farm',
        contains: ['bed', 'fireplace', 'book', 'rifle', 'hammer' ]
    }, {
        coord: [6.489983332670651, 9.755859375000002],
        name: 'Orca Gas Station',
        contains: ['bed', 'fireplace', 'hacksaw']
    }, {
        coord: [76.7403972505508, -65.83007812500001],
        name: 'St Christopher\'s Church',
        contains: ['bed', 'fireplace', 'spawn', 'rifle' ]
    }, {
        coord: [82.04574006217713, -17.929687500000004],
        name: 'Trailer' ,
        contains: ['bed', 'workshop', 'hacksaw' ]
    }],

    houseNonAccess: [{
        coord: [55.229023057406344, -24.082031250000004],
        contains: ['coal', 'axe', 'corpse']
    }, {
        coord: [58.07787626787517, 4.394531250000001],
        contains: ['axe']
    }, {
        coord: [-68.43151284537514, -104.150390625],
        contains: ['fireplace']
    }, {
        coord: [25.958044673317843, -84.19921875000001]
    }, {
        coord: [25.958044673317843, -78.92578125000001]
    }, {
        coord: [35.17380831799959, -78.92578125000001],
        contains: ['fireplace', 'workshop', 'corpse', 'rope', 'key']
    }, {
        coord: [52.802761415419674, -62.66601562500001],
        contains: ['corpse']
    }, {
        coord: [52.32191088594773, -53.43750000000001]
    }, {
        coord: [50.84757295365389, -52.29492187500001]
    }, {
        coord: [5.178482088522876, 15.117187500000002]
    }, {
        coord: [-12.726084296948184, -22.67578125],
        contains: ['bed', 'fireplace', 'rifle', 'corpse' ]
    }],

    houseDestroyed: [{
        coord: [57.136239319177434, -7.910156250000001]
    }, {
        coord: [49.724479188712984, 3.7792968750000004]
    }, {
        coord: [54.16243396806781, -20.390625000000004]
    }, {
        coord: [47.15984001304432, 1.2304687500000002]
    }, {
        coord: [47.87214396888731, 4.658203125000001]
    }, {
        coord: [45.460130637921004, 6.328125000000001]
    }, {
        coord: [44.276671273775186, 7.294921875000001]
    }, {
        coord: [43.70759350405296, 4.306640625000001]
    }, {
        coord: [40.979898069620155, 8.085937500000002]
    }, {
        coord: [44.402391829093915, 11.865234375]
    }, {
        coord: [43.32517767999296, -12.744140625000002],
        contains: ['axe']
    }],

    caveAccess: [{
        coord: [57.088515327886505, 129.19921875000003],
        name: 'Cave',
        contains: ['corpse'] 
    }, {
        coord: [65.03506043658815, 112.93945312500001],
        name: 'Cave',
        contains: ['corpse']
    }, {
        coord: [83.25709720189784, 27.685546875000004],
        name: 'To Hushed River Valley'
    }, {
        coord: [-44.27667127377517, 104.32617187500001],
        name: 'To Mystery Lake'        
    }],

    caveNonAccess: [{
        coord: [-44.84029065139799, 23.115234375], 
        contains: ['fireplace', 'coal', 'axe', 'rifle', 'corpse']
    }, {
        coord: [-69.7789517764676, -48.076171875],
        contains: ['coal', 'bow', 'corpse']
    }, {
        coord: [-27.994401411046148, -85.78125],
        contains: ['coal']
    }, {
        coord: [77.97074497652062, -12.568359375000002]
    }, {
        coord: [75.90950400691688, 126.21093750000001]
    }, {
        coord: [61.98026726504404, 72.77343750000001]
    }, {
        coord: [15.792253570362446, 136.40625000000003],
        contains: ['bed', 'firepit']
    }, {
        coord: [33.50475906922609, 53.70117187500001],
        contains: ['coal', 'book', 'rifle']
    }],

    spawn: [{
        coord: [-14.604847155053898, 36.82617187500001]
    }, {
        coord: [28.459033019728068, 32.95898437500001]
    }, {
        coord: [-2.284550660236957, -36.73828125000001]
    }, {
        coord: [79.5446087817067, 41.83593750000001]
    }, {
        coord: [83.7347568285531, -23.466796875000004]
    }, {
        coord: [70.81581215931348, -84.11132812500001]                                                
    }],

    car: [{
        coord: [-27.215556209029675, -58.88671875000001]   
    }, {
        coord: [73.84928645675248, 125.68359375000001]
    }, {
        coord: [75.67219739055291, 107.22656250000001]
    }, {
        coord: [74.8219342035653, 67.06054687500001],
        contains: ['rifle']
    }, {
        coord: [77.5041191797399, -60.99609375000001]
    }, {
        coord: [75.11822201684028, -61.69921875000001]
    }, {
        coord: [73.07384351277217, -52.20703125000001]
    }, {
        coord: [70.1403642720717, -43.41796875000001]
    }, {
        coord: [58.676937672586924, -7.910156250000001]
    }, {
        coord: [55.47885346331036, -8.349609375000002]
    }, {
        coord: [55.825973254619015, -6.591796875000001]
    }, {
        coord: [51.6180165487737, -6.591796875000001]
    }, {
        coord: [51.890053935216926, -2.1972656250000004]
    }, {
        coord: [52.64306343665892, 5.273437500000001]
    }, {
        coord: [53.38332836757156, 6.943359375000001]
    }, {
        coord: [54.213861000644926, 8.876953125000002],
        contains: ['rifle']
    }, {
        coord: [46.86019101567027, 5.449218750000001]
    }, {
        coord: [47.45780853075031, 8.701171875000002]
    }, {
        coord: [43.13306116240615, 10.546875000000002]
    }, {
        coord: [42.87596410238256, 6.240234375]
    }, {
        coord: [-8.146242825034385, 5.976562500000001]
    }, {
        coord: [6.315298538330033, 13.0078125]
    }, {
        coord: [25.799891182088334, -81.47460937500001],
        contains: ['key']                                                                                                                                                                                  
    }],

    tractor: [{
        coord: [35.10193405724608, -83.05664062500001],
        contains: ['key']        
    }],

    regionChange: [{
        coord: [-82.54060382149495, -112.67578125],
        name: 'To Forlorn Muskeg'        
    }],

    oneway: [{
        coord: [54.265224078605684, 107.05078125000001]        
    }],

    twoway: [{
        coord: [25.48295117535531, 149.23828125000003]
    }, {
        coord: [28.536274512989916, 147.48046875000003]
    }, {
        coord: [24.04646399966658, 146.60156250000003]
    }, {
        coord: [47.39834920035926, 64.42382812500001]
    }, {
        coord: [49.55372551347579, 29.355468750000004]                
    }],

    ropePresent: [{
        coord: [-57.0885153278865, 23.818359375000004]
    }, {
        coord: [-28.07198030177986, -26.19140625]
    }, {
        coord: [-19.559790136497412, -78.04687500000001]
    }, {
        coord: [-29.45873118535533, -79.89257812500001]                        
    }],

    // INTERACTIBLE LOCATIONS //
    fireplace: [{
        coord: [82.34410000677865, -20.126953125000004]                      
    }],

    firepit: [{
        coord: [72.76406472320436, 55.72265625]
    }, {
        coord: [-55.4290134524074, -37.35351562500001]                
    }],

    // ENVIRONMENT //
    corpse: [{
        coord: [74.84492867694821, 104.23828125000001],
        contains: ['rifle']
    }, {
        coord: [73.52839948765174, 57.30468750000001],
        contains: ['rifle']
    }, {
        coord: [80.88675843015639, -7.910156250000001]
    }, {
        coord: [68.43151284537514, 14.414062500000002]
    }, {
        coord: [43.83452678223684, -90.43945312500001]
    }, {
        coord: [32.24997445586331, -89.56054687500001],
        contains: ['key']
    }, {
        coord: [-73.995328341348, -76.640625]
    }, {
        coord: [-75.51915125947707, -61.52343750000001]
    }, {
        coord: [-17.392579271057766, 38.05664062500001]
    }, {
        coord: [-0.17578097424708533, 37.79296875000001]                
    }],

    cattail: [{
        coord: [47.69497434186282, 113.81835937500001]
    }, {
        coord: [-44.402391829093915, 89.56054687500001]
    }, {
        coord: [-46.86019101567026, 84.462890625]
    }, {
        coord: [-49.781264058178344, 81.91406250000001]
    }, {
        coord: [-51.0690166596039, 77.87109375]
    }, {
        coord: [-51.89005393521691, 73.65234375000001]
    }, {
        coord: [-52.589700768717805, 69.43359375000001]                                                
    }, {
        coord: [51.01375465718821, 108.01757812500001]
    }, {
        coord: [50.00773901463687, 58.62304687500001]
    }, {
        coord: [53.54030739150022, -41.04492187500001]        
    }, {
        coord: [40.979898069620155, -6.50390625]
    }, {
        coord: [44.213709909702054, -15.556640625000002]
    }, {
        coord: [0.9667509997666425, -59.15039062500001]
    }, {
        coord: [19.72534224805787, -44.20898437500001]
    }, {
        coord: [13.66733825965496, -45.615234375]
    }, {
        coord: [31.128199299111984, -38.23242187500001]
    }, {
        coord: [40.17887331434698, -38.49609375000001]
    }, {
        coord: [45.39844997630411, -38.05664062500001]
    }, {
        coord: [66.26685631430843, -29.003906250000004]
    }, {
        coord: [69.31832006949072, -27.158203125000004]
    }, {
        coord: [68.78414378041504, -19.599609375000004]
    }, {
        coord: [70.87349131926352, -13.095703125]
    }, {
        coord: [78.40253749367973, -71.71875000000001]
    }, {
        coord: [78.47300170046985, -62.05078125000001]
    }, {
        coord: [77.56104173187533, -79.80468750000001]
    }, {
        coord: [73.45347276327499, 10.634765625]
    }, {
        coord: [73.47848507889992, 27.333984375000004]
    }, {
        coord: [75.18578927942626, 19.423828125000004]
    }, {
        coord: [68.13885164925576, 91.845703125]
    }, {
        coord: [70.87349131926352, 95.97656250000001]
    }, {
        coord: [73.04823634299835, 106.25976562500001]
    }, {
        coord: [76.16399261609192, 108.10546875000001]
    }, {
        coord: [-29.76437737516313, -57.83203125000001]
    }, {
        coord: [-37.37015718405752, -57.74414062500001]
    }, {
        coord: [-51.944264879028765, -80.94726562500001]
    }, {
        coord: [-61.85614879566797, -64.68750000000001]
    }, {
        coord: [-61.98026726504402, -76.90429687500001]
    }, {
        coord: [-65.94647177615738, -84.81445312500001]
    }, {
        coord: [-67.54216668838531, -97.73437500000001]
    }, {
        coord: [-70.08056215839736, -104.58984375000001]                                                                                                                                                                                                                                                               
    }],

    mushroom: [{
        coord: [-55.178867663282, 26.894531250000004]
    }, {
        coord: [-51.39920565355378, 17.138671875000004]
    }, {
        coord: [-46.80005944678731, 14.23828125]
    }, {
        coord: [3.9519408561575946, -34.27734375000001]
    }, {
        coord: [24.5271348225978, -7.558593750000001]
    }, {
        coord: [32.7688004848817, -15.292968750000002]
    }, {
        coord: [36.73888412439431, -19.775390625]
    }, {
        coord: [46.37725420510028, -16.435546875000004]
    }, {
        coord: [-0.9667509997666298, 40.34179687500001]
    }, {
        coord: [20.797201434307, 38.14453125000001]
    }, {
        coord: [57.18390185831188, -13.535156250000002]
    }, {
        coord: [27.13736835979561, -87.626953125]
    }, {
        coord: [22.268764039073968, -80.85937500000001]
    }, {
        coord: [-45.70617928533085, -54.4921875]
    }, {
        coord: [-66.86108230224609, -103.35937500000001]
    }, {
        coord: [-82.99413186927224, -88.681640625]
    }, {
        coord: [67.7760253890732, -44.20898437500001]
    }, {
        coord: [70.17020068549206, -33.31054687500001]
    }, {
        coord: [74.913708156753, -30.673828125000004]
    }, {
        coord: [73.87371654457475, 55.45898437500001]
    }, {
        coord: [79.9665895843264, 112.14843750000001]
    }, {
        coord: [78.54304353589549, 121.11328125000001]                                                                                                                                                                            
    }],

    saplingBirch: [{
        coord: [43.45291889355465, -18.105468750000004]
    }, {
        coord: [33.87041555094183, -12.656250000000002]
    }, {
        coord: [49.03786794532644, 50.09765625000001]
    }, {
        coord: [6.664607562172573, -76.81640625000001]
    }, {
        coord: [78.15255126151743, -81.21093750000001]
    }, {
        coord: [77.97074497652062, -48.60351562500001]
    }, {
        coord: [74.1160468394894, 49.306640625]
    }, {
        coord: [79.05513728566139, 117.15820312500001]
    }, {
        coord: [-46.92025531537452, -45.43945312500001]
    }, {
        coord: [-56.46249048388979, -40.34179687500001]
    }, {
        coord: [-51.67255514839675, -74.97070312500001]
    }, {
        coord: [-69.93030017617484, -50.80078125]
    }, {
        coord: [-72.23551372557404, -110.56640625000001]
    }, {
        coord: [-81.68514398454681, -67.85156250000001]
    }, {
        coord: [-70.0205873017406, -51.24023437500001]    
    }, {
        coord: [-54.62297813269033, -63.19335937500001]                                                                                                                 
    }],

    saplingMaple: [{
        coord: [72.26231002404462, 18.017578125000004]
    }, {
        coord: [74.84492867694821, -21.4453125]
    }, {
        coord: [74.70644988318502, -91.58203125000001]
    }, {
        coord: [47.989921667414194, -94.306640625]
    }, {
        coord: [-1.4061088354351594, -62.22656250000001]
    }, {
        coord: [-20.385825381874263, 26.718750000000004]
    }, {
        coord: [-22.59372606392931, -15.732421875000002]
    }, {
        coord: [-45.460130637921, -45.966796875]                                                        
    }],

    lichen: [{
        coord: [55.229023057406344, 128.32031250000003]
    }, {
        coord: [-78.9039293885709, -94.21875]        
    }, {
        coord: [42.09822241118974, 54.4921875]
    }, {
        coord: [39.842286020743394, 45.3515625]
    }, {
        coord: [42.74701217318067, 36.73828125000001]
    }, {
        coord: [65.33017791526855, -9.492187500000002]
    }, {
        coord: [63.35212928507874, -0.43945312500000006]
    }, {
        coord: [58.44773280389084, -24.257812500000004]
    }, {
        coord: [37.09023980307208, -12.128906250000002]
    }, {
        coord: [30.221101852485987, 33.39843750000001]
    }, {
        coord: [24.686952411999155, 37.52929687500001]
    }, {
        coord: [4.915832801313164, -7.031250000000001]
    }, {
        coord: [1.9332268264771233, -1.5820312500000002]
    }, {
        coord: [0.4394488164139768, 7.382812500000001]
    }, {
        coord: [-24.926294766395593, -19.248046875000004]
    }, {
        coord: [-82.58610635020881, -95.44921875]
    }, {
        coord: [-81.98469589107245, -67.32421875000001]
    }, {
        coord: [-73.15043991163012, -70.75195312500001]
    }, {
        coord: [-68.65655498475736, -111.53320312500001]
    }, {
        coord: [-71.52490903732816, -110.830078125]
    }, {
        coord: [-70.37785394109224, -52.91015625000001]
    }, {
        coord: [-67.67608458198099, -46.31835937500001]
    }, {
        coord: [-54.31652324025827, -42.62695312500001]
    }, {
        coord: [19.228176737766262, -86.22070312500001]
    }, {
        coord: [29.458731185355344, -56.51367187500001]
    }, {
        coord: [26.194876675795218, -48.51562500000001]
    }, {
        coord: [74.75274618925877, -80.24414062500001]
    }, {
        coord: [77.0394184427303, -80.68359375000001]
    }, {
        coord: [77.61770905279676, 9.931640625000002]
    }, {
        coord: [75.82365950624266, 12.832031250000002]
    }, {
        coord: [74.44935750063425, 32.43164062500001]
    }, {
        coord: [72.44879155730672, 81.29882812500001]                                                                                                                                                                                                                                                
    }],

    rosehips: [{
        coord: [22.350075806124867, 143.52539062500003]
    }, {
        coord: [25.403584973186703, 151.78710937500003]
    }, {
        coord: [-75.0956327285438, -94.13085937500001]        
    }, {
        coord: [28.767659105691255, 149.41406250000003]
    }, {
        coord: [44.715513732021336, 58.27148437500001]
    }, {
        coord: [40.84706035607122, 51.85546875000001]
    }, {
        coord: [76.31035754301747, -52.646484375]
    }, {
        coord: [82.59743878897305, -10.195312500000002]
    }, {
        coord: [82.95112060573366, -15.029296875000002]                        
    }, {
        coord: [40.245991504199026, 47.4609375]
    }, {
        coord: [51.6180165487737, 52.55859375000001]
    }, {
        coord: [38.134556577054134, -5.537109375000001]
    }, {
        coord: [29.84064389983441, 30.761718750000004]
    }, {
        coord: [-22.024545601240337, -28.564453125000004]
    }, {
        coord: [-45.82879925192133, 21.26953125]
    }, {
        coord: [-49.325121991040014, 16.787109375000004]
    }, {
        coord: [-51.39920565355378, 38.935546875]
    }, {
        coord: [-82.87521777889144, -91.318359375]
    }, {
        coord: [-81.5182718765338, -64.51171875000001]
    }, {
        coord: [-78.1344931829381, -52.47070312500001]
    }, {
        coord: [-71.80141030136787, -113.02734375000001]
    }, {
        coord: [-69.25614923150721, -106.61132812500001]
    }, {
        coord: [-73.22669969306126, -75.49804687500001]
    }, {
        coord: [-56.170022982932046, -42.62695312500001]
    }, {
        coord: [-52.052490476001, -31.289062500000004]
    }, {
        coord: [-33.94335994657881, -62.75390625000001]
    }, {
        coord: [-52.21433860825822, -77.08007812500001]
    }, {
        coord: [22.268764039073968, -46.93359375000001]
    }, {
        coord: [81.72318761821157, -16.171875000000004]
    }, {
        coord: [75.23066741281573, 15.468750000000002]
    }, {
        coord: [73.25204504887357, 52.82226562500001]
    }, {
        coord: [67.8424164732793, 89.47265625]
    }, {
        coord: [79.05513728566139, 119.79492187500001]                                                                                        
    }],

    // HUNTING //
    bear: [{
        coord: [74.913708156753, 125.41992187500001]        
    }],

    wolf: [{
        coord: [78.87004849291571, -20.917968750000004]       
    }, {
        coord: [21.69826549685252, -2.1093750000000004]
    }, {
        coord: [-78.06198918665974, -66.26953125000001]                 
    }],

    rabbit: [{
        coord: [44.33956524809713, 106.25976562500001]
    }, {
        coord: [72.42226803952262, 102.12890625000001]
    }, {
        coord: [76.78065491639973, -76.28906250000001]
    }, {
        coord: [2.3723687086440504, -71.27929687500001]
    }, {
        coord: [45.089035564831036, 50.185546875]
    }, {
        coord: [-35.38904996691167, -12.128906250000002]
    }, {
        coord: [-53.12040528310657, 33.48632812500001]
    }, {
        coord: [-61.897577621605016, -26.279296875000004]
    }, {
        coord: [-34.81380331711314, -53.96484375000001]
    }, {
        coord: [-70.46620742226558, -96.41601562500001]
    }, {
        coord: [-80.13363539026878, -91.40625000000001]                                                                             
    }],

    deer: [{
        coord: [-72.01972876525514, -86.66015625000001]
    }, {
        coord: [9.015302333420598, -68.29101562500001]
    }, {
        coord: [44.08758502824518, -71.89453125000001]
    }, {
        coord: [48.04870994288686, 53.43750000000001]
    }, {
        coord: [74.28356347036141, -39.28710937500001]
    }, {
        coord: [14.43468021529728, 41.04492187500001]                        
    }],

    moose: [{
        coord: [-47.81315451752767, -60.29296875000001]   
    }, {
        coord: [78.75065903068668, 7.207031250000001]             
    }],

    // ITEMS //
    hammer: [{
        coord: [45.82879925192134, 8.876953125000002]
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