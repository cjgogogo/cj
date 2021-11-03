# /列表

## 无序列表

```
<ul>
    <li> </li>
    <li> </li>
    <li> </li>
</ul>
```

## 有序列表

```
<ol>
    <li> </li>
    <li> </li>
    <li> </li>
</ol>
```

## 自定义列表

主要用于对名词的解释

eg:上面一个小标题，下面有几个标题围绕他的。

```
<dl>
    <dt>名词1</dt>
    <dd>名词1解释1</dd>
    <dd>名词1解释2</dd>
</dl>
```

# 表单

## 表单组成

### 表单域

表单域是一个包含表单元素的区域

在HTML标签中，<form>标签用于定义表单域，以实现用户信息的收集和传递。

<form>会把它范围内的表单元素提交给服务器

```
<form action ="url地址" method="提交方式" name="表单域名称">
各种表单元素控件
</from>
```

| 属性   | 属性值   | 作用                                               |
| ------ | -------- | -------------------------------------------------- |
| action | url地址  | 用于指定接收并处理表单数据的服务器程序的url地址    |
| method | get/post | 用于设置数据的提交方式，其取值为get或post。        |
| name   | 名称     | 用于指定表单的名称，以区分同一个页面中的多个表单域 |

### 表单控件（表单元素）

在表单域中可以定义各种表单元素，这些表单元素就是允许用户在表单中输入或者选择的内容，接下来我们讲解：

#### 1.0 input输入表单元素

<input>表单元素

| 属性值   | 定义                                                         |
| -------- | ------------------------------------------------------------ |
| button   | 定义可点击按钮（多数情况下，用于通过JavaScript启动脚本）。   |
| checkbox | 定义复选框。                                                 |
| file     | 定义输入字段和浏览按钮，供文件上传（上传本地文件）           |
| hidden   | 定义隐藏的输入字段                                           |
| image    | 定义图像形式的提交按钮                                       |
| password | 定义密码字段。该字段中字符将被掩码。                         |
| radio    | 定义单选按钮                                                 |
| reset    | 定义重置按钮，重置按钮会清楚表单中所有数据。                 |
| submit   | 定义提交按钮，提交按钮会把表单数据发送到服务器。             |
| text     | 定义单行输入字段，用户可在其中输入文本，默认宽度为20个字符。 |



| 属性      | 属性值     |                                       |
| --------- | ---------- | ------------------------------------- |
| name      | 由用户定义 | 定义input元素的名称                   |
| value     | 由用户定义 | 规定input 元素的值                    |
| checked   | checked    | 规定此input元素在首次加载中应当被选上 |
| maxlength | 正整数     | 规定输入字段中的字符的最大长度        |

1.0 name和value是每个表单元素都要有的属性值，主要给后台人员用。

2.0 name表单元素的名字，要求单选按钮和复选框要有相同的name值

3.0 checked主要针对于单选按钮和复选框，主要一打开页面，就会默认选中某个表单元素

4.0 maxlength 是用户可以在表单元素中输入的最大字符数，一般较少使用。



<input>标签用于收集用户信息。

在<input>标签中，包含一个type 属性，根据不同的type属性值，输入字段拥有很多种形式（可以是文本字段，复选框，掩码后的文本控件，单选按钮，按钮等）。



```
<form>
 用户名<input type="text"> <br/>
         用户名<input type="text" name=”username value="请输入用户名"> <br/>
          密码<input type="password"><br/>
          性别：男<input type="radio" name="name1 value="男"> 女 <input type="radio" name="name1" value="女"> 人妖 <input type="radio" name="name1" value="人妖"><br/>
          // 有相同的name才能够实现只能单选
          爱好; 吃饭<input type="checkbox" name="nnn" > 睡觉<input type="checkbox" name="nnn"><br/>
</form>
```

#### 2.0 <lable>标签

<lable>标签为input元素定义标注（标签）

<lable>标签用于绑定一个表单元素，当点击<lable>标签内的文本时，浏览器就会自动将焦点（光标）转到或者选择对应表单元素上，用来增强用户体验。

语法

```
<lable for="sex">男</lable>
<input type="radio" name="sex" id="sex" />
```

核心： <lable>标签的for属性应当与相关元素的id属性相同。

#### 3.0 select下拉表单元素

selected="selected"为定义默认选项。

```html
<select>
    <option selected="selected">江西</option>
    <option>鹰潭</option>
    <option>各种</option>
    <option>覅发</option>
</select>
```

#### 4.0< textarea>

```html
 <textarea >
     反馈留言是用textarea做的
  </textarea>
```



