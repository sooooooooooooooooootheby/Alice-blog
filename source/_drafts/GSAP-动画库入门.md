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
updated: '2024-01-10T23:49:40.686+08:00'
---
# 安装

```shell
# 通过pnpm安装
pnpm install gsap

# 通过CDN安装
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>

# 通过yarn安装
yarn add gsap
```

# 开始使用

### tween

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

### target

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

### 变量

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

### Easing

`ease: "none.out"`可以给动画加一个缓和的效果

第一个值 `none`需要填写GSAP官方提供的几种动画类型名称，例如 `power1`,`back`,`bounce`;

第二个值 `out`可以更换为 `in`或者 `inOut`，三个值的区别在于 `in`是动画开头时开始缓和效果，`out`是动画结束时开始缓和效果（直白一点就是把函数正反表示）

[官方的曲线实验场](https://gsap.com/resources/getting-started/Easing)

![easing](http://pic.yupoo.com/ririsukokoromu/4b48a1b2/e0352558.jpg)

### Staggers

(说真的官方的命名真的很抽象，我真的不知道该怎么翻译他们）

`Staggers`这个变量可以让多个元素按顺序触发

```javascript
<div class="box red"></div>
<div class="box yellow"></div>
<div class="box blue"></div>
<div class="box green"></div>
  
<script>
    gsap.to(".box",{
        x: 300,
        // 当stagger设置为0.3时，yellow会在red动画结束后0.3s触发自己的动画，之后的元素以此类推
        stagger: 0.3,
    })
</script>
```

##### 配合Grid网格布局的高级用法

`Staggers`可以配合Grid网格布局使用，做出很惊艳的群体动画效果

[官方的示例Demo](https://gsap.com/resources/getting-started/Staggers#advanced-configuration)

```javascript
stagger: {
    // 你的网格布局拥有[多少行,多少列]
    grid: [13, 8],
    // 动画开始播放的位置，可以设置为[center,end,edges,random,ll]
    from: "center",
    // 侧重的轴，可以设置为x或y，不设置则从中心开始变化
    axis: "y",
    // 动画缓动效果，参考上一节内容
    ease: "none",
    // 总时长,过大过小会导致所有元素同步运动
    amount: 0.7,
}
```

### TimeLines

标题比较显而易见，是时间线。时间线可以让多个元素的动画调整变得更加的容易。

```javascript
// 要使用时间线，不能直接使用gsap.to或者gsap.timeline().to，必须要声明一个变量。
let tl = gsap.timeline();

// 在这之后就和之前所学的一样添加duration(动画播放时长)即可，元素动画将会按照顺序播放
tl.to(".div1",{
x: 300,
duration: 2,
});
tl.to(".div2",{
x: 300,
duration: 1,
});
tl.to(".div3",{
x: 300,
duration: 2,
});
```

如果你需要给动画添加一点点的延迟，只需要使用变量 `delay`即可

```javascript
tl.to(".div1",{
    x: 300,
    duration: 2,
});
tl.to(".div2",{
    x: 300,
    duration: 1,
    // 注意，变量 delay 必须要添加到需要延迟的元素上，例如此处添加到div2，动画的播放将会在div1播放完毕之后停顿1S再继续播放div2的动画
    delay: 1,
});
tl.to(".div3",{
    x: 300,
    duration: 2,
});
```

##### 位置参数

`gsap.timeline()`还提供了一个位置参数，可以用来调整元素动画在时间轴中播放的位置

```javascript
tl.to(".div1",{
    x: 600,
    duration: 2,
// 在时间轴开始播放后3S开始播放动画
},3);
tl.to(".div2",{
    x: 600,
    duration: 1,
// 在上一个元素动画播放前3S开始播放动画
},"-=3");
tl.to(".div3",{
    x: 600,
    duration: 2,
// 在上一个元素动画播放后3S开始播放动画
},"+=3");
tl.to(".div4",{
    x: 600,
    duration: 2,
// 在上一个元素动画播放后3S开始播放动画
},"<");
```

##### 特殊参数

`timeline()`和补间一样可以写入一些变量

```javascript
let tl = gsap.timeline({
    repeat: -1, 
    // 在时间轴结束1S后开始播放
    repeatDelay: 1, 
    yoyo: true
});
```
