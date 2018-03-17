## 网站性能优化项目

你要做的是尽可能优化这个在线项目的速度。注意，请应用你之前在[网站性能优化课程](https://cn.udacity.com/course/website-performance-optimization--ud884/)中学习的技术来优化关键渲染路径并使这个页面尽可能快的渲染。

开始前，请导出这个代码库并检查代码。

### 指南

####Part 1: 优化 index.html 的 PageSpeed Insights 得分

## 运行

1. 将这个代码库导出
2. 以下是如何运行本地服务器的步骤
（首先需要下载python3 和 ngrok，并将ngrok放在网页根目录中）

```bash
  $> cd /你的工程目录
  $> python -m http.server 8080
```

1. 打开浏览器，访问 localhost:8080
2. 下载 [ngrok](https://ngrok.com/) 并将其安装在你的工程根目录下，让你的本地服务器能够被远程访问。

``` bash
  $> cd /你的工程目录
  $> ./ngrok http 8080
```

####### 复制ngrok提供给你的公共URL，然后访问它吧！

## 修改方案：
- 删除网络字体
- 对异步的script使用async
- 对print.css加上media = "print"属性
- 将style.css变成inline css
- 以上的对得分帮助十分有限（从最初27分到30分），最重要的是将名称中带有pizza的几幅图片（分散在views和img两个文件夹中）进行压缩。
----

####Part 2: 优化 pizza.html 的 FPS（每秒帧数）

## 运行
1. 将代码库导出
2. 打开pizza.html.

## 修改方案
- CSS的.mover加上will-change：transform；属性
- 修改main.js中changeSliderLabel function来消除FSL
- 修改updatePositions()和末尾当页面加载时生成披萨滑窗的eventlistener中的循环，消除重复计算
- 将所有的querySelectorAll换成getElementsByClassName
- 减少了背景中pizza的个数（200到28）
