# HTML5和css3 提高

# HTML5的新特性

HTML5的新增特性主要是针对以前的不足，增加了一些新的标签，新的表单和信贷表单属性等。

## HTML5新增的语义化标签

1.<header>:头部标签

2.<nav>:导航

3.<article>:内容

4.<section>:定义文档某个区域

5.<aside>:侧边栏标签

6.<footer>: 尾部标签

## HTML5新增的多媒体标签

### 1.视频<video>

当前<video>元素支持三种视频格式：尽量使用MP4格式。

语法

```
<video src="文件地址" controls=“controls”><video>
```

了解:

```
<video controls="controls" width="300">
	<source src="move.ogg" type="video/ogg">
	<source src="move.mp4" type="video/mp4">
	您的浏览器暂不支持<video>标签播放视频
</video>
```

视频常见属性

| 属性     | 值                                       | 描述                                                         |
| -------- | ---------------------------------------- | ------------------------------------------------------------ |
| autoplay | autoplay                                 | 视频就绪自动播放（谷歌浏览器需要添加muted来解决自动播放问题） |
| controls | controls                                 | 向用户显示播放控件                                           |
| width    | plxels（像素）                           | 设置播放宽度                                                 |
| height   | plxels                                   | 设置播放器高度                                               |
| loop     | loop                                     | 摆放完是否继续播放该视频，循环播放                           |
| preload  | auto（预先加载视频）none（不应加载视频） | 规定是否加载视频(如果有了autoplay，就该忽略该属性)           |
| src      | url                                      | 视频url地址                                                  |
| poster   | Imgurl                                   | 加载等待的画面图片                                           |
| muted    | muted                                    | 静音播放                                                     |

### 2.音频  <audio>

语法：

```
<audio src="文件地址" controls=“controls”> </audio>
```

| 属性     | 值       | 描述                                           |
| -------- | -------- | ---------------------------------------------- |
| autoplay | autoplay | 如果出现该属性，则音频在就绪后马上播放。       |
| controls | controls | 如果出现该属性，则向用户显示控件，比如播放按钮 |
| loop     | loop     | 如果出现该属性，则每当音频结束时重新开始播放。 |
| src      | url      | 要播放的音频url                                |

谷歌浏览器把音频和视频的自动播放禁止了

我们可以给视频标签添加muted属性来静音播放，音频不可以（通过JavaScript来解决)

视频标签是重点我们经常设置自动播放，不用controls控件，循环和设置大小属性。

### 3.表单input

| 属性值        | 说明                        |
| ------------- | --------------------------- |
| type="email"  | 限制用户输入必须为email类型 |
| type="url"    | 限制用户输入必须为url       |
| type="date"   | 限制用户输入必须为日期类型  |
| type="time"   | 限制用户输入必须为时间类型  |
| type="month"  | 限制用户输入必须为月类型    |
| type="week"   | 限制用户输入必须为周类型    |
| type="number" | 限制用户输入必须为数字类型  |
| type="tel"    | 限制用户输入必须为手机号码  |
| type="search" | 限制用户输入必须为搜索框    |
| type="color"  | 生成一个颜色选择表单        |

## 4.新增表单属性

| 属性         | 值        | 说明                                                         |
| ------------ | --------- | ------------------------------------------------------------ |
| required     | required  | 表单拥有该属性表示其内容不能为空，必填                       |
| placeholder  | 提示文本  | 表单的提示信息，存在默认值将不再显示                         |
| autofocus    | autofocus | 自动聚焦属性，页面加载完成自动聚焦到指定表单                 |
| autocomplete | off/on    | 当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写过的选项。默认已经打开，如autocomplete=“on”，关闭autocomplete=“off”，需要放在表单内，同时加上name属性，同时提交成功 |
| multiple     | multiple  | 可以多选文件提交                                             |

可以通过以下设置方式修改placeholder里面的字体颜色

input：：placeholder {

​				color：pink;

}

# css3新特性

## css3新增属性选择器

1.利用属性选择器可以不用借助于类或者id选择器

```
<input type="text" value="hff">
         <input type="text">
 要选择第一个则
 input[hff] {
 
 }
```



2.属性选择器还可以选择属性=值的某些元素

```
 <input type="text" name="" id="">
         <input type="password" name="" id="">
 要选择第一个则
 input[type=text] {
 
 } 
```



3. 属性选择器可以选择属性值开头的某些元素

   ```
   <div class="icon1"></div>
   <div class="icon2"></div>
   <div class="icon3"></div>
   <div class="icon4"></div>
   选择以上四个则 
   div[class^=icon] {
   
   }
   ```

   

4. 属性选择器可以选择属性值结尾的某些元素。

   ```
   <div class="icon1-date"></div>
   <div class="icon2-date"></div>
   <div class="icon3"></div>
   选择第一第二个
   div[att$="date"]{
    
   }
   ```

   

| 选择符        | 简介                                  |
| ------------- | ------------------------------------- |
| E[att]        | 选择具有att属性的E元素                |
| E[att="val"]  | 选择具有att属性且属性值等于val的E元素 |
| E[att^="val"] | 匹配具有att属性且值以val开头的E元素   |
| E[att$="val"] | 匹配具有att属性且值以val结尾的E元素   |
| E[att*="val"] | 匹配具有att属性且值中有val的E元素     |

注意：类选择器，属性选择器，伪类选择器，权重都是10.

## 结构伪类选择器

结构伪类选择器主要根据文档结构来选择元素，常用于根据父级选择器里面的元素

