// 取消默认的浏览器自带右键
window.oncontextmenu = function (e) {
    e.preventDefault();
};

const rightmousebutton = document.getElementById("rightmousebutton");
const mouseEnvelop = document.getElementById("mouseEnvelop");
const projector = document.getElementById("projector");
const body = document.body;

window.onmousedown = function (e) {
    if (e.button == 2) {
        mouseEnvelop.style.display = "block";
        body.style.cursor = 'none';
    }
};
rightmousebutton.onmousedown = function (e) {
    if (e.button == 0 || e.button == 2) {
        mouseEnvelop.style.display = "none";
        body.style.cursor = "url('../img/1.cur'), auto";
    }
};

document.onmousemove = function (event) {
    let left = event.clientX;
    let top = event.clientY;
    projector.style.left = left - 100 + "px";
    projector.style.top = top - 100 + "px";
    projector.style.backgroundPosition = "-" + left + "px " + "-" + top + "px";
};
