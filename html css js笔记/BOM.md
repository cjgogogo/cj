# BOM

## 什么是BOM

BOM（Browser Object Model) 即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是w'i'd

BOM由一系列相关的对象构成，并且每个对象都提供了很多方法和属性

BOM 缺乏标准，JavaScript 语法的标准化组织是ECMA，DOM的是W3  C-

# window 对象的常见事件

## 窗口加载事件

```html
window.onload = function() {
}只能写次注册事件 
或者
window.addEventListener("load",function(){});可以写多个
```

2.

```html
document.addEventListener('DOMContentLoaded',function() {})
```

DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等

ie9以上才支持

如果页面的图片很多的话，从用户访问到onload触发可能需要较长的时间，交互效果就不能实现，影响用户体验，此时用DOMContentLoaded事件比较合适。

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<script>
  window.addEventListener('load',function() {
    alert(22);
  })
  window.addEventListener('DOMContentLoaded',function () {
    alert(33);
  })
</script>
<body>

</body>
```

load 等页面内容全部加载完毕 ，包含页面元素dom 图片flash css等

DOMContentLoaded 是DOM 加载完毕，不包含图片 flash css等就可以执行

## 调整窗口大小事件

```
window.onresize = function() {}
window.addEventListener("resize",function(){});
```

window.onresize 是调整窗口大小加载事件，当触发时就调用的处理函数。

注意：

1.只要窗口大小发送像素变化，就会相应这个事件。

2.我们经常利用这个事件完成响应式布局，window.innerWidth 当前的屏幕宽度。

## 3.2 setTimeout() 定时器

```
window.setTimeout(调用函数，[延迟的毫秒数])；
```



```html
<script>
  //settimeout
  //语法规范： window.settimeout(调用函数，延迟时间)
  // 1.这个window在调用的时候可以省略
  // 2.延迟时间的单位是毫秒，如果省略默认是0
  // 3.页面中可能有多个定时器，所以给每个定时器加标识符
  function callback() {
    console.log('爆炸了');
  }
  var time1 = setTimeout(callback, 3000);
  var time2 = setTimeout(callback,5000);
</script>
```

## 清除定时器

```
window.clearTimeout(timeoutID)
```

clearTimeout()方法取消了当前通过setTimeout（）建立的定时器

注意：

window可以省略

## setInterval()定时器

```
setInterval(function() {
          console.log('继续输出');
        },1000);
        // 1. setTimeout 延迟时间到了，就去调用这个回调函数，只调用一次 就结束了这个定时器
        // 2.setInterval 每隔这个延迟时间，就去调用函数，会调用很多次，重复调用这个函数
