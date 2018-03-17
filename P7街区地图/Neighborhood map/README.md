#### 运行：
- 下载Neighborhood文件夹
- 点击index.html即可运行

#### 加载错误：
- Google API： 如果无法打开网页会弹出相应警示框
- Wikipedia API： 如果无法打开网页会弹出相应警示框

#### 搜索
- 在输入框中输入地点即可，可供搜索的点共有如下几个：
{title: 'Rutland hall', location: {lat: 52.9401096, lng: -1.2034978}},
{title: 'George Green library', location: {lat: 52.9409985, lng: -1.1909528}},
{title: 'hallward library', location: {lat: 52.9389143, lng: -1.1972201}},
{title: 'Coates Building', location: {lat: 52.9409645, lng: -1.1893462}},
{title: 'David Ross Sports Village', location: {lat: 52.9390171, lng: -1.207507}},
{title: 'Trent Building', location: {lat: 52.93675649999999, lng: -1.1959181}},
{title: 'Portland Building', location: {lat: 52.9380647, lng: -1.1943185}},
{title: 'Lakeside Art', location: {lat: 52.938606, lng: -1.189859}}
- 搜索时输入地名中任意单词的部分即可，不分大小写。点击搜索结果中的地名（例如Coates Building），会弹出infowindow和wiki信息。

#### 清空输入框和地图：
- 删除输入框即可
- 如果未输入任何东西而点击搜索，或者搜索了上述地点标记以外的地点，地图上面的图标会被全部清空。此时点击reset后即可重新搜索

#### 响应性
- 当屏幕宽度小于800px时，搜索栏自动隐藏。点击汉堡图标即可显示。
