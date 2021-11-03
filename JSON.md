# JSON

1.js的对象只有js自己认识

2.JSON就是一个特殊格式的字符串，这个字符串可以被任意的语言所识别

并且可以转换为任意语言中的对象，JSON在开发中主要用来数据的交互

## json

- JavaScript object notation js对象表示法

- json和js对象的格式一样，只不过json字符串中的属性名必须加双引号

# json分类

- 对象{}
- 数组[]

## json中允许的值

1.字符串

2.数值

3.布尔值

4.null

5.对象

6.数组

```
obj2 = '{"arr":[1,2,3]}';
```

## 将json转换为对象JSON.parse()



```
var json = '{"姓名":'cjiao',"age":18}'
var o = JSON.parse(json)
```



## 将对象转换为json  JSON.stringify(obj)

```
var json = {姓名:'cjiao',age:18}
var o = JSON.stringify(json)
```

# ie5

```
 var str = '{"name":"hhh","性别":"nv"}'

​      eval()

​      这个函数可以用来执行一段字符串形式的js代码并将json格式转换为字符串

​      如果使用eval()执行的字符串中有{},它会将{}当中代码

​      所以要在两边加括号

​      eval("("+str+")");
```

