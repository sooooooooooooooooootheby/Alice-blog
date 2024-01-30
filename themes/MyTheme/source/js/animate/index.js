if (window.outerWidth < 950) {
    // 获取ul元素作为触发元素
    const ulElement = document.querySelector(".homeTopSkill > ul");
    // 获取所有的li元素
    const liElements = document.querySelectorAll(".homeTopSkill > ul > li");
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
        end: "90% 60%", // 调整结束位置
        scrub: 1,
        stagger: 0.3, // 使用stagger参数来逐个触发动画
        animation: timeline,
        // markers: true,
    });
}