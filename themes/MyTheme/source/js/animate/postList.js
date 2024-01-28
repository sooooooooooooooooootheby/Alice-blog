if(document.getElementById("loading-page").style.display = "none") {
    // 获取文章列表作为触发元素
    const ulElement = document.querySelector(".indexContentArticleBox");
    // 获取所有的文章
    const liElements = document.querySelectorAll(".posts");
    // 创建时间轴
    const timeline = gsap.timeline();

    // 遍历所有li元素并添加到时间轴
    liElements.forEach((liElement, index) => {
        timeline.to(liElement, {
            opacity: 1,
            y: -100,
            duration: 1,
            ease: "back.inOut(4)",
        });
    });
    timeline.play();
}