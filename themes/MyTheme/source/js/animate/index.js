const articleList = gsap.to(".indexContentArticleBox", {
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

if (window.screen.width <= 950) {
    // 获取ul元素作为触发元素
    const ulElement = document.querySelector(".indexContentHeaderDown > ul");

    // 获取所有的li元素
    const liElements = document.querySelectorAll(".indexContentHeaderDown > ul > li");

    // 创建时间轴
    const timeline = gsap.timeline();

    // 遍历所有li元素并添加到时间轴
    liElements.forEach((liElement, index) => {
        timeline.to(liElement, {
            opacity: 1,
            duration: 1,
        });
    });

    ScrollTrigger.create({
        trigger: ulElement, // 将ul元素作为触发元素
        start: "top 80%", // 调整触发位置
        end: "90% 80%", // 调整结束位置
        scrub: 1,
        stagger: 0.3, // 使用stagger参数来逐个触发动画
        animation: timeline,
        // markers: true,
    });
}
