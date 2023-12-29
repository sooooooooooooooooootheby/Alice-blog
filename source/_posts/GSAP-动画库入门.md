---
abbrlink: ''
categories:
- - 前端
cover: https://pic.imgdb.cn/item/658e8b26c458853aefd3ad91.jpg
date: '2023-12-28T17:07:41.057842+08:00'
tags:
- GSAP
- 动画库
title: GSAP-动画库入门
updated: '2023-12-29T17:04:16.232+08:00'
---
# 安装

```
# 通过pnpm安装
pnpm install gsap

# 通过CDN安装
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>

# 通过yarn安装
yarn add gsap
```

# 开始使用

## tween

##### gsap.to

先写一个简单的div设置class为box

在 `<script>`标签内添加一个 `tween`

```javascript
gsap.to(".box", {
            x: 200,
        });
```

这样box就会向右移动200px，这里的x控制水平移动，同理y可以控制垂直移动

当x的值为'+'时向右移动，为'-'时向左移动，y的值为'+'时向下移动，为'-'时向上移动（有一说一我觉得很变扭，为什么不是极坐标系那样）

##### gsap.from

from和to的区别，可以简单理解为二者相反

'to'会从元素当前状态过渡到 `tween`

'from'会从 `tween`过渡到元素的状态

```javascript
gsap.from(".box", {
            x: 200,
        });
```

##### gsap.fromTo

fromTo则是需要指定动画的初始位置和终止位置

```javascript
gsap.fromTo(".box", {
            x: 50,
        },{
            x: 200,
        });
```

##### gsap.set

set是一个立刻属性，意思是没有过渡动画（这意义何在）

```javascript
gsap.set(".box", {
            x: 200,
        })
```

## target

GSAP选择元素的方式有多种，除了上面使用的class选择还可以使用id选择

```javascript
gsap.to("#box4", {
            x: 200,
        })
```

特殊选择器

```javascript
gsap.to("section > .box5", {
            x: 200,
        });
```

因为是javascript语法所以还可以通过 `document.querySelecto `使用变量选择元素

```javascript
#单个元素
let box = document.querySelector(".box6");
gsap.to(box, {
            x: 200,u
        });
#多个元素
let box1 = document.querySelector(".box7");
let box2 = document.querySelector(".box8");
gsap.to([box1,box2], {
            x: 200,
        });
```
