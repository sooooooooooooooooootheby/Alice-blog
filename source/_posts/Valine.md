---
abbrlink: ''
categories: []
cover: https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/cover.webp
date: '2024-03-14T17:38:44.100900+08:00'
tags: []
title: 给你的hexo博客添加一个Valine评论系统
updated: '2024-03-14T17:38:44.473+08:00'
---

> 封面图源：[@yukiiii___saka](https://twitter.com/yukiiii___saka/status/1766801745777467453)

# 前言

基于静态网站集成的评论区系统还是挺多的，例如`Giscus`, `Utterances`, `Gitalk`, `Gitment`, `Waline`, `Twikoo`, `Valine`。

这些评论区系统或多或少都有一些优缺点：

Giscus：
* 优点：易于集成，基于 GitHub Issue，支持多种主题和自定义选项。
* 缺点：由于依赖于 GitHub Issue，可能受到 GitHub API 的限制。

Utterances：
* 优点：同样是基于 GitHub Issue，简单易用，集成方便。
* 缺点：由于使用了 GitHub Issue，可能受到 GitHub API 的限制，而且定制化程度相对较低。

Gitalk：
* 优点：基于 GitHub Issue，易于集成，支持 Markdown 渲染，可以自定义样式。
* 缺点：需要拥有 GitHub 账号，对于非技术用户可能不够友好，也受限于 GitHub API。

Gitment：
* 优点：同样是基于 GitHub Issue，简单易用。
* 缺点：较少的社区支持，不如其他工具那样活跃，有些功能可能不如其他工具丰富。

Waline：
* 优点：支持多种平台账号登录，如 GitHub、Twitter、QQ 等，提供了相对丰富的配置选项。
* 缺点：相对较新，可能在某些方面缺乏成熟度和稳定性

Twikoo：
* 优点：无需服务器，无需数据库，不受访问限制。
* 缺点：对于非技术用户来说，配置可能稍显复杂，不如其他基于 GitHub Issue 的方案那样直接。

Valine：
* 优点：无需服务器，支持自定义样式，轻量级。
* 缺点：相对较新，可能缺乏一些成熟工具的稳定性和社区支持。

这里我选择了`Valine`，因为`Valine`的配置相对简单，而且支持Markdown语法，而且对非技术用户友好。

# 准备LeanCloud账号，AppID，AppKey

首先我们需要一个LeanCloud账号，如果没有的话，可以点击[这里](https://console.leancloud.cn/register)注册一个账号。注册完成后进入控制台后点击右上角进入账号设置，需要先完成实名认证。

<a href="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine1.png
" data-fancybox data-caption="实名认证">
  <img src="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine1.png" />
</a>

略过注册和实名过程。进入控制台点击创建应用，输入应用名称，选择开发版，然后点击创建应用即可。

<a href="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine2.png
" data-fancybox data-caption="创建应用">
  <img src="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine2.png" />
</a>

应用创建完成后，点击新创建的应用进入应用，然后进入数据存储>结构化数据>创建Class,输入Class名称，默认选项然后点击创建即可。

这里将储存我们评论区的评论，如果需要管理评论可以在这里操作。

<a href="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine3.png
" data-fancybox data-caption="创建Class">
  <img src="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine3.png" />
</a>
<a href="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine4.png
" data-fancybox data-caption="Class列表">
  <img src="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine4.png" />
</a>

点击设置>应用凭证，复制你的AppID和AppKey，后面会用到。

<a href="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine5.png
" data-fancybox data-caption="AppID 和 Key">
  <img src="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine5.png" />
</a>

# 安装

我这里以我的`Hexo-Theme-Vitepress`主题举例。

在`head.ejs`引入CDN,需要在`<head>`标签中引入，当然也可以在`<body>`标签中引入，但是要注意引入文件的顺序，需要在使用valine前引用，否则会出现`Valine is not defined`的报错。

``` html
<script src='//unpkg.com/valine/dist/Valine.min.js'></script>
```

本文是使用CDN引入的方法，当然也可以使用包管理工具引入。
``` shell
// 使用npm安装
npm install valine --save
```
``` javascript
// 使用 import 导入
import Valine from 'valine';
// 或者使用 require 导入
const Valine = require('valine');

new Valine({
    el:'#vcomments',
    // 其他配置信息，下面会说到。
})
```

在`hexo-theme-vitepress > layout > _partial`文件夹下创建`Valine.ejs`作为Valine的模板文件。

``` html
// Valine.ejs

<div id="vcomments"></div>
<script>
    new Valine({
        el: '#vcomments',
        appId: 'your AppID',
        appKey: 'your AppKey',
        placeholder: '说点什么吧',
    });
</script>
```

在需要的地方引入模板文件即可，我这里在`post.ejs`中引入，放在了文章的后面。
``` html
<div class="post" id="post">
    ......
    <div class="post-content">
        <%- page.content %>
    </div>
</div>
<%- partial('_partial/valine') %>
```

至此，Valine评论系统的安装已经完成。

图6

# 配置
Valine提供了很多配置项，这里写几个常用的，有需要可以去[文档](https://valine.js.org/configuration.html)里查看。

## 必要配置
* el: Valine 的初始化挂载器。可以是一个CSS 选择器，也可以是一个实际的HTML元素。
* appId: 申请的appid。
* appKey: 申请的appkey。

## 评论占位符

placeholder: 默认值'Just go go'

用于设置评论框的占位符，其实就是评论框的提示文字。

## 头像

avatar：设置评论列表的头像，默认是Gravatar头像。

Valine使用的是[Gravatar](https://gravatar.com/)作为评论列表的头像，自行登录注册Gravatar的账号，修改自己的头像，评论的时候留下Gravatar的邮箱，就能在评论列表中看到自己的头像了。

> Gravatar是一个全球通用头像服务，它使用户可以通过自己的邮箱自动生成并上传头像，然后将其用于任何网站。
>
> 注意，Gravatar有七天的缓存期，修改完头像大概率不会立马生效。

默认值：
* 空字符''： Gravatar官方头像
* 'mp': 神秘人头像
* 'identicon': 抽象几何头像
* 'monsterid': 怪物头像
* 'wavatar': 用不同面孔和背景组合生成的头像
* 'retro': 八位像素复古头像
* 'robohash': 一种具有不同颜色、面部等的机器人
* 'hide': 隐藏头像

## 评论框背景

background：url

默认值我也不知道是什么，因为这个东西官方文档没有记录，我是在其他人博客里看见的。

直接输入url即可，不用添加引号。


## 分页

pageSize: 每页显示的评论数量，默认10。

## 代码高亮

highlight: 是否开启代码高亮，默认true。

## IP记录

recordIP: 是否记录评论者IP地址，默认false。

## QQ

enableQQ: 是否启用QQ获取昵称头像，默认false。

启用后在昵称框输入QQ号自动获取QQ昵称和QQ头像, 默认关闭，需博/网站主主动启用。（这个功能不知道是不是我设置有问题，我输入QQ号好像没法获取）

## 邮件通知

v1.4.0版本已经把这个功能下线了，只能使用第三方邮件提醒[（Valine-Admin @zhaojun1998）](https://github.com/zhaojun1998/Valine-Admin),不过这个第三方邮件提醒已经有五六年没有更新维护了，我是配置不上（

## 文章阅读量统计

visitor: 是否开启文章阅读量统计，默认true。

Valine会自动查找页面中class值为leancloud_visitors的元素，获取其id为查询条件。并将得到的值填充到其class的值为leancloud-visitors-count的子元素里。

因为看见过少的阅读量会打击到内心，所以我没有在我的博客加入这个功能(反正我也开了谷歌分析，有谷歌分析也够了)。

``` html
<!-- id 将作为查询条件 -->
<span id="<Your/Path/Name>" class="leancloud_visitors" data-flag-title="Your Article Title">
    <em class="post-meta-item-text">阅读量 </em>
    <i class="leancloud-visitors-count">1000000</i>
</span>
```

## 自定义表情

``` javascript
// 官方示例

new Valine({
    el:'#vcomment',
    appId:'<Your_APP_ID>',
    appKey:'<Your_APP_KEY>',

    // 这里设置CDN, 默认微博表情CDN
    emojiCDN: 'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/',
    // 表情title和图片映射
    emojiMaps: {
        "smile":"e3/2018new_weixioa02_org.png",
        "lovely":"09/2018new_keai_org.png",
        // ... 更多表情
    } 
})
```

这个功能我愿称之为头像之后最主要的功能，没有之一。

上面的是Valine官方文档的一个示例，我没有用cdn是直接用的url(主要是我懒得去裁剪url了，直接复制进去又不是不可以用)。

``` javascript
// 我的自定义表情配置
new Valine({
    el: '#vcomments',
    appId: '<%- theme.valine.appid %>',
    appKey: '<%- theme.valine.appkey %>',
    placeholder: '<%- theme.valine.placeholder %>',
    emojiMaps: {
        "0": "https://pic.yupoo.com/ririsukokoromu/e9be8ac5/dc0dc674.png",
        "1": "https://pic.yupoo.com/ririsukokoromu/d99e3c04/34d69f48png"
    },
});
```

# 结束

至此，Valine的配置就告一段落了，需要修改评论区的样式的话直接审查元素添加css属性即可。
<a href="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine6.png
" data-fancybox data-caption="评论区">
  <img src="https://blogimage-1315833212.cos.ap-shanghai.myqcloud.com/Valine/valine6.png" />
</a>