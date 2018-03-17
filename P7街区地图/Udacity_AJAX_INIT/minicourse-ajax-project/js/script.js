
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    // google map API
    // Get the input street and city name
    var street = $("#street").val();
    var city = $("#city").val();
    var address = street + ", " + city;
    // Request img from google map
    var imgSrc = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address;
    $greeting.text('So, you want to live at '+ street + ", " + city + '?');
    // Append <img>to the body
    $body.append('<img class="bgimg" src="'  + imgSrc + ' ' + '">');

    // NYT API
    // Read from nyt API url structure
    var nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ city + '?sort=newest&api-key=3baeebc06d0f4de7ad72e2926bfcfd5b';
    $.getJSON(nytUrl,function(data) {
        // log data on the console, which is a jason
        console.log(data);
        $nytHeaderElem.text('New York Times Articles About' + city);
        // the object names of data can be read from the console
        var articles = data.response.docs;
        for (var i = 0; i < articles.length; i++){
          var article = articles[i];
          // append articles to the nyt news list
          $nytElem.append('<li class = "article">'+ '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>'+article.snippet+'</p>'+'</li>');
        }
    }).error(function(e){
      $nytHeaderElem.text("Sorry, there is an error");
    });
    // Above is to handle the error from the request


    // wikipedia api
    // "format = json" for the cross site request
    var wikiUrl = 'http://en.wikipedia22.org/w/api.php?action=query&format=json&callback=wikiCallback&list=search&srsearch=' + city;
    $.ajax({
      url: wikiUrl,
      // for the cross site request
      dataType: 'jsonp',
      // success: function(response) {}. same as .done()
      // error: function() {
      //   console.log("error");
      //   $wikiElem.text('Wiki fucked up');
      // }
    })
    .done(function(data) {
      console.log(data);
      var title, url;
      for (var i = 0; i < data.query.search.length;i++){
        title = data.query.search[i].title;
        url = 'http://en.wikipedia.org/wiki/'+title;
        $wikiElem.append('<li class = "wiki-article">'+ '<a href="'+ url + '">'+title+'</a>'+'<p>'+data.query.search[i].snippet+'</p>'+'</li>');
      }

    });

    return false;
}

$('#form-container').submit(loadData);
