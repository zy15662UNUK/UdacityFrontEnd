## Introduction to API
#### How to create a map?
- JS API: AIzaSyA7IA5EZ8_jG1yyf6QYb6EQ6xX7ok4RpDM
- google map road: AIzaSyBAD1qkvSluZyzx6BQWO9YTPxznWaNJXFE
```
var map;
function initMap() {
	map= new google.maps.Map(document.getElementById('map'), {
		center: {lat: 52.939922, lng: -1.203447},
		zoom: 13
	});
```
this is the way to create a google map class
'new google.maps.Map(where to place your map, {center:,zoom: }'
```
<script async defer
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7IA5EZ8_jG1yyf6QYb6EQ6xX7ok4RpDM&v=3&callback=initMap">
</script>
```
this is the way to load api; Attention the async
#### How to mark your own location on the map?
```
var tribeca = {lat: 40.719526, lng: -74.0089934};
<!-- this is the point to mark -->
<!-- Create a google marker instance -->
var marker = new google.maps.Marker({
	position: tribeca,
	map: map,
	title: 'First Marker!'
	<!-- The title which will appear when hover over the marker -->
});
```

#### information window & add multiple location
```
<script>
	var map;

	// Create a new blank array for all the listing markers.
	var markers = [];

	function initMap() {
		// Constructor creates a new map - only center and zoom are required.
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 40.7413549, lng: -73.9980244},
			zoom: 13
		});
```
		// These are the real estate listings that will be shown to the user.
		// Normally we'd have these in a database instead.
```
		var locations = [
			{title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
			{title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
			{title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
			{title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
			{title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
			{title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
		];
```
```
		var largeInfowindow = new google.maps.InfoWindow();
		<!-- google.maps.InfoWindow(Content of the window) -->

		var bounds = new google.maps.LatLngBounds();
		<!-- adjust the boundaries of the map to fit the location -->

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
				id: i
			});
			// Push the marker to our array of markers.
			markers.push(marker);
			// Create an onclick event to open an infowindow at each marker.
			marker.addListener('click', function() {
				populateInfoWindow(this, largeInfowindow);
			});
			<!-- Extend the boundries of the map for each marker -->
			bounds.extend(markers[i].position);
		}

		// Extend the boundaries of the map for each marker
		map.fitBounds(bounds);
	}

	// This function populates the infowindow when the marker is clicked. We'll only allow
	// one infowindow which will open at the marker that is clicked, and populate based
	// on that markers position.
	function populateInfoWindow(marker, infowindow) {
		// Check to make sure the infowindow is not already opened on this marker.
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			<!-- set the content for the information window -->
			infowindow.setContent('<div>' + marker.title + '</div>');
			<!-- open the info window on that marker -->
			infowindow.open(map, marker);
			// Make sure the marker property is cleared if the infowindow is closed.
			infowindow.addListener('closeclick',function(){
				infowindow.setMarker = null;
			});
		}
	}
</script>
```
#### Hide or show the information InfoWindow
```
for (var i = 0; i < locations.length; i++) {
	// Get the position from the location array.
	var position = locations[i].location;
	var title = locations[i].title;
	// Create a marker per location, and put into markers array.
	 var marker = new google.maps.Marker({
		position: position,
		title: title,
		animation: google.maps.Animation.DROP,
		id: i
	});
	// Push the marker to our array of markers.
	markers.push(marker);
	// Create an onclick event to open an infowindow at each marker.
	marker.addListener('click', function() {
		populateInfoWindow(this, largeInfowindow);
	});
}
document.getElementById('show-listings').addEventListener('click', showListings);
document.getElementById('hide-listings').addEventListener('click', hideListings);
}

// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
// Check to make sure the infowindow is not already opened on this marker.
if (infowindow.marker != marker) {
	infowindow.marker = marker;
	infowindow.setContent('<div>' + marker.title + '</div>');
	infowindow.open(map, marker);
	// Make sure the marker property is cleared if the infowindow is closed.
	infowindow.addListener('closeclick', function() {
		infowindow.marker = null;
	});
}
}


function showListings() {
	var bounds = new google.maps.LatLngBounds();
	// Extend the boundaries of the map for each marker and display the marker
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
		bounds.extend(markers[i].position);
	}
	map.fitBounds(bounds);
}

// This function will loop through the listings and hide them all.
function hideListings() {
	for (var i = 0; i < markers.length; i++) {
		<!-- Set the map property in each map to be null -->
		markers[i].setMap(null);
	}
}
```
#### Creating map stylers
First creating a array of styles of diff elements on map
featureType: geographical elements that can be targeted on the maps
elementType: what about that feature that you want to change. ex: the geometry itself, the label, the label outlier texts
stylers: the color and visibility properties that can be applied to the map features(Cascading)
```
var styles = [
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
```
Then apply when initialize the map
mapTypeControl: allows the users to change the maptype to roadterrins, settellines and etc
```
map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.7413549, lng: -73.9980244},
	zoom: 13,
	styles: styles,
	mapTypeControl: false
});
```
#### Static maps and streetview service
- google.maps.geometry.spherical.computeHeading():
https://developers.google.com/maps/documentation/javascript/geometry?hl=zh-cn
- google.maps.StreetViewPanorama():
https://developers.google.com/maps/documentation/javascript/streetview?hl=zh-cn
- google.maps.StreetViewService():
https://developers.google.com/maps/documentation/javascript/streetview?hl=zh-cn
##### pitch & headingS: within street view imaginary, pitch and heading determine the camera angle from the reference point to the point
- geometry library and visulization
https://classroom.udacity.com/nanodegrees/nd001/parts/00113454014/modules/4fd8d440-9428-4de7-93c0-4dca17a36700/lessons/8304370457/concepts/3632a49f-9ce4-45aa-bb1d-859ee9fb1df4
https://maps.googleapis.com/maps/api/staticmap?center=CA&zoom=14&size=400x400&key=AIzaSyA7IA5EZ8_jG1yyf6QYb6EQ6xX7ok4RpDM
#### Introducing library:
```
<script async defer
		src=
		"https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=MYAPIKEY&v=3&callback=initMap">
</script>
```
Loading library
<b>libraries=geometry,drawing</b>

