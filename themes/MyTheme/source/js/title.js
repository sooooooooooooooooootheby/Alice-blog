var originTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '页面丢失 x_x  |' + originTitle;
        if (titleTime != null) {
            clearTimeout(titleTime);
        }
    } else {
        document.title = '～(∠・ω< )⌒ 骗你的～  |' + originTitle;
        titleTime = setTimeout(function () {
            document.title = originTitle;
        }, 2000);
    }
});