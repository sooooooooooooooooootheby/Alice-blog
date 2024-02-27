// 导航栏的按钮操作逻辑,通过切换类名达到

// 平板端
const padMenuSwitch = document.getElementById('padMenuSwitch');
const control = document.getElementById('control');

padMenuSwitch.addEventListener('change', (event) => {
    if (padMenuSwitch.checked) {
        this.control.classList.remove('hideControl');
        this.control.classList.add('showControl');
    } else {
        this.control.classList.add('hideControl');
        this.control.classList.remove('showControl');
    }
});

// 手机端
const phoneMenuSwitch = document.getElementById('phoneMenuSwitch');
const menu = document.getElementById('menu');

phoneMenuSwitch.addEventListener('change', (event) => {
    if (phoneMenuSwitch.checked) {
        this.menu.classList.remove('hidemenu');
        this.menu.classList.add('showmenu');
    } else {
        this.menu.classList.add('hidemenu');
        this.menu.classList.remove('showmenu');
    }
});