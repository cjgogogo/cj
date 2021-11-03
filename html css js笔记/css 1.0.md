# 学习目标

## 1.0 能够说出什么是css

html的局限性：只关注于内容的语义。 主要做结构，显示元素内容。



css是层叠样式表（Cascading Style Sheets)的简称

有时我们会称之为css样式表或级联样式表。

css也是一种标记语言

css主要用于设置HTML页面中的文本内容（字体，大小，对齐方式等），图片的外形（宽高，边框样式，边距等）以及版面的布局和外观显示样式。

css让我们的网页更加丰富多彩，布局更加灵活自如，美化HTML，让HTML更漂亮，让布局更简单。



## 2.0能够使用css基础选择器

## 3.0能够设置文本样式

## 4.0能够说出css的三种引入方式

## 5.0能够使用Chrome调试工具调试样式

# 代码风格

### 样式格式书写

展开格式(更直观)

```
h3 {
	color: pink;
	font-size: 20px;
}
```

### 样式大小写

更推荐用小写

```
h3 {
	color: pink;
}
```

### 空格规范

在属性值前面，冒号后边加一个空格。

选择器（标签）和大括号中间保留空格

# css基础选择器

### css选择器的作用

选择器（选择符）就是根据不同需求把不同的标签选出来。

就是选择标签用的

eg：

```
h1 {
	color: red;
}
```

以上css做了两件事：

1.找到了所有的h1 标签（选对人）

2.设置这些标签的样式，比如颜色为红色（做对事)

### 标签选择器

标签选择器是指用HTML标签名称作为选择器，按标签名称分类，为页面中某一类标签指定统一的css样式。

#### 作用

标签选择器可以把某一类标签全部选择出来，比如说所有的<div>

#### 优点

能够快速为页面中同类型的标签统一设置样式

#### 缺点

不能差异化样式，只能选择全部的当前标签。

### 类选择器

```
   <style>
    .red {
        color: red
    }
    </style>
</head>
<body>
     
    <ul>
        <li class="red">江南</li>
        <li>来生缘</li>
        <li>李兰香</li>
        <li>江南style</li>
    </ul>  
```

#### 1.0 多类名使用方式

（1）在class属性中写多个类名 

（2）多个类名中间必须用空格分开

（3）这个标签就可以分别具有这些类名的样式

   (4) 统一修改的时候比较方便

```
<div class="pink font20">cc</div>
```

### id选择器

样式通过#定义 结构id调用 只能调用一次 唯一性

类选择器在修改样式中,经常和JavaScript搭配使用。用的比较多，id选择器一般用于唯一性的元素上

```
#pink {
	color: red;
}
<div id="pink">
```

### 通配符选择器

在css中 ，通配符选择器使用 "*" 选取页面中所有标签

```
*{
	color: pink;
}
```

# 字体属性

CSS Font(字体)属性定义字体系列，大小，粗细，和文字样式（如斜体）

### 1.0 字体系列

css使用font-family 属性定义文本的字体系列。

```
p { font-family:"微软雅黑";}
div {font-family:Arial,"Microsoft Yahei", "微软雅黑";}
```

1.各种字体之间使用英文状态下的逗号隔开。

2.如果有空格隔开的多个单词组成的字体，加引号。

3.尽量使用系统默认自带字体，保证在任何用户的浏览器中都能正确显示。

4.最常见的几个字体：body{font-family:'Microsoft YaHei', tahoma, arial, 'Hiragino Sans GB'}

###  2.0 字体大小

css 使用font-size 属性定义字体大小。

```
p {
font-size: 20px;
}
```

1. px（像素）大小是我们网页的最常用的单位

2. 谷歌浏览器默认的文字大小为16px
3. 不同的浏览器可能默认显示的字号大小不一致，我们尽量给一个明确值大小，不要默认大

4. 可以给body指定整个页面文字的大小 标签文字比较特殊，需要单独指定。

   

### 3.0 字体粗细

css用 font-weight 属性来

font-weight : normal ;与 font-weight : 400 ; 等同

实际开发中，更提倡用数字 表示加粗或者变细

```+
<style>
.body {
		font-weight: 700;
}
</style>
<body>{

}
</body>
```

| 属性值  | 描述                               |
| :------ | ---------------------------------- |
| normal  | 默认值（不加粗的）                 |
| bold    | 定义粗体（加粗的）                 |
| 100-900 | 400等同于 normal， 而700等同于bold |

### 3.0 文字样式

css使用 font-style 属性设置文本的风格。

```
p {
	font-style: normal;
}
```

| 属性值 | 作用                                                  |
| ------ | ----------------------------------------------------- |
| normal | 默认值，浏览器会显示标准的字体样式 font-style：normal |
| italic | 浏览器会显示斜体的字体样式                            |

### 字体复合形式

<style>{
	font: font-style font-weight font-size/line-height font-family;
}

使用font 属性时，必须按上面的语法格式中的顺序书写，不能更换顺序，并且各个属性间以空格隔开

不需要设置的属性可以省略，但必须保留 font-size和font-family属性，否则font属性将不起作用。

# css文本属性

css text（文本）属性可定义文本的外观，比如文本的颜色

###  1.0 对齐文本

 text-align 属性用于设置元素内文本内容的水平对齐方式。

```
div {
	text-align: center;//居中
}
```

```
<style>
h1 {
	text-align: center;//居中
}
</style>
```

### 2.0 插入文本

text-decoration

```
<style>
h1 {
 	text-decoration: none;
}
</style>
```



| 属性值       | 描述                           |
| ------------ | ------------------------------ |
| none         | 默认，没有装饰线（最常用）     |
| underline    | 下划线。链接自带下划线（常用） |
| overline     | 上划线（几乎不用）             |
| line-through | 删除线（不常用                 |

### 3.0 文本缩进

text-indent

```
<style>
p {
 	text-indent: 20px/2em(两个字);
}
</style>
```

### 4.0 行间距

line-height ： 26px; 行间距由文字高度 加上间距和下间距

```
<style>
p {
 	line-height: 20px/2em(两个字);
}
</style>
```

