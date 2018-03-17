$(function(){
  var eventhandle = function (place) {
    $(place).text('Number of click = '+ catclick);
  };
  var catclick = 0;
  var addCat = function (name, img) {
    $('body').append('<div class="'+name+'"</div>');
    $('.'+name).append('<img src="'+img+'" class="'+name+'">');
    $('.'+name).append('<p class="'+name+'_click">Number of click = 0</p>');
  };
  addCat('cat_1', 'img\\cat_1.jpg');
  addCat('cat_2', 'img\\cat_2.jpg');
  $('.cat_1_img').click(function(e) {
    catclick += 1;
    // .click( handler ). handler Type: Function( Event eventObject ) A function to execute each time the event is triggered.
    eventhandle('.cat_1_click');
  });
  $('.cat_2_img').click(function(e) {
    catclick += 1;
    // .click( handler ). handler Type: Function( Event eventObject ) A function to execute each time the event is triggered.
    eventhandle('.cat_2_click');
  });
});
