// 文章页的按钮操作逻辑
document.addEventListener("DOMContentLoaded", function () {
    const listSw = document.getElementById("postListSwitch");
    const postList = document.getElementById("postList");
    const list = document.getElementById("list");

    // 文章列表开关
    listSw.onclick = function () {
        postList.classList.add("showPostList");
        list.classList.add("showList");
    };
    postList.onclick = function (event) {
        postList.classList.remove("showPostList");
        list.classList.remove("showList");
    };

    // 目录开关
    // 需要根据导航栏是否隐藏判断目录位置
    const tocSw = document.getElementById("postTocSwitch");
    tocSw.addEventListener("click", (event) => {
        const tocIcon = document.getElementById("tocIcon");
        const toc = document.getElementById("toc");
        // 点击目录开关时
        let scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        // 判断开关状态
        if (tocSw.checked) {
            tocIcon.style.rotate = "90deg";
            // 如果滚动高度为0
            if (scrollHeight == 0) {
                toc.classList.add("showToc");
            } else {
                toc.classList.add("showTopToc");
            }
        } else {
            tocIcon.style.rotate = "0deg";
            toc.classList.remove("showToc");
            toc.classList.remove("showTopToc");
        }
    });

    // 小鹿一键回到顶部
    const jiexika = document.getElementById('jiexika');
    const post = document.getElementById("post");
    // 社恐模式开关
    let showSwitch = false;
    const soundSwitch = document.getElementById("soundSwitch");
    soundSwitch.addEventListener('change', (event) => {
        if (soundSwitch.checked) {
            showSwitch = false;
            return showSwitch;
        } else {
            showSwitch = true;
            return showSwitch;
        }
    });
    // 判断是否处于出现状态
    let shouldExecuteElse = true;
    // 小鹿语音
    const jiexikaAudio1 = new Audio('https://audio-1315833212.cos.ap-shanghai.myqcloud.com/say-hello.mp3');
    // const jiexikaAudio2 = new Audio('https://audio-1315833212.cos.ap-shanghai.myqcloud.com/Be-serious-Stay-focused.mp3');
    post.addEventListener("scroll", (event) => {
        if (post.scrollTop == 0 && shouldExecuteElse == false) {
            jiexika.classList.remove('showjiexika');
            if (showSwitch) {
                jiexikaAudio1.play();
            }
            shouldExecuteElse = true;
        } else if (post.scrollTop != 0 && shouldExecuteElse == true){
            jiexika.classList.add('showjiexika');
            if (showSwitch) {
                jiexikaAudio1.play();
            }
            shouldExecuteElse = false;
        } else {
            return;
        }
    });
    jiexika.addEventListener("click", (event) => {
        let scrollHeight = post.scrollTop;
        if (scrollHeight != 0) {
            post.scrollTop = 0;
        }
    });
});