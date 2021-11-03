// 放大镜效果
window.addEventListener('load',function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    //当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mousemove', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    //鼠标移动的时候，让黄色的盒子跟着鼠标走
    preview_img.addEventListener('mousemove',function(e) {
        //(1).先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // （2）减去盒子高度的一半 150 就是我们mask的最终 left 和 top值了
        // (3) 我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // 如果x 的坐标小于了0，则让他停在0的位置
        // 遮挡层的最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;//大盒子的宽度 - 图片的宽度
        if(maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if(maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax){
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3.大图的移动距离 = 遮挡层移动距离 * 大图片最大移动距离  / 遮挡层的最大移动距离
        //大图
        var bigIMG = document.querySelector('.bigImg');
        //大图最大移动距离
        var bigMax = bigIMG.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 x y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMG.style.left = -bigX + 'px';
        bigIMG.style.top = -bigY + 'px';
    })
})