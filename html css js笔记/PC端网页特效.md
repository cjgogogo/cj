# 元素偏移量 offset系列

## offset概述

offset翻译过来就是偏移量，我们使用offset系列相关属性可以动态得到该元素（偏移），大小等。

1.获得元素距离 带有定位父元素 的位置

2.获得元素自身的大小（宽度 高度）

3.注意：返回的数值都不带单位

 offsest系列常用属性：

| offsest系列常用属性  | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.offsetParent | 返回作为该元素带有定位的父级元素 如果父级都没有定位则返回距波蒂亚的距离 |
| element.offsetTop    | 返回元素相对带有定位元素上方的偏移                           |
| element.offsetLeft   | 返回元素相对带有定位元素左边框的偏移                         |
| element.offsetWidth  | 返回自身包括padding ，边框，内容区的宽度，返回的数值不带单位 |
| element.offsetHeight | 返回自身包括padding ，边框，内容区的高度，返回的数值不带单位 |

## 获取鼠标在盒子内 的坐标

```html
<style>
 .box {
   background-color: pink;
   width: 200px;
   height: 200px;
 }
</style>
<body>
<div class="box"></div>
  
 <script>
 var box = document.querySelector('.box');
 box.addEventListener('mousemove',function(e) {
   var x = e.pageX- this.offsetLeft;
   var y = e.pageY - this.offsetTop;
   this.innerHTML = 'x坐标是' + x + 'y坐标是'+ y;
 })
    
 </script>
```



## 拖动模态框

```html
<style>
   .login-header {
            width: 100%;
            text-align: center;
            height: 30px;
            font-size: 24px;
            line-height: 30px;
        }
        
        ul,
        li,
        ol,
        dl,
        dt,
        dd,
        div,
        p,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        a {
            padding: 0px;
            margin: 0px;
        }
        
        .login {
            display: none;
            width: 512px;
            height: 280px;
            position: fixed;
            border: #ebebeb solid 1px;
            left: 50%;
            top: 50%;
            background: #ffffff;
            box-shadow: 0px 0px 20px #ddd;
            z-index: 9999;
            transform: translate(-50%, -50%);
        }
        
        .login-title {
            width: 100%;
            margin: 10px 0px 0px 0px;
            text-align: center;
            line-height: 40px;
            height: 40px;
            font-size: 18px;
            position: relative;
            cursor: move;
        }
        
        .login-input-content {
            margin-top: 20px;
        }
        
        .login-button {
            width: 50%;
            margin: 30px auto 0px auto;
            line-height: 40px;
            font-size: 14px;
            border: #ebebeb 1px solid;
            text-align: center;
        }
        
        .login-bg {
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0px;
            left: 0px;
            background: rgba(0, 0, 0, .3);
        }
        
        a {
            text-decoration: none;
            color: #000000;
        }
        
        .login-button a {
            display: block;
        }
        
        .login-input input.list-input {
            float: left;
            line-height: 35px;
            height: 35px;
            width: 350px;
            border: #ebebeb 1px solid;
            text-indent: 5px;
        }
        
        .login-input {
            overflow: hidden;
            margin: 0px 0px 20px 0px;
        }
        
        .login-input label {
            float: left;
            width: 90px;
            padding-right: 10px;
            text-align: right;
            line-height: 35px;
            height: 35px;
            font-size: 14px;
        }
        
        .login-title span {
            position: absolute;
            font-size: 12px;
            right: -20px;
            top: -30px;
            background: #ffffff;
            border: #ebebeb solid 1px;
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
</style>
<body>
  <div class="login-header"><a id="link" href="javascript:;">点击，弹出登录框</a></div>
  <div id="login" class="login">
      <div id="title" class="login-title">登录会员
          <span><a id="closeBtn" href="javascript:void(0);" class="close-login">关闭</a></span>
      </div>
      <div class="login-input-content">
          <div class="login-input">
              <label>用户名：</label>
              <input type="text" placeholder="请输入用户名" name="info[username]" id="username" class="list-input">
          </div>
          <div class="login-input">
              <label>登录密码：</label>
              <input type="password" placeholder="请输入登录密码" name="info[password]" id="password" class="list-input">
          </div>
      </div>
      <div id="loginBtn" class="login-button"><a href="javascript:void(0);" id="login-button-submit">登录会员</a></div>
  </div>
  <!-- 遮盖层 -->
  <div id="bg" class="login-bg"></div>
 <script>
   // 1. 获取元素
        var login = document.querySelector('.login');
        var mask = document.querySelector('.login-bg');
        var link = document.querySelector('#link');
        var closeBtn = document.querySelector('#closeBtn');
        var title = document.querySelector('#title');
        // 2. 点击弹出层这个链接 link  让mask 和login 显示出来
        link.addEventListener('click', function() {
                mask.style.display = 'block';
                login.style.display = 'block';
            })
       // 3. 点击 closeBtn 就隐藏 mask 和 login 
       closeBtn.addEventListener('click', function() {
                mask.style.display = 'none';
                login.style.display = 'none';
            })
            // 4. 开始拖拽
            // (1) 当我们鼠标按下， 就获得鼠标在盒子内的坐标
        title.addEventListener('mousedown', function(e) {
            var x = e.pageX - login.offsetLeft;
            var y = e.pageY - login.offsetTop;
            // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
            document.addEventListener('mousemove', move)

            function move(e) {
                login.style.left = e.pageX - x + 'px';
                login.style.top = e.pageY - y + 'px';
            }
            // (3) 鼠标弹起，就让鼠标移动事件移除
            document.addEventListener('mouseup', function() {
                document.removeEventListener('mousemove', move);
            })
        })        
  </script>
</body>
```



