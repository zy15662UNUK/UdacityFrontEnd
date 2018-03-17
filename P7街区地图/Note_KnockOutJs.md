##### data-bind:
- value: searchInput,
- valueUpdate: 'afterkeydown',
- event: {'keyup': clear}"
- click: showResults

##### Observable& observableArray
-  self.placeArray = ko.observableArray([]);
-  self.placeArray().length
- self.placeArray()[j].title
