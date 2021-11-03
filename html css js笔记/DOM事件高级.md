

# 注册事件

```
eventTarget.addEventListener(type, listener[,useCapture])
```

eg：

```html
<body>
  <button>dd</button>
  <button>ss</button>
 <script>
   var btns = document.querySelectorAll('button');
   btns[0].addEventListener('click', function() {
     alert(22);
   })
     // 同一个元素，同一个事件可以添加多个侦听器
   btns[0].addEventListener('click', function() {
     alert(4455);
   })
 </script>
```

注意：

type：事件类型 比如click mouseover 不要带on

listener：事件处理函数，事件发生时，会调用该监听函数

useCapture：可选参数，是一个布尔值，默认是flase



# 删除事件

```html
<body>
  <div>1</div>
  <div>2</div>
  <div>3</div>
 <script>
  var divs = document.querySelectorAll('div');
  // 传统方式删除事件
  divs[0].onclick = function() {
    alert(22);
    divs[0].onclick = null;
  }
  //2.0 removeElentListener 删除
  divs[1].addEventListener('click',fn) 
    function fn() {
    alert(66);
    divs[1].removeEventListener('click',fn);
  }
  
 </script>
```

# DOM事件流理论

事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。

注意：

1.JS代码中只能执行捕获或者冒泡其中的一个阶段。

2.onclick 和 attachEvent 只能得到冒泡阶段

3.addEventListener（type，listener[, useCaputer] 第三个参数如果是true ，表示事件在捕获阶段调用事件处理程序；如果是false（不写默认就是false）表示事件冒泡阶段调用事件处理程序。

4.实际开发中我们很少使用事件捕获，更关注事件冒泡。

5.有些事件是没有冒泡的，比如 onblur，onfocus， onmouseenter，onmouseleave

# 事件对象

## 什么是事件对象

```
eventTarget.onclick = function(event) {}
eventTarget.addEventListener('click', function(event) {})
// 这个event 就是事件对象， 我们还喜欢写成 额或者 evt
```

官方解释： event 对象代表事件的状态，比如键盘按键的状态，鼠标的位置，鼠标按钮的状态.

简单理解：事件发生后。跟事件相关的一系列信息数据的集合都放在这个对象里面，这个对象就是事件对象event，它有很多属性和方法

比如：

1.谁绑定了这个事件

2.鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置。

## e-target和this区别

e-target 返回的是触发事件的对象（元素）

this 返回的是绑定事件的对象（元素）

| 事件对象属性方法   | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| e.target           | 返回触发事件的对象  标准                                     |
| e.srcElement       | 返回触发事件的对象  非标准 ie-8使用                          |
| e.type             | 返回事件的类型 比如 click mouseover 不带on                   |
| e.cancelBubble     | 该属性阻止冒泡 非标准 ie6-8使用                              |
| e.returnValue      | 该属性 阻止默认事件（默认行为） 非标准 ie6-8使用 比如不让链接跳转 |
| e.preventDefalut() | 该方法 阻止默认事件（默认行为）标准 比如不让链接跳转         |
| e.stopPropagation  | 阻止冒泡 标准                                                |

```
<body>
 <a href="www.baidu.com">百度</a>
 <script>
   var a = document.querySelector('a');
   a.addEventListener('click',function(e) {
     e.preventDefault(); //dom标准写法
   }) 
   // 传统注册方法
   a.onclick = function(e) {
     // 普通浏览器 e.preventDefault(); 
     // 低版本ie ie678 returnValue 属性
     // e.returnValue;

     // 可以利用returnValue  也能阻止默认行为 但后面的代码不执行了
     return false;
       }
 </script>
```

## 事件委托（代理，委派）

### 事件委托

事件委托又称为事件代理，在jQuery里面称为事件委派

### 事件委托的原理

不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个节点

## 鼠标事件对象

event对象代表事件的状态，跟事件相关的一系列信息的集合。现阶段我们主要是用鼠标事件对象MouseEvent和键盘事件对象KeyboardEvent。

| 鼠标事件对象 | 说明                                    |
| ------------ | --------------------------------------- |
| e.clientX    | 返回鼠标相对于浏览器窗口可视化区的X坐标 |
| e.clientY    | 返回鼠标相对于浏览器窗口可视化区的Y坐标 |
| e.pageX      | 返回鼠标相对于文档页面的x坐标 IE9+支持  |
| e.pageY      | 返回鼠标相对于文档页面的Y坐标 IE9+支持  |
| e.screenX    | 返回鼠标相对于电脑屏幕的x坐标           |
| e.screenY    | 返回鼠标相对于电脑屏幕Y坐标             |

## 跟随鼠标的天使

```html
<style>
  img {
    position: absolute;
  }
</style>
<body>
  <img src="images/angel.gif" alt="">
    <script>
      var pic = document.querySelector('img');
      document.addEventListener('mousemove',function(e){
        //核心原理：每次鼠标移动，我们都会获得最新的鼠标坐标： 把这个x和y坐标作为图片的top和left值即可。
        var x = e.pageX;
        var y = e.pageY;
        //千万不要忘记给left和top 添加px单位
        pic.style.left = x - 50 + 'px';
        pic.style.top = y - 40 + 'px';
      })
    </script>
```

## 常用的键盘事件

| 键盘事件   | 触发条件                                            |
| ---------- | --------------------------------------------------- |
| onkeyup    | 某个键盘按键松开时触发                              |
| onkeydown  | 某个键盘按键按下时触发                              |
| onkeypress | 某个键盘按键按下时触发 但是不识别功能键 比如 CTRL、 |

键盘事件对象中的keyCode属性可以得到相应键的ASCII码值

## 京东快递单号

```html
<style>
   * {
            margin: 0;
            padding: 0;
        }
        
        .search {
            position: relative;
            width: 178px;
            margin: 100px;
        }
        
        .con {
            display: none;
            position: absolute;
            top: -40px;
            width: 171px;
            border: 1px solid rgba(0, 0, 0, .2);
            box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
            padding: 5px 0;
            font-size: 18px;
            line-height: 20px;
            color: #333;
        }
        
        .con::before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            top: 28px;
            left: 18px;
            border: 8px solid #000;
            border-style: solid dashed dashed;
            border-color: #fff transparent transparent;
        }
</style>
<body>
  <div class="search">
    <div class="con">
    </div>
    <input type="text" placeholder="请输入您的快递单号" class="jd">
  </div>
    <script>
       // 快递单号输入内容时， 上面的大号字体盒子（con）显示(这里面的字号更大）
        // 表单检测用户输入： 给表单添加键盘事件
        // 同时把快递单号里面的值（value）获取过来赋值给 con盒子（innerText）做为内容
        // 如果快递单号里面内容为空，则隐藏大号字体盒子(con)盒子
        var con = document.querySelector('.con');
        var jd = document.querySelector('.jd');
        //keydown 和 keypress 在文本框里面的特点：他们两个事件触发的时候，文字还没有落入文本框中。
        jd.addEventListener('keyup',function(){
          if(this.value!=='') {
            con.style.display = 'block';
            con.innerHTML = this.value;
          }
        jd.addEventListener('blur',function(){
          con.style.display = 'none';
        })
        jd.addEventListener('focus',function() {
          if(this.value!=='') {
            con.style.display = 'block';
          }
        })
        })
    </script>
</body>
```



