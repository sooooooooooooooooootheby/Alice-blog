// 假设你的 URL 数组为 urls
const urls = [
    "https://pic.yupoo.com/ririsukokoromu/fdbb06e8/c803a8a8.png",
    "https://pic.yupoo.com/ririsukokoromu/22eb42b3/65dad2b1.png",
    "https://pic.yupoo.com/ririsukokoromu/0e15b0ec/18303574.png",
    "https://pic.yupoo.com/ririsukokoromu/6cebf959/93f5d02b.png",
    "https://pic.yupoo.com/ririsukokoromu/6afa132a/90ff107a.png",
    "https://pic.yupoo.com/ririsukokoromu/b891a19f/1d6d453c.png",
    "https://pic.yupoo.com/ririsukokoromu/f986fbd7/e6d2dc88.gif",
    "https://pic.yupoo.com/ririsukokoromu/ce5b60bb/b2b54822.png",
    "https://pic.yupoo.com/ririsukokoromu/338b83ac/9d4828fa.png",
    "https://pic.yupoo.com/ririsukokoromu/c2eb7607/d2ca59b3.png",
    "https://pic.yupoo.com/ririsukokoromu/8e0a3842/40d09703.png",
    "https://pic.yupoo.com/ririsukokoromu/bfcf5a5d/a1b6b4c0.png",
    "https://pic.yupoo.com/ririsukokoromu/f643c9d8/8ed0f93a.png",
    "https://pic.yupoo.com/ririsukokoromu/4f09e71c/3017bd63.png",
    "https://pic.yupoo.com/ririsukokoromu/818dcf83/3db106a9.png",
    "https://pic.yupoo.com/ririsukokoromu/898dc196/b94eab52.png",
    "https://pic.yupoo.com/ririsukokoromu/42832627/2f0ffe00.gif",
    "https://pic.yupoo.com/ririsukokoromu/82022bdf/89fd23f5.png",
    "https://pic.yupoo.com/ririsukokoromu/1bfc7160/0a51a00a.gif",
    "https://pic.yupoo.com/ririsukokoromu/e49af635/b69ef179.png",
    "https://pic.yupoo.com/ririsukokoromu/a6cb757b/ba4b1c09.png",
    "https://pic.yupoo.com/ririsukokoromu/57185405/a1d858aa.png",
    "https://pic.yupoo.com/ririsukokoromu/4d46da35/27c67f24.png",
    "https://pic.yupoo.com/ririsukokoromu/21fde775/1aabfbaa.png"
];

// 随机选择一个 URL
function getRandomUrl() {
    const randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
}

// 随机替换主页的emoji
let randomUrl = getRandomUrl();
let randomEmoji = document.getElementById('randomEmoji');
randomEmoji.src = randomUrl;