#### DrawingManager 选项
DrawingManager 构造函数采用一组选项来定义要显示的控件集、控件的位置以及初始绘图状态。

```
var drawingManager = new google.maps.drawing.DrawingManager({
	drawingMode: google.maps.drawing.OverlayType.POLYGON,

	<!-- DrawingManager 的 drawingMode 属性用于定义 DrawingManager 的初始绘图状态。该属性接受 google.maps.drawing.OverlayType 常量，且默认为 null（在此情况下初始化 DrawingManager 时，光标会处于非绘图模式）。 -->

	drawingControl: true,

	<!-- DrawingManager 的 drawingControl 属性用于定义绘图工具选择界面在地图上的可见性。该属性接受布尔值。
	您还可以使用 DrawingManager 的 drawingControlOptions 属性定义控件的位置以及控件中应表示的叠加层的类型。
 -->

	drawingControlOptions: {
		position: google.maps.ControlPosition.TOP_LEFT,
		drawingModes: [
			google.maps.drawing.OverlayType.POLYGON
		]
	}
	<!-- position：用于定义绘图控件在地图上的位置，且接受 google.maps.ControlPosition 常量。
	drawingModes：一个 google.maps.drawing.OverlayType 常量数组，且用于定义绘图控件形状选择器中包含的叠加层类型。系统将始终显示手形图标，以便用户无需绘图即可与地图进行交互。控件中工具的顺序将与其在数组中声明的顺序一致。
	您可为每种叠加层类型都指定一组默认属性，以便定义首次创建相应叠加层时所采用的外观。这些属性可在叠加层的 {overlay}Options 属性（其中 {overlay} 表示叠加层的类型）中进行定义。例如，圆形的填充属性、描边属性、zIndex 和可点击性均可使用 circleOptions 属性进行定义。如果已传递任何大小、位置或地图值，则系统会忽略这些默认属性。有关可以设置的属性的完整详细信息，请参阅 API 参考文档。 -->
});
```
