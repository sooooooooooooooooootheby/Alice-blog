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
updated: '2023-12-29T17:09:06.812+08:00'
---
# 安装

```shell && html
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

## 变量

简写

GSAP将原有的css写法转换成了GSAP的简写写法

|             GSAP             |                 CSS                 |              作用              |
| :---------------------------: | :---------------------------------: | :----------------------------: |
|             x:100             |          translateX(100px)          |         向右移动100px         |
|            y: 100            |          translateY(100px)          |         向下移动100px         |
|         xPercent: 50         |           translateX(50%)           |          向右移动50%          |
|         yPercent: 50         |           translateY(50%)           |          向下移动50%          |
|           scale: 2           |              scale(2)              |            逐渐变大            |
|           scaleX: 2           |              scaleX(2)              |          水平方向增长          |
|           scaleY: 2           |              scaleY(2)              |          垂直方向增长          |
|         rotation: 90         |            rotate(90deg)            |        顺时针旋转90deg        |
|      rotation: "1.25rad"      |               no css               |       顺时针旋转1.25rad       |
|           skew: 30           |             skew(30deg)             |         倾斜旋转30deg         |
|           skewX: 30           |            skewX(30deg)            |       水平倾斜旋转30deg       |
|       skewY: "1.23rad"       |               no css               |      垂直倾斜旋转1.25rad      |
| transformOrigin: "center 40%" |    transform-origin: center 40%    |         更改旋转的原点         |
|          opacity: 0          |     adjust the elements opacity     |             可见度             |
|         autoAlpha: 0         | shorthand for opacity & visibility |            不透明度            |
|          duration: 1          |       animation-duration: 1s       |           动画时长1S           |
|          repeat: -1          | animation-iteration-count: infinite |        重复（一直重复）        |
|           repeat: 2           |    animation-iteration-count: 2    |       重复（重复1+2次）       |
|           delay: 2           |         animation-delay: 2         |         延迟2S播放动画         |
|          yoyo: true          |   animation-direction: alternate   | 从头到尾再到头，配合repeat使用 |

> 一般来说，GSAP可以使用任意常用单位，例如：px,deg,vw,rad甚至js计算或相对值
>
> ```javascript
> x: 200, // 默认使用px
> x: "+=200" // 相对值
> x: '40vw', // 传入带单位的字串符
> x: () => window.innerWidth / 2, // 使用函数计算！
>   
> rotation: 360 // 默认deg
> rotation: "1.25rad" // 使用弧度
> ```
>

##### CSS属性

GSAP支持几乎所有的原生CSS样式，只需要使用驼峰命名法！

例如 `background-color ` => `backgroundColor`

```javascript
gsap.to(".box", {
            x: 200,
            backgroundColor: '#583229',
        });
```

##### SVG属性

像CSS一样，你可以直接放进 `tween`中使用，也可以使用对象

```javascript
gsap.to(".box", {
            attr: {
                fill: '#8d3dae',
                rx: 50,
            },
        });
```