# 元素滚动 scroll系列

## 元素scroll系列属性

scroll翻译过来就是滚动，我们使用scroll系列的相关属性可以动态的得到该元素的大小，滚动距离等。

| scroll系列属性       | 作用                                                       |
| -------------------- | ---------------------------------------------------------- |
| element.scrollTop    | 返回被卷去的上侧距离，返回值不带单位                       |
| element.scrollLeft   | 返回被卷去的左侧距离，返回值不带单位                       |
| element.scrollWidth  | 返回自身实际的宽度，包括内边距，不含边框，返回值不带单位   |
| element.scrollHeigth | 返回自身实际的高度，包括内边距，，不含边框，返回值不带单位 |

## 仿淘宝固定侧边栏

### 案例分析

1.需要用到页面滚动事件 scroll因为是页面滚动 ，所以事件源是 document

2.滚动到某个位置，就是判断页面被卷上去的上部值。

3.页面被卷去头部： 可以通过window.pageYOffset 获得  

如果是被卷去的左侧 window.pageXOffset

4.注意 元素被卷去的头部是element.scrollTop, 如果是页面被卷去的头部则是 window.pageYOffset

### 源代码

```html
<style>
    .slider-bar {
        position: absolute;
        left: 50%;
        top: 300px;
        margin-left: 600px;
        width: 45px;
        height: 130px;
        background-color: pink;
    }
    
    .w {
        width: 1200px;
        margin: 10px auto;
    }
    
    .header {
        height: 150px;
        background-color: purple;
    }
    
    .banner {
        height: 250px;
        background-color: skyblue;
    }
    
    .main {
        height: 1000px;
        background-color: yellowgreen;
    }
    
    span {
        display: none;
        position: absolute;
        bottom: 0;
    }
</style>
</head>

<body>
<div class="slider-bar">
    <span class="goBack">返回顶部</span>
</div>
<div class="header w">头部区域</div>
<div class="banner w">banner区域</div>
<div class="main w">主体部分</div>
<script>
    //1. 获取元素
    var sliderbar = document.querySelector('.slider-bar');
    var banner = document.querySelector('.banner');
    // banner.offestTop 就是被卷去头部的大小 一定要写到滚动的外面
    var bannerTop = banner.offsetTop
        // 当我们侧边栏固定定位之后应该变化的数值
    var sliderbarTop = sliderbar.offsetTop - bannerTop;
    // 获取main 主体元素
    var main = document.querySelector('.main');
    var goBack = document.querySelector('.goBack');
    var mainTop = main.offsetTop;
    // 2. 页面滚动事件 scroll
    document.addEventListener('scroll', function() {
            // console.log(11);
            // window.pageYOffset 页面被卷去的头部
            // console.log(window.pageYOffset);
            // 3 .当我们页面被卷去的头部大于等于了 172 此时 侧边栏就要改为固定定位
            if (window.pageYOffset >= bannerTop) {
                sliderbar.style.position = 'fixed';
                sliderbar.style.top = sliderbarTop + 'px';
            } else {
                sliderbar.style.position = 'absolute';
                sliderbar.style.top = '300px';
            }
            // 4. 当我们页面滚动到main盒子，就显示 goback模块
            if (window.pageYOffset >= mainTop) {
                goBack.style.display = 'block';
            } else {
                goBack.style.display = 'none';
            }

        })
        // 3. 当我们点击了返回顶部模块，就让窗口滚动的页面的最上方
    goBack.addEventListener('click', function() {
        // 里面的x和y 不跟单位的 直接写数字即可
        // window.scroll(0, 0);
        // 因为是窗口滚动 所以对象是window
        animate(window, 0);
    });
        // 动画函数
        function animate(obj, target, callback) {
            // console.log(callback);  callback = function() {}  调用的时候 callback()

            // 先清除以前的定时器，只保留当前的一个定时器执行
            clearInterval(obj.timer);
            obj.timer = setInterval(function() {
                // 步长值写到定时器的里面
                // 把我们步长值改为整数 不要出现小数的问题
                // var step = Math.ceil((target - obj.offsetLeft) / 10);
                var step = (target - window.pageYOffset) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (window.pageYOffset == target) {
                    // 停止动画 本质是停止定时器
                    clearInterval(obj.timer);
                    // 回调函数写到定时器结束里面
                    // if (callback) {
                    //     // 调用函数
                    //     callback();
                    // }
                    callback && callback();
                }
                // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
                // obj.style.left = window.pageYOffset + step + 'px';
                window.scroll(0, window.pageYOffset + step);
            }, 15);
        }
  </script>
```



