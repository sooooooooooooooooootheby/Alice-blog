let header = document.getElementById('header');

window.onmousewheel=document.onmousewheel=(e)=>{
    if(e.wheelDelta<0){
        header.style.borderBottom = '1px solid var(--footerborder)'
    }else if(e.wheelDelta>0){
        header.style.borderBottom = 'none';
    } 
}

window.onscroll = function() {
    // 获取滚动条的垂直偏移量
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    // 判断滚动条是否在顶部
    if (scrollTop === 0) {
        header.style.borderBottom = 'none';
    }
};