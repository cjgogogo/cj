# JavaScript

## 学习目标

1.能够说出JavaScript是什么

2. 能够知道JavaScript的发展历史
3. 能够说出浏览器执行JavaScript的原理
4. 能够说出JavaScript由那三部分组成
5. 能够写出JavaScript三个输入输出语句

## JavaScript历史

布兰登·艾奇

## JavaScript是什么

1. 脚本语言：不需要编译，运行过程中由js解释器（js引擎）逐行来解释并执行，

2.现在也可以基于Node.js 技术进行服务器端编程

# js是一门怎样的语言

js是一种直译式脚本语言，是一种动态类型，弱类型

## js的作用

1. 表单动态校检（密码强度检测）
2. 网页特效
3. 服务端开发（Node.js)
4. 桌面程序（Electron）
5. App（Cordove）
6. 控制硬件-物联网（Ruff）
7. 游戏开发（coco-2d-js)

js脚本语言-编程类语言

实现业务逻辑和页面控制(决定功能)，相对于人的各种动作

## 浏览器执行js简介

浏览器分为两个部分 渲染引擎和js引擎

渲染引擎：用来解析HTML与css，俗称内核，比如chrome浏览器的blink，老版本的webkit

js引擎：也称为js解释器，用来读取网页中的js代码，对其处理后运行，比如chrome浏览器的v8

## js的组成

1.ECMAJavaScript JavaScript语法

ECMAJavaScript：规定了js的编程语言和基础核心知识，是所有浏览器厂商共同遵守的一套js语法工业标准

2. DOM 页面文档对象模型

   对页面中各种元素进行操作。

3.BOM 浏览器对象模型

对浏览器窗口进行操作

## js初始

js有三种书写位置，分别为行内，内嵌和外部

### 1.行内式js

语法

```
<input type="button" value="点我试试" onclick="alert('hello world')"/> 
```

1. 可以将单行或少量js代码写在html标签的事件属性中（以on开头的属性），如：onlick

2. 注意单引号的使用：在HTML中我们推荐使用双引号，js中我们推荐使用单引号

3. 可读性差，在html中编写js大量代码时，不方便阅读；

4. 引号易错，引号多层嵌套匹配时，非常容易弄混。

5. 特殊情况下使用

   

### 2.内嵌js



爱谁谁4<script>
        alert('hello world');
    </script>

可以将多行代码写到<script>标签中

内嵌js是学习时常用的方式

### 3.外部

```
    dd<script src="my.js">
    </script>
```

适用于大量js代码时

## js注释

//1.单行注释 快捷键 ctrl+/

/* 多行注释 默认快捷键 shift+alt+a   */

## JS输入和输出语句

| 方法             | 说明                           | 归属   |
| ---------------- | ------------------------------ | ------ |
| alert（msg）     | 浏览器弹出警示框               | 浏览器 |
| console.log(msg) | 浏览器控制台打印输出信息       | 浏览器 |
| prompt           | 浏览器弹出输入框，用户可以输入 | 浏览器 |

# 数组

利用数组字面量创建数组

var arr = [] 

# 新增数组

1.

```
  <script>
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var newArr = [];
        var j = 0;
        for ( var i = 0; i < arr.length; i++) {
            if (arr[i] > 10) {
                newArr[j] = arr[i];
                j++;
            }
        }
        console.log(newArr);
    </script>
```

2.

```
<script>
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var newArr = [];
        // var j = 0;
        // 刚开始数组索引号应该从0开始 依次递增
        for ( var i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                newArr[newArr.length] = arr[i];
            }
        }
        console.log(newArr);
    </script>
```



# 冒泡排序

1.一共需要的趟数， 我们用外层for循环

​		5个数据需要走4躺

​		长度为 数组长度-1 arr.length - 1

2.每一趟交换次数 我们用里层for循环

第一汤交换4次

第二趟 交换3次

第三趟 交换2次

第四趟交换1次

长度为数组长度 减去次数

但是我们的次数是从0次开始的所有最终 arr.length - 1 - i

```
<script>
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        for(var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1;j++) {
               if(arr[j] > arr[j + 1]) {
                   var temp = arr[j];
                   arr[j] = arr[j+1];
                   arr[j+1] = temp;
               }
            }
        }
        console.log(arr);
    </script>
```

