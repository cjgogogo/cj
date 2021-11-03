# css盒子

## 学习目标

能够准确阐述盒子模型的4个组成部分

能够利用边框复合写法给元素添加边框

能够计算盒子的实际大小

能够利用盒子模型布局模块案例

能够给盒子设置圆角边框

能够给盒子添加阴影

能够给文字添加阴影

## 盒子模型

### 1.看透网页布局的本质

网页布局过程:

1.先准备好相关网页元素，网页元素基本都是盒子Box；

2.利用css设置好盒子样式，然后摆到相应位置。

3.往盒子里装内容

网页布局的核心本质：利用css摆盒子。

### 1.2盒子模型组成

border边框     content内容

padding内边距    分边距 margin

### 1.3 边框（border）

border可以设置元素的边框，边款有三部分组成 边框宽度 边框样式  边框颜色

语法：

```html
border : border-width || border-style || border-color 
```



| 属性         | 作用                   |
| ------------ | ---------------------- |
| border-width | 定义边框粗细，单位是px |
| border-style | 边框样式               |
| border-color | 边框颜色               |

```
<style>
      div{
          width: 300px;
          height: 200px;
          /* 边框粗细 一般用px； */
          border-width: 5px;
          border-style: solid;
          /* solid 实线边框  dashed 虚线边框 dotter点线边框 */
      }
   </style>
```

边框属性指定一个元素边框的颜色和样式

简写：

```HTML
border: 1px solid red;  没有顺序
```

边框分开写法：(边框的四边)

```
border-top : 1px solid red ;
border-bottom;
border-left:
border-right:
```

### 1.4 表格的细线边框

border-collapse 属性控制浏览器绘制表格边框的方式，它控制单元格的边框。

```
<style>
table , td ,th,{
		border: 1px soild pink;
		border-collapse:collapse;
		text-align: center;
}
</style>
```

### 1.5 边框会影响盒子的实际大小

边框会增加盒子的实际大小，有两种办法解决

1.测量盒子大小的时候，不量边框

2. 如果测量的时候包含了边框 ，则需要width、height减去边框宽度。

3. ```
   <!DOCTYPE html>
   <html>
   <head>
   <meta charset="utf-8"> 
   <title>菜鸟教程(runoob.com)</title> 
   <style>
   p.none {border-style:none;}
   p.dotted {border-style:dotted;}
   p.dashed {border-style:dashed;}
   p.solid {border-style:solid;}
   p.double {border-style:double;}
   p.groove {border-style:groove;}
   p.ridge {border-style:ridge;}
   p.inset {border-style:inset;}
   p.outset {border-style:outset;}
   p.hidden {border-style:hidden;}
   </style>
   </head>
   
   <body>
   <p class="none">无边框。</p>
   <p class="dotted">虚线边框。</p>
   <p class="dashed">虚线边框。</p>
   <p class="solid">实线边框。</p>
   <p class="double">双边框。</p>
   <p class="groove"> 凹槽边框。</p>
   <p class="ridge">垄状边框。</p>
   <p class="inset">嵌入边框。</p>
   <p class="outset">外凸边框。</p>
   <p class="hidden">隐藏边框。</p>
   </body>
   
   </html>
   ```

4. 

### 1.6 内边距

 padding 属性用于设置内边距，即边框与内容之间的距离。

 

| 属性           | 作用     |
| -------------- | -------- |
| padding-left   | 左内边距 |
| padding-right  | 右内边距 |
| padding-top    | 上内边距 |
| padding-bottom | 下内边距 |

内边距复合型写法



| 值的个数                     | 表达意思                                                     |
| ---------------------------- | ------------------------------------------------------------ |
| padding: 5px ;               | 1个值，代表上下左右都有5像素内边距                           |
| padding: 5px 10px;           | 2个值，表示上下内边距是5像素，左右内边距是10像素             |
| padding: 5px 10px 20px;      | 3个值，代表上内边距是5像素 左右内边距10像素 下内边距是20像素 |
| padding: 5px 10px 20px 30px; | 4个值，上是5像素 右是10像素 下是20像素 左是30像素 顺时针     |

padding不会撑开盒子大小的情况

如果盒子本身没有指定width/height属性，则此时padding不会撑开盒子大小。

### 1.7 外边距（margin）

盒子和盒子之间的距离   

| 属性          | 作用     |
| ------------- | -------- |
| margin-left   | 左外边距 |
| margin-right  | 右外边距 |
| margin-top    | 上外边距 |
| margin-bottom | 下外边距 |

