const articleList = gsap.to(".indexContentArticleBox",{
    opacity: 1,
    y: -100,
    duration: 1,
});

ScrollTrigger.create({
    trigger: ".indexContentArticle", // 触发元素
    start: "top 90%", // 触发位置
    end: "bottom 95%",
    scrub: 1,
    animation: articleList, // 要触发的动画
    // markers: true // 显示调试标记，可以在调试时使用
});