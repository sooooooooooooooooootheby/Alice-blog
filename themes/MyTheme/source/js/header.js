let header = document.getElementById('header');
window.onmousewheel=document.onmousewheel=(e)=>{
    if(e.wheelDelta<0){
        header.style.opacity = 0;
    }else if(e.wheelDelta>0){
        header.style.opacity = 1;
    } 
}