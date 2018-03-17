const locations = [
  {title: 'Rutland hall', location: {lat: 52.9401096, lng: -1.2034978}},
  {title: 'George Green library', location: {lat: 52.9409985, lng: -1.1909528}},
  {title: 'hallward library', location: {lat: 52.9389143, lng: -1.1972201}},
  {title: 'Coates Building', location: {lat: 52.9409645, lng: -1.1893462}},
  {title: 'David Ross Sports Village', location: {lat: 52.9390171, lng: -1.207507}},
  {title: 'Trent Building', location: {lat: 52.93675649999999, lng: -1.1959181}},
  {title: 'Portland Building', location: {lat: 52.9380647, lng: -1.1943185}},
  {title: 'Lakeside Art', location: {lat: 52.938606, lng: -1.189859}}
];
// Create a styles array to use with the map.
const styles = [
  {
    featureType: 'water',
    stylers: [
      { color: '#19a0d8' }
    ]
  },{
    featureType: 'administrative',
    elementType: 'labels.text.stroke',
    stylers: [
      { color: '#ffffff' },
      { weight: 6 }
    ]
  },{
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      { color: '#e85113' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      { color: '#efe9e4' },
      { lightness: -40 }
    ]
  },{
    featureType: 'transit.station',
    stylers: [
      { weight: 9 },
      { hue: '#e85113' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      { visibility: 'off' }
    ]
  },{
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      { lightness: 100 }
    ]
  },{
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      { lightness: -100 }
    ]
  },{
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      { visibility: 'on' },
      { color: '#f0e4d3' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#efe9e4' },
      { lightness: -25 }
    ]
  }
];
