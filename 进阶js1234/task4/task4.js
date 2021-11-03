window.onload=function() {
    //获取城市和粒度
var city = document.querySelector("#city-select");
var radios = document.getElementsByName("gra-time");
// console.log(radios[0].value);
// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear(); //获取完整的年份(4位)
  var m = dat.getMonth() + 1; //获取当前月份(0-11,0代表1月)
  m = m < 10 ? "0" + m : m;
  var d = dat.getDate(); //获取当前日(1-31)
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = "";
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed); //随机生成1个大于等于0小于seed的数
    dat.setDate(dat.getDate() + 1); //日期加1天
  }
  return returnData;
}

var aqiSourceData = {
  北京: randomBuildData(500),
  上海: randomBuildData(300),
  广州: randomBuildData(200),
  深圳: randomBuildData(100),
  成都: randomBuildData(300),
  西安: randomBuildData(500),
  福州: randomBuildData(100),
  厦门: randomBuildData(100),
  沈阳: randomBuildData(500),
};

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

// 选择星期
function week() {
  clear();
  var newCity = document.getElementById("city-select").value; //每次都要获取城市名
  var chartData = []; //用来储存数据
  var count = 0; //统计天数
  var total = 0; //统计总数
  var week = 0;
  var date, weekDay;
  for (var k in aqiSourceData[newCity]) {
    date = new Date(k); //创建的新对象自动获取当前的日期和时间
    weekDay = date.getDay(); //返回日期中星期的星期几（其中0表示星期日，6表示星期六）
    if (weekDay == 6) {
      count++;
      total += aqiSourceData[newCity][k];
      chartData[week] = Math.round(total / count); //求平均数
      count = 0;
      total = 0;
      week++;
    } else {
      count++;
      total += aqiSourceData[newCity][k];
    }
  }
  return chartData;
}
//选择月
function month() {
  clear();
  var newCity = document.getElementById("city-select").value;
  chartData = [];
  var count = 0, //统计天数
    total = 0, //统计总数
    month = -1;
  var date;
  for (var k in aqiSourceData[newCity]) {
    date = new Date(k);
    if (month == -1) {
      month = date.getMonth() + 1; //返回日期中的月份，其中0表示一月，11表示十二月
    } else if (date.getMonth() + 1 != month) {
      //当加入下一个月，计算上一个月的平均数
      chartData[month - 1] = Math.round(total / count); //计算上一个月的平均数
      month = date.getMonth() + 1;
      count = 0;
      total = 0;
    }
    count++;
    total += aqiSourceData[newCity][k];
  }
  chartData[month - 1] = Math.round(total / count); //这一个是为了计算最后不足一个月天数的平均数
  return chartData;
}
//发生改变时清空内容
function clear() {
  var bottomDiv = document.querySelectorAll("bottomDiv");
  if (bottomDiv.length > 0) {
    for (var i = 0; i < bottomDiv.length; i++) {
      bottomDiv[i].remove();
    }
  }
}
// 当城市内容发生变化
function cityChange() {
  clear();
  var newCity = document.getElementById("city-select").value;
  var chartData = [];
  for (var k in aqiSourceData[newCity]) {
    chartData[chartData.length] = aqiSourceData[newCity][k];
  }
  return chartData;
}
// 调用图表渲染函数
function renderChart(chartData) {
  for (var i = 0; i < chartData.length; i++) {
    var div = document.querySelector(".aqi-chart-wrap");
    var bottomDiv = document.createElement("bottomDiv");
    bottomDiv.style.height = chartData[i] + "px";
    bottomDiv.style.width = 1350 / chartData.length + "px";
    bottomDiv.style.backgroundColor = colors[Math.floor(Math.random() * 11)];
    div.appendChild(bottomDiv);
  }
}
//设置当前的图表内容
var newCity = "北京";
var chartData = [];
for (var k in aqiSourceData.北京) {
  chartData[chartData.length] = aqiSourceData.北京[k];
}
renderChart(chartData);
//tu
city.addEventListener("change", function () {
  //城市发生改变，先判断粒度
  var value = "";
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked == true) {
      value = radios[i].value;
    }
    if (value === "day") {
      clear();
      renderChart(cityChange());
    } else if (value === "week") {
      clear();
      renderChart(week());
    } else if (value === "month") {
      clear();
      renderChart(month());
    }
  }
});
//当粒度发生改变
radios[0].addEventListener("click", function () {
  renderChart(cityChange()); //粒度为天，直接调用城市改变
});
radios[1].addEventListener("click", function () {
  renderChart(week());
});
radios[2].addEventListener("click", function () {
  renderChart(month());
});
}

