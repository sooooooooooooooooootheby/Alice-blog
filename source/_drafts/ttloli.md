---
abbrlink: ''
categories: []
cover: https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/ttloli%2Fcover.webp
date: '2024-03-12T13:04:43.100900+08:00'
tags: []
title: 教你写一个忧郁的弟弟右键聚光灯特效
updated: '2024-03-12T17:59:20.205+08:00'
---
> 封面图源：[忧郁的弟弟背景图（具体哪个作者我也不知道）](https://www.ttloli.com/)

# 前言

忧郁的弟弟也是很老的galgame网站了，小时候就很好奇这个右键的效果是怎么做出来的，现在上大学学了网页制作之后再看一下就还是挺容易做的。

# 原理分析

看图可以发现,这个右键有两个部分，一个是右键菜单 `circle`和聚光灯 `overlay`(中文和英文没有关系，英文是页面中div的class名)。

本文不介绍菜单（这个东西没什么好说了，九六个a标签围一圈加个触发动画），主要说说这个跟随鼠标移动的聚光灯是怎么做到的

![ttloli](https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/ttloli/ttloli1.png)

当我们移动鼠标的时候，会发现 class为 `large`的div的style一直在变化，主要为 `left`,`top`,`background-position`三个属性。

其中，`left`和 `top`两个属性是用于控制div的位置的，`background-position`是控制背景图片跟随div位置变化的。在css中， `background-position` [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 属性为每一个背景图片设置初始位置。

至此，原理就很明显了，元素设置为绝对定位，元素的 `top `和 `left`属性会让元素跟随鼠标移动，而 `background-position`属性会让子元素的背景图片会与鼠标的移动方向相反移动，这样便能实现聚光灯的效果。

# 原理实现
