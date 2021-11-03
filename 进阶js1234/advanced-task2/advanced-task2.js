window.addEventListener("load", function () {
  //获取元素
  var input = document.querySelector("input");
  var ul = document.querySelector("ul");
  var btn1 = document.querySelector(".btn1");
  var btn2 = document.querySelector(".btn2");
  var btn3 = document.querySelector(".btn3");
  var btn4 = document.querySelector(".btn4");
  var btn5 = document.querySelector(".btn5");
  var btn6 = document.querySelector(".btn6");
  //颜色随机
  var colors = [
    "#5634e2",
    "#5e5e5e",
    "#4a4b4c",
    "#5a4563",
    "#b38e95",
    "#aa324a",
    "#edae9e",
    "#c1b9c2",
    "#bec3cb",
    "#9ea7bb",
    "#99b4ce",
    "#d7f0f8",
  ];
  //设置属性的函数
  function renderChart() {}
  // 定义数组用于存放输入的值
  var arr = [];
  //左侧入
  btn1.addEventListener("click", function () {
    if (ul.children.length > 50) {
      alert("输入数据已经达到50个");
      return false;
    }
    if (input.value == "") {
      return false;
    } else {
      //创建元素
      var li = document.createElement("li");
      //在前方添加元素
      ul.insertBefore(li, ul.children[0]);
      li.innerHTML = input.value;
      li.style.height = input.value * 5 + "px";
      li.style.backgroundColor = colors[Math.floor(Math.random() * 11)];
      move();
      arr[arr.length] = input.value;
    }
  });
  // 右侧入
  btn2.addEventListener("click", function () {
    if (ul.children.length == 50) {
      alert("输入数据已经达到50个");
      return false;
    }
    if (input.value == "") {
      return false;
    } else {
      //创建元素
      var li = document.createElement("li");
      //在后方添加元素
      ul.appendChild(li);
      li.innerHTML = input.value;
      li.style.height = input.value * 5 + "px";
      li.style.backgroundColor = colors[Math.floor(Math.random() * 11)];
      arr[arr.length] = input.value;
      //调用点击li删除的函数
      move();
    }
  });
  // 3.左侧出
  btn3.addEventListener("click", function () {
    //删除最前面的
    ul.removeChild(ul.children[0]);
    alert(arr[0]);
    for (var i = 1; i < arr.length - 1; i++) {
      arr[i - 1] = arr[i];
    }
  });
  //4. 右侧出
  btn4.addEventListener("click", function () {
    // 删除最后面的
    alert(ul.children[ul.children.length - 1].innerHTML);
    ul.removeChild(ul.children[ul.children.length - 1]);
    arr[arr.length - 1] = "";
    arr.pop();
  });

  // 5.排序
  btn5.addEventListener("click", function () {
    //把字符串数组改为整形数组
    var brr = [];
    // var crr=[];
    arr.forEach(function (data, index, arr) {
      brr.push(+data);
      //  crr.push(+data);
    });

    // console.log(brr);
    // 利用冒泡排序排序
    for (var i = 0; i < brr.length - 1; i++) {
      for (var j = 0; j < brr.length - 1 - i; j++) {
        if (brr[j] > brr[j + 1]) {
          var temp = brr[j];
          brr[j] = brr[j + 1];
          brr[j + 1] = temp;
        }
      }
    }
    //将排好序的数显示
    for (let k = 0; k < brr.length; k++) {
      ul.children[k].innerHTML = brr[k];
      ul.children[k].style.height = brr[k] * 5 + "px";
    }
  });

  // 随机生成50个数
  btn6.addEventListener("click", function () {
    // 随机生成1到600的50个数的函数
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
    }

    //将生成的数显示出来
    for (var i = 0; i < 50; i++) {
      var num = getRandomIntInclusive(20, 50);
      arr.push(num);
      input.value = arr[i];
      btn1.click();
    }
  });

  //点击li删除的函数
  function move() {
    var li = document.querySelector("li");
    li.addEventListener("click", function () {
      alert(this.innerHTML);
    //   ul.removeChild(this);
    li.remove();
    });
  }
});
