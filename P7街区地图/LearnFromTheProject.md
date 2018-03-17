###### Project review



##### Array.prototype.filter()
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
##### String.indexOf()
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
##### Array.indexOf()
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
##### Dynamic searching listing
- The "textInput" binding: http://knockoutjs.com/documentation/textinput-binding.html
- Example: https://jsfiddle.net/b4xhko31/

##### All functions should be put into the initMap() function, including ```ko.applyBindings(new searchResultsViewModel());```
##### 这样在输入框没有任何值时就会显示所有数据，大于0时也会对应去匹配筛选的值。其他所有情况视为错误，清空数组~这里运用到了上面所有技巧
```
if (self.query().length >= 0) {
  return locations.filter(function(location) {
    return location.title.toLowerCase().indexOf(self.query().toLowerCase()) != -1;
  })
} else {
  return []
}
```
<br>这里如果self.query()是空值（“”）则不会筛去任何的title，因为空值会使indexof返回0 ！-1 为true。如果是一个空格也是这个效果，因为每个地点中中间都包含一个空格。<br>
##### Deal with request failure:
```
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

```
##### 还有一个简单粗暴的计算加载时间来报错的方法
```
var googleRequestTimeout = setTimeout(function(){
  console.log('e');
  alert('Fail to get google resources!!');
}, 5000);
```
在api请求发送前启动开始计时，方程中是请求超时的处理办法
在api请求的最后加上
```
clearTimeout(googleRequestTimeout);
```
当请求成功（请求程序完成）清空即使
##### 纯css实现加载动画：
- http://www.hangge.com/blog/cache/detail_1755.html
- https://github.com/tobiasahlin/SpinKit/blob/master/css/spinkit.css
##### 数据储存
- 把不会改变的数据放在一个单独的js文件里，先于app加载即可。里面的变量可以直接在app中调用
- 这些不会变的变量用```const variableName```而不是```var variableName```
##### 所有的操作（info window，knockout etc）都要放在initMap这个function中。这个function会在页面加载时被调用，放在一起确保首次设置成功（因为google地图的请求只有在initMap中才会去请求，如果在initMap外面调用和googlemap相关的function或者method，console会报出没有相应方法的错误），且变量都在同一个scope
##### humbuger icon
```
<a href="#menu">
  <span id="hum">&#9776;</span>
</a>
```
