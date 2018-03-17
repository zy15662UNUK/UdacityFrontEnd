// The map part
var map;

// Create a new blank array for all the listing markers.
var markers = [];

// This global polygon variable is to ensure only ONE polygon is rendered.
var polygon = null;


var googleRequestTimeout = setTimeout(function(){
  console.log('e');
  alert('Fail to get google resources!!');
}, 5000);
$('#css').attr('class', 'sk-rotating-plane');
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  function mapConstruction() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 52.9401096, lng: -1.2034978},
      zoom: 13,
      styles: styles,
      mapTypeControl: false
    });
    clearTimeout(googleRequestTimeout);
    $('#css').attr('class', '');

  }
  mapConstruction();
  // These are the real estate listings that will be shown to the user.
  // Normally we'd have these in a database instead.

  var largeInfowindow = new google.maps.InfoWindow();

  // Style the markers a bit. This will be our listing marker icon.
  var defaultIcon = makeMarkerIcon('0091ff');

  // Create a "highlighted location" marker color for when the user
  // mouses over the marker.
  var highlightedIcon = makeMarkerIcon('FFFF24');

  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      icon: defaultIcon,
      id: i
    });
    // Push the marker to our array of markers.
    markers.push(marker);
    // Create an onclick event to open the large infowindow at each marker.
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);
      this.setIcon(highlightedIcon);
    });
    // Two event listeners - one for mouseover, one for mouseout,
    // to change the colors back and forth.
    marker.addListener('mouseover', function() {
      this.setIcon(highlightedIcon);
    });
    marker.addListener('mouseout', function() {
      this.setIcon(defaultIcon);
    });
  }
  document.getElementById('type-in-button-reset').addEventListener('click', Reset);
  document.getElementById('type-in-button-search').addEventListener('click', SearchResults);
  document.getElementById('type-in').addEventListener('input', Reset2);
// }

// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    // Clear the infowindow content to give the streetview time to load.
    var geocoder = new google.maps.Geocoder();
    var formatted_address = '';
    // if we don't define the type of the formatted_address
    // only get undefined for it
    geocoder.geocode({location: marker.position}, function(results, status){
      // can only do operation but not passing value
      formatted_address += results[0].formatted_address;
    });


    infowindow.marker = marker;
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick', function() {
      infowindow.marker = null;
    });
    var streetViewService = new google.maps.StreetViewService();
    var radius = 50;
    // In case the status is OK, which means the pano was found, compute the
    // position of the streetview image, then calculate the heading, then get a
    // panorama from that and set the options
    function getStreetView(data, status) {
      if (status == google.maps.StreetViewStatus.OK) {
        var nearStreetViewLocation = data.location.latLng;
        var heading = google.maps.geometry.spherical.computeHeading(
          nearStreetViewLocation, marker.position);
          infowindow.setContent('<div>' + marker.title + ". Address: "+ formatted_address+ '</div><div id="pano"></div>');
          var panoramaOptions = {
            position: nearStreetViewLocation,
            pov: {
              heading: heading,
              pitch: 30
            }
          };
        var panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), panoramaOptions);
      } else {
        infowindow.setContent('<div>' + marker.title + '</div>' +
          '<div>No Street View Found</div>');
      }
    }
    // Use streetview service to get the closest streetview image within
    // 50 meters of the markers position
    streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
    // Open the infowindow on the correct marker.
    infowindow.open(map, marker);
  }
}


