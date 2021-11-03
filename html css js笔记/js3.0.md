# 构造函数

注意：

1.构造函数名字首字母要大写

2.我们构造函数不需要return 就可以返回结果

3.我们调用构造函数必须使用new

我们只要new Star() 调用函数就创建一个对象

5.我们的属性和方法前必须要用this

```
  <script>
        //创建函数
        function Star(uname, age, sex) {
            this.name = uname;
            this.age = age;
            this.sex = sex;
            
            this.sing = function(sang) {
                console.log(sang);
            }
        }
        var ldh = new Star('刘德华',18,'男'); // 调用返回的是一个对象
        console.log(ldh.age);
        ldh.sing('并于');
    </script>
```



# 遍历对象

```
 <script>
        var obj = {
            name: 'pink',
            age: '18',
            sex:'男',
            fn: function() {}
        }
        for (var k in obj) {
            console.log(k); // k 变量 输出 得到的是 属性名
            console.log(obj[k]); // obj[k] 得到的是属性值
        }
    </script>
```