```





## 倒计时效果

```html
<style>
  div {
    margin: 200px;
  }

  span {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #333;
    font-size:20px;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
</style>
<body>
        <span class="hour">1</span>
        <span class="minute">2</span>
        <span class="second">3</span>
 <script>
   var hour = document.querySelector('.hour');
   var minute = document.querySelector('.minute');
   var second = document.querySelector('.second');
   var inputTime = +new Date('2021-9-23 22:00:00');
   countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白 
  //2.开启定时器
    setInterval (countDown, 1000);
   function countDown() {
            var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
            var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
            var h = parseInt(times / 60 / 60 % 24); //时
            h = h < 10 ? '0' + h : h;
            hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
            var m = parseInt(times / 60 % 60); // 分
            m = m < 10 ? '0' + m : m;
            minute.innerHTML = m;
            var s = parseInt(times % 60); // 当前的秒
            s = s < 10 ? '0' + s : s;
            second.innerHTML = s;
        }

 </script>
</body>
```



## 清除定时器

```
clearInterval(intervalID);
   //clearInterval()方法取消了之前通过setInterval建立的定时器
```

```html
<body>
    <button class="begin">开启定时器</button>
    <button class="stop">停止定时器</button>
    <script>
        var begin = document.querySelector('.begin');
        var stop = document.querySelector('.stop');
        var timer = null; // 全局变量  null是一个空对象
        begin.addEventListener('click', function() {
            timer = setInterval(function() {
                console.log('ni hao ma');

            }, 1000);
        })
        stop.addEventListener('click', function() {
            clearInterval(timer);
        })
    </script>
</body>
```



##   发送短信倒计时案例

```html
<body>
  <input type="text"><button>发送</button>
    
 <script>
   var btn = document.querySelector('button');
   var time = 3;
   btn.addEventListener('click',function() {
     btn.disabled = true;
     var timer = setInterval(function() {
                if (time == 0) {
                    // 清除定时器和复原按钮
                    clearInterval(timer);
                    btn.disabled = false;
                    btn.innerHTML = '发送';
                } else {
                    btn.innerHTML = '还剩下' + time + '秒';
                    time--;
                }
            }, 1000);
     
   })
    
 </script>
</body>
```

## this 指向问题

```html
 <script>
        // this 指向问题 一般情况下this的最终指向的是那个调用它的对象

        // 1. 全局作用域或者普通函数中this指向全局对象window（ 注意定时器里面的this指向window）
        console.log(this);

        function fn() {
            console.log(this);

        }
        window.fn();
        window.setTimeout(function() {
            console.log(this);

        }, 1000);
        // 2. 方法调用中谁调用this指向谁
        var o = {
            sayHi: function() {
                console.log(this); // this指向的是 o 这个对象

            }
        }
        o.sayHi();
        var btn = document.querySelector('button');
        // btn.onclick = function() {
        //     console.log(this); // this指向的是btn这个按钮对象

        // }
        btn.addEventListener('click', function() {
                console.log(this); // this指向的是btn这个按钮对象

            })
            // 3. 构造函数中this指向构造函数的实例
        function Fun() {
            console.log(this); // this 指向的是fun 实例对象

        }
```

# js执行机制

## 同步和异步

同步任务都在主线程上执行，形成一个执行栈

## 异步任务

js的异步是通过回调函数实现的。

一般而言，异步任务有以下三种类型

1.普通事件，如click ，resize等

2. 资源加载 ；如 load ，error等

3. 定时器，包括setlnterval ，setTimeout等

   

# location 对象

## URL

统一资源定位符（Uniform Resourse Locator，URL）是互联网上标准资源的地址。互联网上的每一个文件都有一个唯一的URL，他包含的信息指出文件的位置以及浏览器该怎么处理他。

URL的一般语法格式为：

```
protocol://host[:port]/path/[?query]#fragment
http://www.itcast.cn/index.html?name=andy&age=18#link
```

| 组成     |                                                              |
| -------- | ------------------------------------------------------------ |
| protocol | 通信协议 常用的http，ftp，maito等等4                         |
| host     | 主机（域名） www.itheima.com                                 |
| port     | 端口号 可选 省略时使用方案的默认端口 如 http的默认端口为80   |
| path     | 路径 由0或者多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或文件地址 |
| query    | 参数 以键值对的形式，通过&符号分隔开来、                     |
| fragment | 片段 #还没内容 常见于链接 锚点                               |

## location对象的属性

| location 对象属性 | 返回值                             |
| ----------------- | ---------------------------------- |
| location.href     | 获取或者设置 整个URL               |
| location.host     | 返回主机域名 www.itheima.com       |
| location.port     | 返回端口号 如果没有则返回空字符串  |
| location.pathname | 返回路径                           |
| location.search   | 返回参数                           |
| location.hash     | 返回判断 #后面内容 常见于链接 锚点 |

## 5秒种后跳转页面

```html
<body>
<button>点击</button>
<div></div>
  
 <script>
 var btn = document.querySelector('button');
 btn.addEventListener('click',function() {
   location.href = 'http://www.itcast.cn';
 })
 var div = document.querySelector('div');
 var timer = 5;
 setInterval(function() {
   if(timer == 0) {
    location.href = 'http://www.itcast.cn';
   } else {
     div.innerHTML = '还剩下'+timer+'跳转页面';
     timer--;
   }
 },1000)
    
    
 </script>
</body>
```

## 获取URL参数

```html
<body>
<div>
  <form action="index.html">
    用户名：  <input type="text" name="unname">
    <input type="submit" value="登录">
  </form>
</div>
  
 <script>
   console.log(location.search); //?uname=andy
   // 1.先去掉？ substr('起始的位置'，截取几个字符)；
   var params = location.search.substr(1); //uname = andy
   console.log(params); 
   // 2.利用=字符串分割为数组 split('=');
   var arr = params.split('=');
   console.log(arr);// ['uname','andy']
    
 </script>
</body>
```

## location常见的方法

| location对象方法() | 返回值                                                       |
| ------------------ | ------------------------------------------------------------ |
| location.assign()  | 跟href一样，可以跳转页面，会记录历史，所以可以后退           |
| location.assign()  | 替换当前页面，因为不记录历史，所以不能后退页面               |
| location.reload()  | 重新加载页面，相当于刷新按钮或者f5，如果参数为true  强制刷新ctrl+f5 |

## history对象

window对象给我们提供了一个history对象，与浏览器历史记录进行交互，该对象包含用户（在浏览器窗口中）访问过的url。

| history对象 | 作用                                      |
| ----------- | ----------------------------------------- |
| back()      | 可以后退功能                              |
| forword()   | 前进功能                                  |
| go(参数)    | 前进后退功能 参数如果是1前进 如果是-1后退 |

