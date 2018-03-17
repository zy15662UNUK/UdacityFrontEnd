// 这是我们的玩家要躲避的敌人
var stoneWidth = 101;
var stoneHeight = 83;
var defaultX = 202;
var defaultY = 3.5*83;
var Enemy = function(x,y,v) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多

    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.v = v;
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的s
    if (this.x < 505){
      this.x += this.v * dt;
    }
    // 当bug位置在画布内,则继续移动，否则重置到画布最左侧
    else {
      this.x = 0;
    }
    // 与bug碰撞后回到原点
    if (Math.abs(this.x - player.x) < 50 && Math.abs(this.y - player.y) < 40) {
      player.reset(defaultX, defaultY);
      alert('Game over');
    }
};
// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function(x,y) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
  };

Player.prototype.reset = function(x,y) {
  this.x = x;
  this.y = y;
};

Player.prototype.update = function(dt) {
  if (this.y < 0) {
    alert("You made it!");
    this.reset(defaultX, defaultY);
  }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// 设定单次移动间距和移动范围
Player.prototype.handleInput = function(key) {
  if (key === "left" && this.x > 0) {
    this.x -= 101;
  }
  else if (key === "right" && this.x < 400) {
    this.x += 101;
  }
  else if (key === "up" && this.y > 0) {
    this.y -= 83;
  }
  else if (key === "down" && this.y <350) {
    this.y += 83;
  }
};
// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [];
var player = new Player(defaultX, defaultY);
for (var i = 0; i < Math.random()*5+1; i++) {
    var x = 500*Math.random();
    // 随机从1，2，3中选出一个数，目的是让bug均匀分在三条道上
    var Arr = [1,2,3];
    var n = Math.floor(Math.random() * Arr.length + 1)-1;
    var y = Arr[n]*83-20;
    var v = 500*Math.random()+10;
    allEnemies.push( new Enemy(x, y, v));
}
// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
