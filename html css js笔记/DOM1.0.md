



# s 和JS基础关联性

## 1.API

API(（Application Programming Interface,应用程序编程接口)是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而也无需访问源码，或理解内部工作机制的细节。

简单理解：API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能。

## 2.web API

Web  API 是浏览器提供的一套操作浏览器功能和页面元素的API（BOM和DOM）。现阶段我们主要针对于浏览器讲解常用的API，主要针对浏览器做交互效果。

比如我们想要浏览器弹出一个警示框，直接使用alert（‘弹出’）

# DOM

## 1.1什么是DOM

文档对象模型（                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Object Model，简称DOM），是w3c组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口。

W3C已经定义了一系列的DOM接口，通过这些接口可以改变网页的内容，结构和样式。

## 1.2DOM树

1.文档：一个页面就是一个文档，DOM中使用document表示

2.元素：页面中的所有标签都是元素，DOM中使用element表示

3.节点：网页中的所有内容都是节点（标签，属性，文本，注释等），DOM中使用node表示。

常用节点分为四类：

1.文档节点：整个HTML文档

2.元素节点：HTML文档中的HTML标签

3.属性节点：元素的属性

4.文本节点：HTML标签中的文本内容。

DOM把以上内容都看作是对象

# 获取元素

## 常用DOM方法总结

