

# 排他思想

如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他算法：

1.所有元素清除样式（干掉其他人）

2.给当前元素设置样式（留下我自己）

3.注意顺序不能颠倒，首先干掉其他人，再设置自己

```
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
  <script>

    var btns = document.getElementsByTagName('button');
    for(var i = 0; i < btns.length; i++) {
       btns[i].onclick = function() {
         //所有元素清除样式
         for (var i = 0; i < btns.length; i++) {
           btns[i].style.backgroundColor = '';
         }
         //让荡秋千元素背景颜色换掉
         this.style.backgroundColor = 'pink';
       }
    }
  </script>
```

## 百度换肤效果

```
<style>
   * {
     margin: 0;
     padding: 0;
   }
   body {
     background: url(images/1.jpg) no-repeat center top;
   }
   li {
     list-style: none;
   }
   .baidu {
     overflow: hidden;
     margin: 100px auto;
     background-color: #fff;
     width:410px;
     padding-top: 3px;
   }
   li {
     margin: 0 1px;
     cursor: pointer;
     float: left;
   }
    .baidu img{
        width: 100px;
    }
 </style>
</head>
<body>
     
    <ul class="baidu">
      <li><img src="images/1.jpg" alt=""></li>
      <li><img src="images/2.jpg" alt=""></li>
      <li><img src="images/3.jpg" alt=""></li>
      <li><img src="images/4.jpg" alt=""></li>
    </ul>
 <script>
   var imgs =document.querySelector('.baidu').querySelectorAll('img');
   for(var i = 0; i < imgs.length; i++) {
     imgs[i].onclick =function() {
     // this.src 就是我们点击图片的路径 
     // 把这个路径 this.src 给body 就可以了
     document.body.style.backgroundImage = 'url(' + this.src + ')';
     }
   }
 </script>

```

## 表格隔行换色

```
<style>
      table {
          width: 800px;
          margin: 100px auto;
          text-align: center;
          border-collapse: collapse;
          font-size: 14px;
      }
      
      thead tr {
          height: 30px;
          background-color: skyblue;
      }
      
      tbody tr {
          height: 30px;
      }
      
      tbody td {
          border-bottom: 1px solid #d7d7d7;
          font-size: 12px;
          color: blue;
      }
      
      .bg {
          background-color: pink;
      }
  </style>
</head>
<body>
  <table>
      <thead>
          <tr>
              <th>代码</th>
              <th>名称</th>
              <th>最新公布净值</th>
              <th>累计净值</th>
              <th>前单位净值</th>
              <th>净值增长率</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>003526</td>
              <td>农银金穗3个月定期开放债券</td>
              <td>1.075</td>
              <td>1.079</td>
              <td>1.074</td>
              <td>+0.047%</td>
          </tr>
          <tr>
              <td>003526</td>
              <td>农银金穗3个月定期开放债券</td>
              <td>1.075</td>
              <td>1.079</td>
              <td>1.074</td>
              <td>+0.047%</td>
          </tr>
          <tr>
              <td>003526</td>
              <td>农银金穗3个月定期开放债券</td>
              <td>1.075</td>
              <td>1.079</td>
              <td>1.074</td>
              <td>+0.047%</td>
          </tr>
          <tr>
              <td>003526</td>
              <td>农银金穗3个月定期开放债券</td>
              <td>1.075</td>
              <td>1.079</td>
              <td>1.074</td>
              <td>+0.047%</td>
          </tr>
          <tr>
              <td>003526</td>
              <td>农银金穗3个月定期开放债券</td>
              <td>1.075</td>
              <td>1.079</td>
              <td>1.074</td>
              <td>+0.047%</td>
          </tr>
          <tr>
              <td>003526</td>
              <td>农银金穗3个月定期开放债券</td>
              <td>1.075</td>
              <td>1.079</td>
              <td>1.074</td>
              <td>+0.047%</td>
          </tr>
      </tbody>
  </table>
 <script>
  var tr = document.querySelector('tbody').querySelectorAll('tr');
  //利用循环绑定注册事件
  for(var i = 0; i < tr.length; i++) {
    tr[i].onmouseover = function() {
      this.className = 'bg';
    }
    tr[i].onmouseout = function() {
      this.className = '';
    }
  }
```

