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
let msg = "%c 💚 Our site is very new. Let us know if you find any issues 💚";
let styles = [
    "font-size: 12px",
    "color: #fffce1",
    "font-family: monospace",
    "background: #0e100f",
    "display: inline-block",
    "padding: 1rem 3rem",
    "border: 1px solid #fffce1",
    "border-radius: 4px;",
].join(";");
console.log(msg, styles);