margin简写方式代表意义跟padding完全一致。

#### 外边距典型应用

外边距可以让块级盒子水平居中，但必须满足两个条件：

1.盒子必须指定了宽度（width）

2.盒子左右的外边距都设置了auto

```html
.header {
		width:960px; margin:0 auto;
}
```

常见的写法，以下三种都可以：

​    1. margin-left：auto；margin-night：auto；

2. margin：auto；

3. margin：0 auto；

   注意：以上方法是让块级元素水平居中，行内元素或者行内块元素水平居中给其父元素添加text-align：center即可。

   

### 1.8 外边距合并

使用 margin定义块元素的垂直外边距时，可能会出现外边距的合并。

主要有两种情况

1.相邻块元素垂直外边距的合并。

​     当上下相邻的两个块元素（兄弟关系） 相遇时，如果上面的元素有下边距 margin-bottom，下面的元素有上外边距 margin-top ，则他们之间的垂直间距不是margin-bottom与margin-top之和，而是取两个值中的较大者，这种现象被称为相邻块元素垂直外边距的合并。

（尽量只给一个盒子添加margin值。）

2. 嵌套块元素垂直外边距的塌陷。

   对于两个嵌套关系的盒子，父元素有外上边距时子元素也有外上边距，此时父元素会塌陷较大的外边距值。

   解决方案：

   1. 可以为父元素定义上边框
   2. 可以为父元素定义上内边距
   3. 可以为父元素添加 overflow： hidden；

```html
<style>
       .one {
           width: 400px;
           height: 400px;
           background-color: purple;
           margin-top: 50px;
          
           /* border:1px solid red; */
            /* border: 1px solid transparent;   */
           /* padding:1px; */
            overflow:hidden;
            
       }
       .two {
           width: 200px;
           height: 200px;
           background-color: pink;
           margin-top: 100px;
       }
     
   </style>
</head>
<body>
   <div class="one">
    <div class="two"></div>
   </div>
 
</body>
```



### 1.9 清除内外边距

网页元素很多带有默认的内外边距，而且不同的浏览器默认的也不一致，因此我们在布局之前，首先要清楚下网页元素的内外边距。

```
* {
	padding:0;//清除内边距
	margin:0;//清除外边距
}
```

注意： 行内元素为了照顾兼顾性，尽量只设置内外边距，不要设置上下内外边距，但是转换为块级和行内块元素就可以了。（设置了也没用）

## ps基本操作

## 去掉li前的小圆点

```
list-style:none;
```

## 圆角边框

在css3中， 新增了圆角边框样式，这样我们的盒子就可以变为圆角了

```html
border-radius：length；
```



radius 半径（圆的半径）原理：（椭）圆与边框的交集形成圆角效果

1. 参数值可以为数值或百分比的形式
2. 如果是正方形，想要设置一个圆，把数值改为高度或者宽度的一半就可以做。或者直接写50%。

3.如果是个矩形，设置为高度的一半就可以做

4.该属性是一个简写属性，可以跟四个值，分别代表左上角，右上角，右下角，左下角。

5.分开写 ： border-top-left-radius， border-top-right-radius   border-bottom-right-radius   bottom-bottom-left-radius

## 5.盒子阴影（重点）

css3中新增盒子阴影，我们可以使用box-shadow属性为盒子增添阴影。

语法

```html
box-shadow：h-shadow v-shadow blur spread color inset
```



| 值       | 描述                           |
| -------- | ------------------------------ |
| h-shadow | 必须。水平阴影的位置，允许复值 |
| v-shadow | 必须。垂直阴影的位置，允许负值 |
| blur     | 可选，模糊距离                 |
| spread   | 可选.阴影的尺寸                |
| color    | 可选，阴影的颜色，             |
| inset    | 可选，将外部阴影改为内部阴影   |

注意：

1，默认的是外阴影（outset），但是不可以写这个单词，否则导致阴影无效

2.阴影不占用空间，不会影响其他盒子排列。

 如果要鼠标经过产生阴影的效果

```
div:hover{
box-shadow：h-shadow v-shadow blur spread color inset
}
```

## 文字阴影

语法：

```
text-shadow:h-shadow v-shadow blur color 
```

| 值       | 描述                           |
| -------- | ------------------------------ |
| h-shadow | 必须。水平阴影的位置，允许复值 |
| v-shadow | 必须。垂直阴影的位置，允许负值 |
| blur     | 可选，模糊距离                 |
|          |                                |
| color    | 可选，阴影的颜色，             |
|          |                                |

# 