# mouseenter 和 mouseover的区别

1.当鼠标移动到元素上时就会触发mouseenter 事件

2.类似于mouseover，他们两者之间的差别：

mouseover鼠标经过自身盒子会触发，经过子盒子还会触发。mouseenter只会经过自身盒子触发

即mouseenter不会冒泡

# 动画原理

//动画原理

1.获得盒子当前位置

2.让盒子在当前位置加一个移动距离

3.利用定时器不断重复这个操作

4.加一个结束定时器的条件

5.注意此元素需要添加定位，才能使用element.style.left

```html
<style>
   div {
       position:absolute;
       width: 100px;
       height: 100px;
       background-color: pink;
   }
</style>
</head>
<body>
<div></div>
<script>
var div = document.querySelector('div');
var timer = setInterval(function() {
    if(div.offsetLeft >= 400) {
        //停止动画 本质是停止定时器
        clearInterval(timer);
    }
    div.style.left = div.offsetLeft + 1 + 'px';
}, 30);
  </script>
```



# 动画函数封装obj目标对象

```HTML
<script>
    //简单动画函数封装obj目标对象 target目标位置
    function animate(obj, target) {
        var timer = setInterval(function() {
    if(div.offsetLeft >= 400) {
        //停止动画 本质是停止定时器
        clearInterval(timer);
    }
    div.style.left = div.offsetLeft + 1 + 'px';
    }, 30);
    }
    var div = document.querySelector('div');
    animate(div,300);
  </script>
```



# 动画函数--给不同元素记录不同的定时器 