| 选择符            | 简介                        |
| ----------------- | --------------------------- |
| E ：first-child   | 匹配父元素中第一个子元素E   |
| E ：last-child    | 匹配父元素中最后一个子元素E |
| E ：nth-child     | 匹配父元素中第n个子元素E    |
| E ：first-of-type | 指定类型E 的第一个          |
| E ：flast-of-type | 指定类型E 的最后一个        |
| E ：nth-of-type   | 指定类型E 的第n个           |

nth-child（n)选择某个父元素的一个或多个特定的子元素

1.n可以是数字，关键字和公式

2.n如果是数字，就是选择第n个子元素，里面数字从1开始

3.n可以是关键字，even偶数，odd奇数

4.n可以是公式：常见公式如下(如果n是公式，则从0开始计算，但是第0个元素或者超过了元素的个数则会被忽略)

| 公式 | 取值                             |
| ---- | -------------------------------- |
| 2n   | 偶数                             |
| 2n+1 | 奇数                             |
| 5n   | 5 10 15 ...                      |
| n+5  | 从第五个开始（包含第五个）到最后 |
| -n+5 | 前五个（包含第五个）。。。       |

```
  <section>
        <p>光头强</p>
        <div>熊大</div>
        <div>熊二</div>
    </section>
   
   css
   section div:nth-child(1) {
            
        }
```



```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style> 
p:nth-child(3n+0)
{
	background:#ff0000;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>The first paragraph.</p>
<p>The second paragraph.</p>
<p>The third paragraph.</p>
<p>The fourth paragraph.</p>
<p>The fifth paragraph.</p>
<p>The sixth paragraph.</p>
<p>The seventh paragraph.</p>
<p>The eight paragraph.</p>
<p>The ninth paragraph.</p>

<p><b>注意:</b> Internet Explorer 8以及更早版本的浏览器不支持:nth-child()选择器.</p>

</body>
</html>
```





nth-child 会把所有的盒子都排列序号，执行的时候会首先看nth-child () ，之后回去看 前面的元素

nth-of-type执行的时候首先看 div指定的元素 之后再看 nth-of-type 

​		区别：

1.nth-child对父元素里面所有孩子排序选择（序号是固定的）先找到第n个孩子，然后再看看是否和E匹配

2. nth-of-type 对父元素里面指定子元素进行序号排序，先匹配E，然后再根据E找到第n个孩子。

   

## 伪元素选择器（重点）

伪元素选择器可以帮助我们利用css创建新标签元素，而不需要HTML，从而简化HTML结构。

| 选择符     | 简介                                     |
| ---------- | ---------------------------------------- |
| ：：before | 在元素内部的前面插入内容eg: p::before {} |
| ：：after  | 在元素内部的后面插入内容                 |

注意：

1.before 和 after 创建一个元素，但是不属于行内元素

2.新创建的这个元素在文档树中是找不到的，所以我们称为伪元素

3.语法： element：:before{}

4.beforehe after 必须有content属性

5. before 在父元素内容的前面创建元素，after在父元素内容的后面插入元素

6. 伪类选择器和标签选择器一样，权重为1；

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <style>
           p.one::after {
               content:"";
               display: inline-block;
               width: 50px;
               height: 10px;
               background: blue;
           }
           p.two::after {
               content:"要插入的内容";
               color: red;
               font-size: 6px;
           }
           p.three::after {
               content: url('./smiley.gif');
               position: relative;
               top: 8px;
           }
       </style>
   </head>
   <body>
       <p class="one">伪元素 ::after</p>
       <p class="two">伪元素 ::after</p>
       <p class="three">伪元素 ::after</p>
   </body>
   </html>
   ```
   
   

## 伪元素清除浮动

1.额外标签法清除浮动

2.父级添加overflow属性

3.父级添加after伪元素

```
clearfix:after {
	centent:"";//伪元素必须写的属性
	display:block;//插入的元素必须是块级
	height:0;//不要看见这个元素
	clear:both;//核心代码清除浮动
	visibility: hidden;//不要看见这个元素
}
```

4.父级添加双伪元素

```
.clearfix:before,.claerfix:after{
content:'';
dispaly:table;
}
.clearfix:after {
	clear:both;
}
```

# css3盒子模型

css3中可以通过box-sizing来指定盒子模型，有两个值：即可指定为content-box，border-box，这样我们计算盒子大小的方式就发生了改变

可以分为两种情况：

1.box-sizing：content-box盒子大小为width+padding+border（默认的）

2.box-sizing：border-box盒子大小为width

如果我们把盒子模型改为了box-sizing：border-box ，那padding和border就不会撑大盒子了。

## css3滤镜filter

css3滤镜	filter：

filter css属性将模糊或颜色偏移等图像效果应用于元素。

```
 filter: 函数();	例如：filter：blur（5px）；blur模糊处理 数值越大越模糊
```

## css3宽度calc函数

 css3calc函数

calc（）此css函数让你在声明css属性时执行一些计算

```
 width:calc(100% - 30px)//子盒子永远比父盒子少30px
```

括号里用加减乘除来计算

## css3过渡

```
1.transition:要过渡的属性 花费时间 运动曲线 何时开始；
```

1.属性： 想要变化的css属性， 宽度高度， 背景颜色 内外边距都可以。如果想要所有的属性都有变化过渡，写一个all就可以。

2.花费时间：单位是秒比如5s

3.运动曲线: 默认是ease可以省略）

4.何时开始：单位是秒（必须写单位）可以设置延迟触发时间，默认是0秒（可以省略）

5.如果想要多个属性变化，用逗号，如果所有属性变化，用all

记住：谁做过渡给谁加

# 