常用DOM方法总结
                getElementById()    返回带有指定ID 的元素。
                getElementsByTagName()  返回包含带有指定标签名称的所有元素的节
                点列表(集合/节点数组)。
                getElementsByClassName()    返回包含带有指定类名的所有元素的节
                点列表。
                getElementsByName(.a) 通过name属性获取一组元素节点对象
                document.querySelector(#a) 通过CSS选择器来获取一个元素节点对象
                document.querySelectorAll(span) 通过CSS选择器来获取一组元素节点对象
                appendChild()   把新的子节点添加到指定节点。
                removeChild()   删除子节点。
                replaceChild()  替换子节点。
                insertBefore()  在指定的子节点前面插入新的子节点。
                createAttribute()   创建属性节点。

## 根据ID获取

使用getElementById('time');

```
<div id="time">2019-09-09</div>
    <script>
      var timer = document.getElementById('time');
      console.log(timer);
      console.log(typeof timer);//返回的是元素对象
      // console.dir 打印我们的返回元素对象 更好的查看里面的属性和方法
      console.dir(timer);
    </script>
```

## 根据标签名获取

使用getElementsByTagName()方法可以返回带有指定标签名的对象的集合

```
  <ul>
      <li>祝福祝福1</li>
      <li>祝福祝福2</li>
      <li>祝福祝福3</li>
      <li>祝福祝福4</li>
      <li>祝福祝福5</li>
    </ul>
    <script>
      //1.返回的是 获取过来的元素对象的集合 以伪数组的形式存储的
      var lis = document.getElementsByTagName('li');
      console.log(lis);
      console.log(lis[0]);
      // 2. 我们想要依次打印里面的元素对象我们可以采取遍历的方式
      for (var i = 0; i < lis.length; i++) {
          console.log(lis[i]);
      }
    </script>
```



注意：

1.因为得到的是一个对象的集合，所有我们想要操作里面的元素就需要遍历。

2.得到的对象是动态的。



2.还可以获取某个元素（父元素）内部所有指定标签名的子元素。



注意：父元素必须是单个对象（必须指明是哪一个元素对象），获取的时候不包括父元素自己。

## 根据HTML5新增标签



```
 //1. getElementsByClassName 根据类名获得某些元素集合
        var boxs = document.getElementsByClassName('box');
        console.log(boxs);
//2. querySelector 返回指定选择器的第一个元素对象 切记 里面的选择器需要加符号 类选择器加 . id选择器加#
        var firstBox = document.querySelector('.box');
        console.log(firstBox);
        var nav = document.querySelector('#nav');
        console.log(nav);
        var li = document.querySelector('li');
        console.log(li) 
  //3. querySelectorAll()返回指定选择器的所有元素对象集合
        var allBox = document.querySelectorAll('.box');
        console.log(allBox);
        var lis = document.querySelectorAll('li');
        console.log(lis);
```

## 获取特殊元素（body ，html）

获取body元素

```
1.document.body //返回body元素对象
eg
<script>
    var bodyEle = document.body;
    console.log(bodyEle);
    console.dir(bodyEle);
  </script>
```

获取html元素

```
1.document.documentElement //返回html元素对象
eg：
<script>
  // 获取html 元素
   var htmlEle = document.documentElement;
   console.log(htmlEle);
  </script>
```

# 事件基础

## 事件三要素

```
<body>
  <button id="btn">唐伯虎
  </button>
  <script>
  // 点击一个按钮， 弹出对话框
  // 1. 事件是有三部分组成 事件源 事件类型 事件处理程序 我们称为事件三要素
  // (1).事件源  事件被触发的对象 谁 按钮
   var btn = document.getElementById('btn');
   // (2) 事件类型 如何触发 什么事件 比如鼠标点击(onclick) 还是鼠标经过 或者键盘按下
   // (3) 事件处理程序 通过一个函数赋值的方式 完成
   btn.onclick = function() {
     alert('点秋香');
   }
  </script>
  </body>
```

## 执行事件是步骤

```
<body>
<div>123</div>
  <script>
  //   执行事件步骤
  //  点击div 控制台输出 我被选中了
  //  1. 获取事件源
   var div = document.querySelector('div');
  // 绑定事件 注册事件
  // div.onclick 
  //3.添加事件处理程序
  div .onclick =function(){
    console.log('我被选中了');
  }
  </script>
  </body>
```

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

# 操作元素

JavaScript的DOM操作可以改变网页内容，结构和样式，我们可以利用DOM操作元素来改变元素内容，属性等。注意以下都是属性

## 1.改变元素内容

```
element.innerText
```

从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉

```
  <style>
      div {
          width: 300px;
          height: 30px;
          line-height: 30px;
          color:#fff;
          background-color: pink;
        }
    </style>
</head>
<body>
  <button>显示当前系统时间</button>
<div>某个时间</div>
  <script>
      //当我们点击了按钮， div里面的文字会发生变化
      // 1. 获取元素
      var btn = document.querySelector('button');
      var div = document.querySelector('div');
      // 2. 注册事件
      btn.onclick = function() {
        // div.innerText = '2019-6-6';
        div.innerText = getDate();
      }
      function getDate() {
        var date = new Date();
        //我们写一个2019年5月1日 星期三
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var dates = date.getDate();
        var arr =['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
        var day =date.getDay();
        return '今天是：' + year + '年' + month + '月' + dates + '日' + arr[day];
      }
      
  </script>
  </body>
```

可以不加注册事件直接显示  加个p

```
   <style>
      div {
          width: 300px;
          height: 30px;
          line-height: 30px;
          color:#fff;
          background-color: pink;
        }
      p {
        display: block;
        width: 300px;
          height: 30px;
          line-height: 30px;
          color:#fff;
          background-color: pink;
      }
    </style>
</head>
<body>
  <button>显示当前系统时间</button>
<div>某个时间</div>
<p></p>
  <script>
      //当我们点击了按钮， div里面的文字会发生变化
      // 1. 获取元素
      var btn = document.querySelector('button');
      var div = document.querySelector('div');
      // 2. 注册事件
      btn.onclick = function() {
        // div.innerText = '2019-6-6';
        div.innerText = getDate();
      }
      function getDate() {
        var date = new Date();
        //我们写一个2019年5月1日 星期三
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var dates = date.getDate();
        var arr =['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
        var day =date.getDay();
        return '今天是：' + year + '年' + month + '月' + dates + '日' + arr[day];
      }
      //我们元素可以不用添加事件
      var p = document.querySelector('p');
      p.innerText = getDate();
  </script>
```



```
element.innerHTML
```

起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行

innerText 和 innerHTML的区别

1.innerText 不识别html标签 非标准 去除空格和换行

2.innerHTML识别html标签 w3c标准 保留空格和换行

```
div.innerHTML = <strong>今天是</strong> 2019；
// 这两个属性是可读写的 可以获取元素里面的内容
```

## 2.修改元素属性

<body>
 <button id="ldh">刘德华</button>
<button id="zxy">张学友</button></body> </br>
<img src="images/ldh.jpg" alt="" title="刘德华">

<script>
    //修改元素属性 src 
    // 1.获取元素
    var ldh = document.getElementById('ldh');
    var zxy = document.getElementById('zxy');
    var img = document.querySelector('img');
    //2.注册事件 处理程序
    zxy.onclick = function() {
        img.src = 'images/zxy.jpg';
        img.title = '张学友';
    }
    ldh.onclick = function() {
        img.src = 'images/ldh.jpg';
        img.title = '刘德华';
    }
</script>

## 分时问候并显示不同的图片

```html
<body>
 <img src="images/s.gif" alt="">
 <div>上午好</div>
<script>
// 根据系统不同时间来判断， 所以需要用到的日期内置对象
// 利用多分支语句来设置不同的的图片
// 需要一个图片，并且根据时间修改图片，就需要用到操作元素src素性
// 需要一个div元素，显示不同的问候语，修改元素即可
//1.获取元素
var img = document.querySelector('img');
var div = document.querySelector('div');
// 2.得到当前的小时数
var date = new Date();
var h = date.getHours();
// 3.判断小时数改变图片信息
if(h < 12) {
    img.src = 'images/s.gif';
    div.innerHTML = '亲，上午好，好好写代码'；
}
else if(h < 18) {
    img.src = 'images/x.gif';
    div.innerHTML = '亲，晚上好，好好写代码'
}
</script>
```

## 表单元素的属性操作

利用DOM可以操作如下表单元素的属性：

```
type, value ,checked, selected ,disabled
```

```
<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        //1.获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 注册事件，处理程序
        btn.onclick = function() {
            // 表单里面得到值，文字内容是通过value来修改的
            input.value = '被点击了';
            // 如果想要某个表单被禁用 不能再点击 disabled 我们想要这个按钮 button禁用
             button.disabled = true;
            // 或者：
            this.disabled = true;
        }
    </script>
</body>
```

## 仿京东显示隐藏密码

```html
<style>
        .box {
            position: relative;
            width: 400px;
            border-bottom: 1px solid #ccc;
            margin: 100px auto;
        }
        .box input {
            width: 370px;
            height: 30px;
            border: 0;
            outline:none;
        }
        img {
            position: absolute;
            top: 2px;
            right: 2px;
         width: 24px;
         height: 24px;
        }
    </style>
</head>
<body>
   <div class="box">
       <label for=""><img src="images/close.png" alt="" id="eye"></label>
       <input type="password" name="" id="pwd">
   </div>
    <script>
       // 获取元素
       var eye = document.getElementById('eye');
       var pwd = document.getElementById('pwd');
       var flag = 0;
       // 2.注册事件 处理程序
       eye.onclick = function() {
           if(flag==0)
         {
            pwd.type = 'text';
            eye.src = 'images/open.png';
            flag = 1;
         } else {
             pwd.type = 'password';
             eye.src = 'images/close.png';
             flag = 0;  
         }
       }
    </script>
</body>
```

## 样式属性操作

```
1.element.style 行内样式操作
2.element.className 类名样式操作
```

注意：

1.js里面的样式采用驼峰命名法 比如fontSize，backgroundColor

2.js修改样式操作产生的是行内样式，css权重比较高

## 关闭淘宝二维码案例

```html
 <style>
      .box {
          position: relative;
          width: 74px;
          height: 88px;
          margin: 100px auto;
          font-size: 12px;
          text-align: center;
          color:#f40;
          display:block;
      }
      .box img {
          width: 60px;
          margin-top: block;
      }
      .close-btn {
          position: absolute;
          top: -1px;
          left: -16px;
          width: 14px;
          height: 14px;
          border: 1px solid #ccc;
          line-height: 14px;
          font-family: Arial, Helvetica, sans-serif;
          cursor: pointer;
      }
    </style>
</head>
<body>
  <div class="box">
      淘宝二维码
      <img src="images/tao.png" alt="">
      <i class="close-btn">x</i>
  </div>
  <script>
    var btn = document.querySelector('.close-btn');
    var box = document.querySelector('.box');
    btn.onclick = function() {
        box.style.display = 'none';
    }

  </script>
```

## 循环精灵图

```html
<style>
    li {
    list-style: none
     }
     .box {
         width: 250px;
         margin:100px auto;
     }
     .box li {
         float: left;
         width: 24px;
         height: 24px;
         background-color: pink;
         margin: 15px;
         background:url(images/sprite.png) no-repeat;
     }
    </style>
</head>
<body>
  <div class="box">
      <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
  </div>
  <script>
   var lis = document.querySelectorAll('li');
   for(var i = 0; i <lis.length; i++)
   {
       var index = i * 44;
       lis[i].style.backgroundPosition = '0 -' + index + 'px';
   }
  </script>
```

## 隐藏文本框内容

```
<input type="text" value="手机">
  <script>
      var text = document.querySelector('input');
      //得到了焦点 onfocus
      text.onfocus = function() {
        if(this.value === '手机') {
            this.value = '';
        }
        // 还得焦点需要把文本款的字体变黑
        this.style.color = '#333';
      }
      // 失去了焦点 onblur
      text.onblur = function() {
          if(this.value === ''){
              this.value = '手机';
          }
          //失去了焦点 
          this.style.color ='#ccc';
      }
  </script>
```

## 3.使用className更改元素样式

```
1.element.style    行内样式操作
2.element.className 类名样式操作
```

注意：

1.如果样式修改较多，可以采用操作类名方式更改元素样式

2.class因为是个保留字，因此使用className来操作元素类名属性

3.className 会直接更改元素的类名，会覆盖原先的类名