```html
<style>
   div {
    left: 0;
       position:absolute;
       width: 100px;
       height: 100px;
       background-color: pink;
   }
   span {
       position: absolute;
       left: 0;
       display: block;
       top: 200px;
       width: 200px;
       height: 200px;
       background-color: purple;
   }
</style>
</head>
<body>
    <button>点击臭宝</button>
    <div></div>
<span>杨海峰</span>
<script>
    //var obj = {};
    // obj.name = 'andy';
    //简单动画函数封装obj目标对象 target目标位置
    //给不同的元素指定了不同的定时器
    function animate(obj, target) {
        //当我们不断地点击按钮， 这个元素的速度会越来越快，因为开启了太多的定时器
        //解决方案就是 让我们只有一个定时器执行
        // 先清除以前的定时器， 只保留当前的一个定时器
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
    if(obj.offsetLeft >= target) {
        //停止动画 本质是停止定时器
        clearInterval(obj.timer);
    }
    obj.style.left = obj.offsetLeft + 1 + 'px';
    }, 30);
    }
    var div = document.querySelector('div');
    var span = document.querySelector('span');
    var btn = document.querySelector('button');
    animate(div,300);
    btn.addEventListener('click',function() {
        animate(span,300);
    })
  </script>
</body>
```



## 动画函数封装

## 缓动效果原理

缓动动画就是让元素运动速度有所变化，最常见的是让速度，，停下来

思路:

1.让盒子每次移动的距离慢慢变小，速度就会慢慢落下来

2.核心算法：（目标值 - 现在的位置）/ 10   作为每次移动的距离步长

3.停止的条件是：让盒子位置等于目标位置就停止定时器

```html
<style>
   div {
    left: 0;
       position:absolute;
       width: 100px;
       height: 100px;
       background-color: pink;
   }
   span {
       position: absolute;
       left: 0;
       display: block;
       top: 200px;
       width: 200px;
       height: 200px;
       background-color: purple;
   }
</style>
</head>
<body>
    <button class='btn1'>点击臭宝1</button>
    <button class='btn2'>点击臭宝2</button>
    <div></div>
<span>杨海峰</span>
<script>
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 把步长写到定时器里面
            // 让我们把步长值改为整数 不要出现小数问题
            var step = (target - obj.offsetLeft) / 10;
            //考虑后退及前进的情况
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
          if(obj.offsetLeft == target) {
            //停止动画 本质是停止定时器
            clearInterval(obj.timer);
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式：(目标值 - 现在的位置) / 10
    obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
    }
    var div = document.querySelector('div');
    var span = document.querySelector('span');
    var btn1 = document.querySelector('.btn1');
    var btn2 = document.querySelector('.btn2');
    animate(div,300);
    btn1.addEventListener('click',function() {
        animate(span,300);
    })
    btn2.addEventListener('click',function() {
        animate(span,800);
    })
  </script>
</body>
```

## 动画函数添加回调函数

原理：

函数作为一个参数，将这个函数作为参数传到另一个函数里面，当内个函数执行完后，再执行传进去的这个函数，这个过程叫做回调。

```
<style>
  
   span {
       position: absolute;
       left: 0;
       display: block;
       top: 200px;
       width: 200px;
       height: 200px;
       background-color: purple;
   }
</style>
</head>
<body>
    <button class='btn1'>点击臭宝1</button>
    <button class='btn2'>点击臭宝2</button>
    <span>杨海峰</span>
<script>
    function animate(obj, target,callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 把步长写到定时器里面
            // 让我们把步长值改为整数 不要出现小数问题
            var step = (target - obj.offsetLeft) / 10;
            //考虑后退及前进的情况
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
          if(obj.offsetLeft == target) {
            //停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里
            if (callback) {
                //调用函数
                callback();
                }
            }
           
            // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
    }
    var span = document.querySelector('span');
    var btn1 = document.querySelector('.btn1');
    var btn2 = document.querySelector('.btn2');
    btn2.addEventListener('click',function() {
       animate(span,800,function() {
        span.style.backgroundColor = 'red';
       })
    })
  </script>
</body>
```

## 动画函数

```html
function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}
```



## 节流阀

防止轮播图按钮连续点击造成播放过快

节流阀目的：当上一个函数动画执行完毕，再去执行下一个函数动画，让事件无法连续触发。

核心思想：

利用回调函数，添加一个变量来控制，锁住函数和解锁函数。

开始设置一个变量 var flag = true;

if(flag) { flag = flase; do something} 关闭

利用回调函数 动画执行完毕 flag = true 打开