## 全选和取消全选

<style>
      * {
          padding: 0;
          margin: 0;
      }

      .wrap {
          width: 300px;
          margin: 100px auto 0;
      }
      
      table {
          border-collapse: collapse;
          border-spacing: 0;
          border: 1px solid #c0c0c0;
          width: 300px;
      }
      
      th,
      td {
          border: 1px solid #d0d0d0;
          color: #404060;
          padding: 10px;
      }
      
      th {
          background-color: #09c;
          font: bold 16px "微软雅黑";
          color: #fff;
      }
      
      td {
          font: 14px "微软雅黑";
      }
      
      tbody tr {
          background-color: #f0f0f0;
      }
      
      tbody tr:hover {
          cursor: pointer;
          background-color: #fafafa;
      }
  </style>

</head>

<body>

  <div class="wrap">
      <table>
          <thead>
              <tr>
                  <th>
                      <input type="checkbox" id="j_cbAll" />
                  </th>
                  <th>商品</th>
                  <th>价钱</th>
              </tr>
          </thead>
          <tbody id="j_tb">
              <tr>
                  <td>
                      <input type="checkbox" />
                  </td>
                  <td>iPhone8</td>
                  <td>8000</td>
              </tr>
              <tr>
                  <td>
                      <input type="checkbox" />
                  </td>
                  <td>iPad Pro</td>
                  <td>5000</td>
              </tr>
              <tr>
                  <td>
                      <input type="checkbox" />
                  </td>
                  <td>iPad Air</td>
                  <td>2000</td>
              </tr>
              <tr>
                  <td>
                      <input type="checkbox" />
                  </td>
                  <td>Apple Watch</td>
                  <td>2000</td>
              </tr>

          </tbody>
      </table>
  </div>
 <script>
      // 1.全选和取消全选： 让下面所有的复选框的checked属性(选中状态) 跟随全选框即可
      //获取元素
      var j_cbAll = document.getElementById('j_cbAll');
      var j_tb = document.getElementById('j_tb').getElementsByTagName('input');
      j_cbAll.onclick = function() {
        this.checked;
        for(var i = 0; i < j_tb.length; i++) {
          j_tb[i].checked = this.checked;
        }
      }
      for (var i = 0; i < j_tb.length; i++) {
        j_tb[i].onclick = function() {
          var flag = true;
          for (var i = 0 ; i < j_tb.length; i++) {
            if(!j_tb[i].checked) {
              flag = flase;
              break;
            }
          }
          j_cbAll.checked = flag;
        }
      }
 </script>

# 自定义属性的操作

## 获取属性值

1. element.属性 获取属性值

2. element.getAttribute ('属性')；

   

   区别：

   element.属性 获取内置属性值（元素本身自带的属性）

   element.getAttribute('属性')；主要获得自定义的属性（标准）我们程序员自定义的属性

   

   

## 设置属性值

element.属性 = '值'   设置内置属性值

element.setAttribute('属性'，'值')；

## tab栏切换值

核心思路：给上面的tab_list里面的所有小li添加自定义属性，属性值从0开始编号

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        .tab {
            width: 978px;
            margin: 100px auto;
        }
        
        .tab_list {
            height: 39px;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }
        
        .tab_list li {
            float: left;
            height: 39px;
            line-height: 39px;
            padding: 0 20px;
            text-align: center;
            cursor: pointer;
        }
        
        .tab_list .current {
            background-color: #c81623;
            color: #fff;
        }
        
        .item_info {
            padding: 20px 0 0 20px;
        }
        
        .item {
            display: none;
        }
    </style>
</head>

