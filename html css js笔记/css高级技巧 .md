# css高级技巧

## 学习目标

1. 精灵图
2. 字体图标
3. css三角
4. css用户界面样式
5. vertical-align属性应用
6. 溢出的文字省略号显示
7. 常见布局技巧

# 精灵图

## 为什么需要精灵图

一个网页中往往会应用很多小的背景图像作为修饰，当网页中图像过多时，服务器就会频繁的接收和发送请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。

因此，为了有效地减少服务器接收和发送请求的次数，提高页面加载速度，出现了css精灵技术（也称 Css Sprites,CSS雪碧）。

## 精灵图的使用

使用核心

1. 精灵技术主要针对于背景图片使用，就是把多个小背景图片整合到一张大图中。 

2. z这个大图片也被称为 sprites 精灵图 或者 雪碧图

3. 移动背景图片位置，此时可以使用background-position。

4. 移动的距离就是这个目标图片的x和y坐标，注意网页中的坐标有所不同

5. 因为一般情况下都是往上往左移动，所以数值是负值。

6. 使用精灵图的时候需要精准测量，每个小背景图片的大小和位置。

   

   

   

   

   ## 精灵图使用方法

   - 第一步：将精灵图缩放
   - 第二步，量出所需图标的大小 
   - 找到所需图标坐标



# 背景线性渐变

```
背景渐变必须添加浏览器私有前缀
background：-webkit-linear-gradient(left,red,bule)起始方向 ，颜色1，颜色2.....
方向可以是上下左右 也可以是度数 默认从上往下
左上角 (top,left,颜色.)
```



## 字体图标

## 字体图标的产生

字体图标使用场景： 主要用于网站中通用，常用的一些小图标

精灵图是有很多优点的，但是缺点很明显。

1. 图片文件还是比较大的

2. 图片本身放大和缩小会失真

3. 一旦图片制作完毕，想要更换非常复杂

   

此时，有一种技术的出现很好的解决了以上问题，就是字体图标 iconfont。

字体图标可以为前端工程师提供一种方便高效的图标使用方式，展示的是图标，本质属于字体。

## 字体图标使用

推荐网站

icomoon 字库c

阿里iconfont字库 http://www.iconfont.cn/

## css2D转换

转换（transform）是css3中具有颠覆性的特征之一，可以实现元素的位移，旋转，缩放等效果

可以简单理解为变形

1.移动：translate

2.旋转：rotate

3.缩放：scale 

2D转换是改变标签在二维平面上的位置和形状的一种技术，

### 2D转换之移动translate

2D移动是2D转换里面的一种功能，可以改变元素在页面中的位置，类似定位。

1.语法

```html
 transform: translate(x,y);
 或者分开写
 transform: transformX(n);
 transform: transformY(n);
```



2.重点

1.定义2D转换中的浮动，沿着X和Y轴移动元素

2. translate最大的优点：不会影响
3. translate中的百分比是相对于自身元素的translate:(50%,50%);
4. 对行内标签没有效果

## CSS三角

## 网页中常见一些三角形，使用css直接画出来就可以，不必做成图片或者字体图标。

语法：

```
div {
	width:0;
	height:0;
	line-height:0;//兼容低版本的浏览器
	font-size:0;//兼容低版本的浏览器
	border: 50px solid transparent;//控制三角形大小
	border-left-color；pink；//控制三角形颜色
}
```

# CSS用户界面样式

## 鼠标样式

```
li {cursor: pointer; }
```

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

| 属性值      | 描述      |
| ----------- | --------- |
| default     | 小白 默认 |
| pointer     | 小手      |
| move        | 移动      |
| text        | 文本      |
| not-allowed | 禁止      |

```
<li style= "cursor: defalut;"> </li>
```

## 轮廓线

给表单添加 outline：0； 或者 outline：none

## 防止拖拽文本域 resize

实际开发中，我们文本域右下角是不可以拖拽

```
textarea { resize: none }
```



## CSS vertical-align 属性应用

css的vertical-align 属性使用场景：经常用于设置图片或者表单（行内块元素）和文字垂直对齐。

官方解释： 用于设置一个元素垂直对齐方式，但是它只针对于行内元素或者行内块元素有效。

```
vertical-align : baseline | top | middle |bottom 
```

| 值       | 描述                                 |
| -------- | ------------------------------------ |
| baseline | 默认。元素放置在父元素的基线上。     |
| top      | 把元素的顶端与行中最高元素的顶端对齐 |
| middle   | 把此元素放置在父元素的中部。         |
| bottom   | 把元素的顶端与行中最低的元素顶端对齐 |

图片，表单都属于行内块元素，默认的vertical-align 是基线对齐。

此时可以给图片，表单这些行内块元素的vertical-align 属性设置为 middle 就可以让文字和图片垂直居中对齐了。

## 解决图片底部默认空白缝隙问题

bug： 图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。

主要解决方法有两种：

1. 图片添加vertical-align：middle|top|bottom 等（提倡使用）
2. 把图片转换为块级元素 display：block；

## 溢出的文字省略号显示

## 单行文本溢出显示省略号

单行文本溢出显示省略号--必须满足三个条件

```
/*1.先强制一行内显示文本*/
white-space: nowrap;
/*2.超出的部分隐藏*/
overflow:hidden;
/*3.文字用省略号代替超出的部分*/
text-overflow: ellipsis;
```

## 多行文本溢出显示省略号

多行文本溢出显示省略号，有较大的兼容性问题，适合于webkit浏览器或者移动端（移动端大部分是webkit内核）

```html 
overflow:hidden;
text-overflow:ellipsis;
/*弹性伸缩盒子模型显示*、
display: -weblit-box
/*限制在一个块元素显示的文本的行数*/
-webkit-line-clamp:2;
/*设置或者检索伸缩盒对象的子元素的排列方式*/
-webkit-box-orient:vertical;
```



# 常见的网页布局

## margin负值的应用

eg： 两个盒子带有四个边框，两个盒子合并在一起的话，会有一个边框因为没有层叠而很粗，此时在style中

给盒子

```
{
	border:1px solid pink;
	margin-left:-1px;
}
```



2.鼠标经过盒子的时候，显示盒子边框

方法：

鼠标经过盒子时候，提高当前盒子的层级（如果没有定位则加相对定位（保留位置） 如果有定位，则加z-index）

## 文字围绕浮动元素

巧妙运用浮动元素不会压住图片

## 行内块巧妙运用

## CSS三角形强化

怎么用css弄出一个直角三角形

```
 .box {
            width: 0;
            height: 0;
            /* 把上边框调大 */
            border-top:100px solid transparent;
            border-right: 50px solid skyblue;
            /* 左边和下边的边框宽度设置为0 */
            border-bottom:0 solid blue;
            border-left: 0 solid green;
        }
 或者
 {
  border-color: transparent blue transparent transparent;
            border-width:100px 50px 0 0; 
            border-style: solid;
 }
```

# css初始化

不同浏览器对有些标签的默认值不同，为了消除不同浏览器对HTML文本呈现的差异，照顾浏览器的兼容，我们需要对css初始化。

简单理解：css初始化是指重设浏览器的样式。（也称css reset）

​	Unicode编码字体

把中文字体名称用相应的Unicode编码来代替，这样可以有效的避免浏览器解释css代码时候出现乱码

eg

黑体\9ED1\4F53

宋体\5B8B\4F53

微软雅黑\5FAE\96C5\9ED1

