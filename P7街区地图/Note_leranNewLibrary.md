#### What to do when given a new project?
- Run the application
- Explore the file structure
- Look at what js files are loaded
- Figure out what the libraries do

#### Read from index.html
###### read from the file structure
- app view&todo view--->two wiews
- todo.js---> model
- collections--->collections of todo models
- Bower.json--->a package manager for the web
- backbone.js gives structure to web oages by providing models, collections and views.
- uderscore.js is a javaScript library that provides a whole mass of useful programming helpers without extending any built in objects----->bunch of utility functions
******
```
<script type="text/template" id="item-template">
```
<p> this represents snippets HTML that our JS can use to display things in our app</p>

#### Backbone.js
- MV* patterns
#### Explore the code
```
<script src="js/models/todo.js"></script>
<script src="js/collections/todos.js"></script>
<script src="js/views/todo-view.js"></script>
<script src="js/views/app-view.js"></script>
<script src="js/routers/router.js"></script>
<script src="js/app.js"></script>
```
These codes run in an order
- in models.js:
```
var app = app || {};
```
this means if app exists, do nothing, else set it as {}
#####  immediately invoked function, any variable invoked in this function does not pollute the global
```
(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();

```
<b>Same patterns in all other js files</b>

A view that displays a document in a search result might look something like this:
```
var DocumentView = Backbone.View.extend({

  events: {
    "dblclick"                : "open",
    "click .icon.doc"         : "select",
    "contextmenu .icon.doc"   : "showMenu",
    "click .show_notes"       : "toggleNotes",
    "click .title .lock"      : "editAccessLevel",
    "mouseover .title .date"  : "showTooltip"
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  open: function() {
    window.open(this.model.get("viewer_url"));
  },

  select: function() {
    this.model.set({selected: true});
  },

  ...

});
```
*************
