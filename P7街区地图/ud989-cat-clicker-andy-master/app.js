
var cats = $(".cat");
var buttons = $("button");
var model = {
  // We have to setup the initical cat display
	currentCat: null,
	cats: [
	{name: 'cat1', clickcount: 0, src: "cat_picture1.jpg"},
	{name: 'cat2', clickcount: 0, src: "cat_picture2.jpg"},
	{name: 'cat3', clickcount: 0, src: "cat_picture3.jpg"},
	{name: 'cat4', clickcount: 0, src: "cat_picture4.jpg"},
	{name: 'cat5', clickcount: 0, src: "cat_picture5.jpg"},
],
};
var octopus = {
	init: function() {
		model.currentCat = model.cats[0];
		catView.init();
		catListView.init();

	},
	getCurrentCat: function() {
		return model.currentCat;
	},
	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},
	getAllCat: function() {
		return model.cats;
	},
	updateCount: function() {
		model.currentCat.clickcount += 1;
		catView.render();
	},
};
var catListView = {
	init: function() {
		this.catlist = $('#catlist');
		this.render();
	},
	render: function() {
		for (var i=0; i<octopus.getAllCat().length;i++) {
			var newElem = document.createElement('button');
			var cats = octopus.getAllCat();
			newElem.textContent = octopus.getAllCat()[i].name;
// pass in the cat and then return the function
// Here we are invoking a function and passing it our cat object.
// It returns a function that refers to that individual cat's data.
// Each time through the loop in this way we can construct unique click handlers that work with the correct cat object.
			newElem.addEventListener('click', (function(catCopy) {
					return function() {
							octopus.setCurrentCat(catCopy);
							catView.render();
					};
			})(cats[i]));
			this.catlist.append(newElem);
		}
	},
};
var catView = {
	init: function() {
		this.catName = $('#cat-name');
		this.catCount = $('#cat-count');
		this.catImg = $('#cat-img');
		this.catImg.click(function(event) {
			octopus.updateCount();
		});
		this.render();
	},
	render: function() {
		var cat = octopus.getCurrentCat();
		console.log(cat);
		this.catName.text(cat.name);
		this.catCount.text(cat.clickcount);
		this.catImg.attr('src', cat.src);
	},
};

octopus.init();
