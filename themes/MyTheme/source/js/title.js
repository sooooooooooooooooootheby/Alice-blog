var originTitle = document.title;
var titleTime;
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "页面丢失 x_x  |" + originTitle;
        if (titleTime != null) {
            clearTimeout(titleTime);
        }
    } else {
        document.title = "～(∠・ω< )⌒ 骗你的～  |" + originTitle;
        titleTime = setTimeout(function () {
            document.title = originTitle;
        }, 2000);
    }
});
let msg = "%c💚 今天你想看些什么呢 💚";
let styles = [
    "font-size: 12px",
    "color: aliceblue",
    "font-family: PingFang",
    "font-width: bold",
    "background: #16A085",
    "display: inline-block",
    "padding: 1rem 3rem",
    "border: 1px solid #fffce1",
    "border-radius: 4px;",
].join(";");
console.log(msg, styles);
console.log(
    "%c",
    "padding: 300px; background: url(https://pic.imgdb.cn/item/658e9da0c458853aef0cfbde.gif) no-repeat;"
);
