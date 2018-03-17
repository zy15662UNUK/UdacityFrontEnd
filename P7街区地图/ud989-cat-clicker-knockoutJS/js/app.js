// data for the cats
var catData = [
  {
    clickCount:0,
    name: "Terry",
    imgSrc: "img\\434164568_fea0ad4013_z.jpg",
    Nicknames: [{name:'Tabtab'},{name:'T-Bone'},{name:'Mr.T'},{name:'Tabitha Tab Calty Cat'}]
  },
  {
    clickCount:0,
    name: "Tiger",
    imgSrc: "img\\22252709_010df3379e_z.jpg",
    Nicknames: [{name:'Tabtab'},{name:'T-Bone'},{name:'Mr.T'},{name:'Tabitha Tab Calty Cat'}]
  },
  {
    clickCount:0,
    name: "snake",
    imgSrc: "img\\1413379559_412a540d29_z.jpg",
    Nicknames: [{name:'Tabtab'},{name:'T-Bone'},{name:'Mr.T'},{name:'Tabitha Tab Calty Cat'}]
  },
  {
    clickCount:0,
    name: "Dick",
    imgSrc: "img\\4154543904_6e2428c421_z.jpg",
    Nicknames: [{name:'Tabtab'},{name:'T-Bone'},{name:'Mr.T'},{name:'Tabitha Tab Calty Cat'}]
  },

];

var ViewModel = function() {
  // This is to help us pass the this(ViewModel)into the method function
  var self = this;
  this.catList = ko.observableArray([]);
  catData.forEach(function(item){
    self.catList.push(new cats(item));
  });
  // set our default cat
  this.currentCat = ko.observable(this.catList()[0]);
  // when you click on something, it runs a function,
  // it passes in the object you click on
  this.setCat = function(clickedCat) {
    // here is equal to this(ViewModel).currentCat
    // Attention!!! Here we can not use ViewModel().currentCat(clickedCat)
    self.currentCat(clickedCat);
  };
  this.incrementCounter = function() {
    // equivalent to count++
    // no longer need currentCat().as we have already in the currentCat context
    // because of the <div id="cat" data-bind="with: currentCat">
    this.clickCount(this.clickCount()+1);
    if (this.clickCount()<5){
      this.level("child");
    }else if(this.clickCount()<10){
      this.level("motherfucker");
    }else if(this.clickCount()<15){
      this.level("bitch");
    }
  };
};
// Once the model gets complicated, we have to move it out of the ViewModel
// create a cat based on the cat data passed in
var cats = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.Nicknames = ko.observableArray(data.Nicknames);
  this.level = ko.observable("infant");
};

ko.applyBindings(new ViewModel());
