document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        var scrollTop = window.scrollY;
        var viewportWidth = window.innerWidth;

        let toc = document.getElementById("post-Toc");

        if (viewportWidth > 950) {
            if (scrollTop >= 400) {
                toc.style.position = "fixed";
                toc.style.top = "70px";
            } else {
                toc.style.position = "fixed";
                toc.style.top = "400px";
            }
        }
    };
});