<body>
    <div class="tab">
        <div class="tab_list">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价（50000）</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tab_con">
            <div class="item" style="display: block;">
                商品介绍模块内容
            </div>
            <div class="item">
                规格与包装模块内容
            </div>
            <div class="item">
                售后保障模块内容
            </div>
            <div class="item">
                商品评价（50000）模块内容
            </div>
            <div class="item">
                手机社区模块内容
            </div>

        </div>
    </div>
    <script>
        // 获取元素
        var tab_list = document.querySelector('.tab_list');
        var lis = tab_list.querySelectorAll('li');
        var items = document.querySelectorAll('.item');
        // for循环绑定点击事件
        for (var i = 0; i < lis.length; i++) {
            // 开始给5个小li 设置索引号 
            lis[i].setAttribute('index', i);
            lis[i].onclick = function() {
                // 1. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式

                // 干掉所有人 其余的li清除 class 这个类
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = '';
                }
                // 留下我自己 
                this.className = 'current';
                // 2. 下面的显示内容模块
                var index = this.getAttribute('index');
                console.log(index);
                // 干掉所有人 让其余的item 这些div 隐藏
                for (var i = 0; i < items.length; i++) {
                    items[i].style.display = 'none';
                }
                // 留下我自己 让对应的item 显示出来
                items[index].style.display = 'block';
            }
        }
    </script>
</body>

</html>
```

# H5自定义属性

自定义属性目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。

自定义属性获取是通过getAttribute（‘属性’）获取。

但是有些自定义属性很容易引用歧义，不容易判断是元素的内置属性还是自定义属性。

H5给我们新增了自定义属性：

## 1.设置H5自定义属性

H5规定自定义属性data-开头作为属性名并且赋值。

比如 <div data-index = "1" ></div>

或者使用js设置

element.setAttribute( 'data-index'  , 2)

```html
<body>
    <div getTime="20" data-index="2" data-list-name="andy"></div>    
 <script>
     var div = document.querySelector('div');
     console.log(div.getAttribute('getTime'));
     console.log(div.getAttribute('data-index')); 
     //如果自定义属性里面有多个-链接的单词，我们获取的时候采取 驼峰命名法
     console.log(div.getAttribute('listName'));    

     //H5新增的获取自定义属性的方法，它只能后去data开头的
    // dataset 是一个集合里面存放了所有以data开头的自定义的属性
     console.log(div.dataset);
     console.log(div.dataset.index);
     console.log(div.dataset['index']);
     console.log(div.dataset.listName);
 </script>
  
```

# 节点操作

data:image/png;base64,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

## 父级节点

```
node.parentNode
```

1.parentNode 属性可返回某节点的父节点，注意是最近的一个节点

2.如果指定的节点没有父节点则返回null

## 子节点

```
parentNode.children(非标准)
```

parentNode.children 是一个只读属性，返回所有的子元素节点。

firstChild获取第一个孩子，找不到则返回null，同样，也是包含所有的节点。他只返回子元素节点，其余节点不返回

```
parentNode.firstChild
```

最后一个孩子

```
parentNode.lastChild
```



新方法

```
parentNode.firstElementChild
```

```
parentNode.lastElementChild
```

有兼容性问题，ie9以上才支持



//实际开发的写法 既没有兼容性问题又返回第一个数组

```
console.log(ol.children[0]);
```

## 兄弟节点

```
nextSibling 下一个兄弟节点 包含元素节点或者 文本节点
previousSibling 上一个兄弟节点
```



```
nextElementSibling 得到下一个兄弟节点
previousElementSibling 上一个
```

有兼容性问题

## 创建和添加节点

```html
<body>
   <ul>
       <li>123</li>
   </ul>  
 <script>
     // 1. 创建节点元素节点
     var li = document.createElement('li');
     // 2.添加节点 node.appendChild(child)  node 父级 child 子级
     var ul = document.querySelector('ul');
     ul.appendChild(li);

     // 3. 在指定位置添加节点 node.insertBefore(child, 指定元素)；
     var lili = document.createElement('li');
     ul.insertBefore(lili,ul.children[0]); //在children[0]前方添加lili
 </script>
  
```

### 简单版发布留言案例

```html
<body>
   <textarea name="" id="" ></textarea>
   <button></button>
   <ul></ul>
 <script>
    var button = document.querySelector('button');
    var text = document.querySelector('textarea');
    var ul = document.querySelector('ul');
    button.onclick = function() {
       
        if (text.value==''){
            alert('jjdjjd');
        }
        else {
            var li = document.createElement('li');
            li.innerHTML = text.value;
            ul.insertBefore(li,ul.children[0]);
        }
    }
 </script>
  
