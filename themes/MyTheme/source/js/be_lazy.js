document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll("img[data-src]");

    function lazyLoad() {
    lazyImages.forEach(function(img) {
        // 检查元素是否存在，并且在视口中，以及有 data-src 属性
        if (img && isElementInViewport(img) && img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            // console.log("Image loaded:", img.alt);
        }
    });
}

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        var inViewport =
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth);

        // console.log(el.alt + " in viewport:", inViewport);

        return inViewport;
    }

    // 初始加载
    lazyLoad();

    // 滚动时触发懒加载
    window.addEventListener("scroll", lazyLoad);
});
