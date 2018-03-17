#### Geocoding
- Taking address and get lat lng
- vice versa(Reverse Geocoding)
- For example: https://maps.googleapis.com/maps/api/geocode/json?address=36+Beeston+Road,+Nottingham&key=AIzaSyA7IA5EZ8_jG1yyf6QYb6EQ6xX7ok4RpDM
- Returns a json file:
```
{
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "36",
               "short_name" : "36",
               "types" : [ "street_number" ]
            },
            {
               "long_name" : "Beeston Road",
               "short_name" : "Beeston Rd",
               "types" : [ "route" ]
            },
            {
               "long_name" : "Nottingham",
               "short_name" : "Nottingham",
               "types" : [ "postal_town" ]
            },
            {
               "long_name" : "Nottinghamshire",
               "short_name" : "Nottinghamshire",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "England",
               "short_name" : "England",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "英国",
               "short_name" : "GB",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "NG7 2JR",
               "short_name" : "NG7 2JR",
               "types" : [ "postal_code" ]
            }
         ],
         "formatted_address" : "36 Beeston Rd, Nottingham NG7 2JR英国",
         "geometry" : {
            "location" : {
               "lat" : 52.939588,
               "lng" : -1.1836193
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
               "northeast" : {
                  "lat" : 52.9409369802915,
                  "lng" : -1.182270319708498
               },
               "southwest" : {
                  "lat" : 52.9382390197085,
                  "lng" : -1.184968280291502
               }
            }
         },
         "place_id" : "ChIJv8TTDhHCeUgRNonK5UFMRZM",
         "types" : [ "street_address" ]
      }
   ],
   "status" : "OK"
}
```
- example for Reverse Geocoding:
- https://maps.googleapis.com/maps/api/geocode/json?latlng=33.1262476,-117.3115765&key=AIzaSyA7IA5EZ8_jG1yyf6QYb6EQ6xX7ok4RpDM

#### Using geocode in client side:
```
// This function takes the input value in the find nearby area text input
// locates it, and then zooms into that area. This is so that the user can
// show all listings, then decide to focus on one area of the map.
function zoomToArea() {
  // Initialize the geocoder.
  var geocoder = new google.maps.Geocoder();
  // Get the address or place that the user entered.
  var address = document.getElementById('zoom-to-area-text').value;
  // Make sure the address isn't blank.
  if (address == '') {
    window.alert('You must enter an area, or address.');
  } else {
    // Geocode the address/area entered to get the center. Then, center the map
    // on it and zoom in
    geocoder.geocode(
      { address: address,
        componentRestrictions: {locality: 'New York'}
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          map.setZoom(15);
        } else {
          window.alert('We could not find that location - try entering a more' +
              ' specific place.');
        }
      });
  }
}
```
#### Googlemap elevation
- https://maps.googleapis.com/maps/api/elevation/json?parameters
- parameters: location, key

#### Distance matrix
- https://maps.googleapis.com/maps/api/distancematrix/json?parameters
- parameters: origins,destinations, key(compulsory)
- mode, avoid(optional)

```
var origin1 = new google.maps.LatLng(55.930385, -3.118425);
var origin2 = 'Greenwich, England';
var destinationA = 'Stockholm, Sweden';
var destinationB = new google.maps.LatLng(50.087692, 14.421150);

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix(
  {
    origins: [origin1, origin2],
    destinations: [destinationA, destinationB],
    travelMode: 'DRIVING',
    transitOptions: TransitOptions,
    drivingOptions: DrivingOptions,
    unitSystem: UnitSystem,
    avoidHighways: Boolean,
    avoidTolls: Boolean,
  }, callback);
  ```
#### Direction
https://developers.google.com/maps/documentation/directions/
- https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&key=YOUR_API_KEY
- parameters: origins,destinations, key(compulsory)
- mode, waypoint(optional)