```

## 删除节点

```html
node.removeChild(child)
```

node.removeChild()方法从DOM中删除一个子节点，返回删除的节点。

## 复制节点

```
node.cloneNode()
```

node.cloneNode() 方法返回调用该方法的节点的一个副本，也称为克隆节点/拷贝节点

```html
<body>
   <ul>
     <li>1</li>
     <li>2</li>
     <li>3</li></ul>
 <script>
   var ul = document.querySelector('ul');
   //1. node.cloneNode();括号或者里面是flase 为浅拷贝 只复制节点本身，不克隆里面的子节点
   // 2. node.cloneNode(ture); 括号为ture 为深拷贝 会复制节点的本身以及里面所有的子节点本身以及里面所有的子节点
   var lili = ul.children[0].cloneNode(true);
   ul.appendChild(lili);
 </script>
  
```

## 案例：动态生成表格

````html
 <style>
      table {
        width: 500px;
        margin: 100px auto;
        border-collapse:collapse;
        text-align: center;
      }
      td,th {
        border: 1px solid #333;
      }
      thead tr {
        height: 40px;
        background-color: #ccc;
      }
    </style>
</head>
<body>
  <!-- cellspacing="0" -->
   <table >
    <thead>
      <tr>
        <th>姓名</th>
        <th>科目</th>
        <th>成绩</th>
        <th>操作</th>
      </tr>
      <tbody>

      </tbody>
    </thead>
   </table>
 <script>
   // 1.先去准备好学生的数据
        var datas = [{
            name: '魏璎珞',
            subject: 'JavaScript',
            score: 100
        }, {
            name: '弘历',
            subject: 'JavaScript',
            score: 98
        }, {
            name: '傅恒',
            subject: 'JavaScript',
            score: 99
        }, {
            name: '明玉',
            subject: 'JavaScript',
            score: 88
        }];
    //往tbody里面创建行
    var tbody = document.querySelector('tbody');
    for(var i = 0; i < datas.length; i++) {
      var tr = document.createElement('tr');
      tbody.appendChild(tr);
      for(var k in datas[i]) {
        //里面的for循环管列 td 单元格的数量取决于每个对象里面的属性个数 for循环遍历对象
        //创建单元格
        var td = document.createElement('td');
        td.innerHTML = datas[i][k];
        tr.appendChild(td);
      }
        // 创建有删除两个字的单元格
        var td = document.createElement('td');
        td.innerHTML = '<a href="javascript:;">删除</a>';
        tr.appendChild(td);
    }
    // for(var k in obj) {
    //   // k 得到的是属性名
    //   // obj[k] 得到是属性值
    // }
    
    //删除操作
    var as = document.querySelectorAll('a');
    for(var i = 0; i < as.length; i++) {
      as[i].onclick = function() {
        //点击a 删除 当前啊所在的行（链接的爸爸的爸爸) node.removeChild(child)
        tbody.removeChild(this.parentNode.parentNode);  
      }
    }
 </script>
````

## 三种动态创建元素的区别

1.document.write( )

2.element,innerHTML

3.document.creatElement

区别

1.document.write 是将内容写入页面的内容流，但是文档执行完毕，则会导致页面全部重绘

2.innerHTML是将内容写入某个DOM节点，不会导致页面全部重绘

3.innerHTML创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂

4.createElement（）创建多个元素效率稍低一点点，但结构清晰

# DOM 重点核心

主要为创建，删，改，查，属性操作，事件操作

## 1.创建 

1.document.write( )

2.element,innerHTML

3.document.creatElement

## 增

1.appendChild 后面

2.insertBefore 前面



## 删

1.removeChild

## 改

主要修改dom的元素属性，dom元素的内容，属性，表单的值等

1.修改元素属性：src ， href ，title等

2.修改普通元素内容： innerHTML，innerText

3.修改表单元素： value ，type，disable等

4.修改元素样式： style ，className

## 查

老方法： getElementByld， getElementByTagName

新方法： querySelector ， querySelectorAll

3.利用节点操作来获取元素： 父(parentNode),子（children），兄(previousElementSibling,nextElementSibling)

## 属性操作

主要针对自定义属性。

1.setAttribute:设置dom的属性值

2.getAttribute：得到dom的属性值

3.removeAttribute： 移除属性