// This function takes in a COLOR, and then creates a new marker
// icon of that color. The icon will be 21 px wide by 34 high, have an origin
// of 0, 0 and be anchored at 10, 34).
function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21, 34),
    new google.maps.Point(0, 0),
    new google.maps.Point(10, 34),
    new google.maps.Size(21,34));
  return markerImage;
}
// This is the function to compare the input strings and mark names on the map
function compareName(name, model) {
  var lowerName = name.toLowerCase();
  var nameArray = lowerName.split(' ');
  var lowerModel = model.toLowerCase();
  var modelArray = lowerModel.split(' ');
  for (i=0; i<nameArray.length;i++) {
    for (j=0;j<modelArray.length;j++) {
      if (nameArray[i]===modelArray[j]) {return true;}
    }
  }

}
// To clear the marks irrelavent to the search input
function SearchResults() {
  var bounds = new google.maps.LatLngBounds();
  var searchInput = document.getElementById('type-in').value;
  for (var i = 0; i < markers.length; i++) {
    if (!compareName(searchInput,markers[i].title)){
      markers[i].setMap(null);
      bounds.extend(markers[i].position);
    }
  }
  map.fitBounds(bounds);
}
// To reset the map once clicked the reset button
function Reset() {
  document.getElementById('form').reset();
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
// Reset the map once the search box is cleared
function Reset2() {
  var searchInput = document.getElementById('type-in').value;
  if (searchInput==='') {Reset();}

}
// The knockout part
var searchResultsViewModel = function() {
  var self = this;
  self.searchInput = ko.observable("");
  self.query = ko.observable('');
  self.placeArray = ko.observableArray([]);
  self.showArray = ko.observableArray([]);
  self.showArrayWiki = ko.observableArray([]);
  for(var i=0; i<locations.length;i++) {
    self.placeArray.push(locations[i]);
  }
  // response to the input value
  self.filteredNames = ko.computed(function() {
      if (self.query().length >= 0){return locations.filter(function(location) {
            return location.title.toLowerCase().indexOf(self.query().toLowerCase()) != -1;
        });
}else {return [];} });
  self.clear = function(event) {
    if(self.searchInput() === ''){
      self.showArray([]);
      self.showArrayWiki([]);
    }
  };
  // Function for click "search" button event
  self.showResults = function() {
    if(self.searchInput() !== '') {
      for (var j = 0; j < self.placeArray().length; j++) {
        if (compareName(self.searchInput(),self.placeArray()[j].title)){
          self.showArray.push(self.placeArray()[j]);
          self.wikiAJAX(self.placeArray()[j]);
        }
      }
    }
  };

  self.show = function(filteredName) {
      $('#wiki-list').attr('class', 'sk-rotating-plane');
      self.wikiAJAX(filteredName);
      for(var t=0;t<markers.length;t++) {
        if(markers[t].getTitle()===filteredName.title) {
          populateInfoWindow(markers[t], largeInfowindow);
          markers[t].setIcon(highlightedIcon);
        }}

  };
  // Clear the search results once press reset button
  self.reset = function() {
    self.showArray([]);
    self.showArrayWiki([]);
    self.filteredNames([]);
  };

  // wikipedia API part
  self.wikiAJAX = function(ele) {
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=query&format=json&callback=wikiCallback&list=search&srsearch=' + ele.title;
    // Deal with every request error
    // var wikiRequestTimeout = setTimeout(function(){
    //   console.log('e');
    //   alert('Fail to get wikipedia resources!!');
    // }, 5000);
    $.ajax({
      url: wikiUrl,
      // for the cross site request
      type: 'GET',
      dataType: 'jsonp',
      timeout: 10000,
      statusCode: {
        404: function() {
          alert( "page not found" );
        },
        500: function() {
          alert( "page not found" );
        },
        502: function() {
          alert( "502 badgate way" );
        },
        0: function() {
          alert( 'Request timeout' );
        }
      },
      // success: function(response) {}. same as .done()
      error: function(xhr,exception){
        if (exception === 'parsererror') {
          alert('Requested JSON parse failed.');
        }else if (exception === 'abort') {
          alert('Ajax request aborted.');
        } else {
          alert('Uncaught Error.\n' + xhr.responseText);
        }
      }
    })
    .done(function(data) {
      console.log(data);
      $('#wiki-list').attr('class', '');
      var title, url;
      title = data.query.search[0].title;
      url = 'http://en.wikipedia.org/wiki/'+title;
      self.showArrayWiki.push({title: title, link: url});
      // clearTimeout(wikiRequestTimeout);
    });

  };

};
ko.applyBindings(new searchResultsViewModel());

// Event listener for clicking the humbuger icon
document.getElementById('hum').addEventListener('click', function(e) {
  document.getElementById('optionBox').classList.toggle('open');
  document.getElementById('map').classList.toggle('open');
  document.getElementById('hum').classList.toggle('open');
  e.stopPropagation();
}
);
}
