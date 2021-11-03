window.addEventListener('load',function() {

    // 获取元素
    var input = document.querySelector('#text');
    var btn1 = document.querySelector('.btn1')
    var ul = document.querySelector('.Tag');
    var ul2 = document.querySelector('.ul2');
    var textarea = document.querySelector('#love');
    var btn = document.querySelector('button');
    var str=[];

    //1.Tag 功能
    var index = 0;
    //1. 1将输入框里面的内容输出 且输入空格，逗号，回车时，都自动把当前输入的内容作为一个tag放在输入框下面
    input.addEventListener('keyup',function(event) {

        str[index]= input.value;   
        event.preventDefault(); 
        if((str[index][str[index].length - 1] == ',' || str[index][str[index].length - 1] == ' ' || event.keyCode === 13) )
        {   
                // 控制输出的Tag不相等
                var flag = 1;
                for(var j = 0; j < ul.children.length; j++) {
                    if(str[index] == ul.children[j].innerHTML) {
                    flag = -1;
                    }
                }
                if(flag==1) {
                    //创建元素
                var li = document.createElement('li');
                //在后方添加元素
                ul.appendChild(li);
                //去除字符串的头尾空格:
                li.innerHTML = str[index].trim() ;
                index++;
                } 
                        
                // 输入数据超过10个 删除第1个
                if( index > 10 ){
                    ul.removeChild(ul.children[0]);
            }; 
        }           
  
        // 鼠标经过li出现删除功能
        li.addEventListener('mouseenter',function() {
                // 增加一个删除的链接
                li.innerHTML = input.value + "<a href='javascript:;'>点击删除</a>" ;
                li.style.backgroundColor = 'green';
                var as = document.querySelectorAll('a');
                for (var i = 0; i < as.length; i++) {
                    as[i].onclick = function() {
                        // node.removeChild(child); 删除的是 li 当前a所在的li  this.parentNode;
                        ul.removeChild(this.parentNode);
                    }
                }
        })  

        // 鼠标离开li恢复
        li.addEventListener('mouseleave',function() {
            li.innerHTML = input.value ;
            li.style.backgroundColor = 'pink';
        });
    })


    //2.爱好输入框

    var arr='';
    btn.addEventListener('click',function() {  

        //trim处理
        arr= textarea.value.trim();
        //以，作为分隔符
        var str2 = arr.split(',');  
        //文本框中相同内容删除只保留一个         
        for(var i = 0; i < str2.length; i++) {
            for(var j = i+1; j < str2.length;j++) {
                if(str2[i] == str2[j]) {
                    str2.splice(j,1);
                }
            }
        }
        // 有重复输出的删除
        for (var i = 0; i < str2.length;i++) {
            for(var j = 0; j < ul2.children.length; j++) {
                if(str2[i] == ul2.children[j].innerHTML) {
                    str2.splice(i,1);
                }
            }
        }
        // 将输出的内容显示
        for(var i = 0; i < str2.length; i++) {
            // 当数目超过10个时，删除第一个
            if(ul2.children.length > 10) {
                ul2.removeChild(ul2.children[0]);
            }
            var li = document.createElement('li');
                //在后方添加元素
                ul2.appendChild(li);
                //去除字符串的头尾空格:
                li.innerHTML = str2[i];
        }
            
    })
})