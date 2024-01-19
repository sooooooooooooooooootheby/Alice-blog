---
abbrlink: ''
categories: []
cover: https://minio.ririsukokoromu.top:9000/pic/Articleillustration/miniocover.jpg
date: '2024-01-18T22:51:18.791698+08:00'
tags:
- 阿里云ECS
- minio
title: 使用阿里云ECS和minio创建你的图床
updated: '2024-01-19T10:42:14.361+08:00'
---
> “大丈夫生居天地间，岂能郁郁久居人下！”
>
> ![minio1](https://minio.ririsukokoromu.top:9000/pic/Articleillustration/minio1.jpg)

因为免费的图床限制比较多，刚好前两个月白嫖到了阿里的云服务器，索性自己整一个图床罢。

### 准备

1. 云服务器
2. minio
3. 一个域名（非必要，但建议准备）
4. 证书网站（例如：https://letsencrypt.osfipin.com/）（非必要，但建议准备）

关于云服务器的系统，我这里用的是ubuntu 22.04，不过用啥系统都不重要，

![minio2](https://minio.ririsukokoromu.top:9000/pic/Articleillustration/minio2.png)

### 开始部署

远程连接虚拟机后新建一个文件夹作为minio的工作目录

```shell
mkdir minio
cd minio
```

下载minio本体

```shell
wget https://dl.minio.io/server/minio/release/linux-amd64/minio
```

创建日志文件并给予权限

```shell
touch minio.log
chmod 777 minio
```

minio 启动！(这里的data是之后存放文件的位置)

```
./minio server data
```

这个时候虽然minio服务启动了，但是它有一行红色的报错，意思是叫我们修改默认的用户名和密码

![minio3](https://minio.ririsukokoromu.top:9000/pic/Articleillustration/minio3.png)

这个时候需要配置一下环境变量

```shell
vim /etc/profile
```

在底部添加

```
# set minio environment
export MINIO_ROOT_USER=yourusername
export MINIO_ROOT_PASSWORD=yourpassword
```

再次启动minio，这个时候报错就消失了,用户名(RootUser)和密码(RootPass)也变成了你自己设置的用户名和密码了。

![minio4](https://minio.ririsukokoromu.top:9000/pic/Articleillustration/minio4.png)

这个时候，由于我们没有指定minio控制台的端口，所以会导致每次启动时他的端口会发生变化，这不是什么好事，所以我们在启动的时候需要添加一些启动项，指定控制台的端口为9001，当然，这个端口号可以随便改，只要不和其他进程冲突并且不超过PID的限制。

```
./minio server /root/minio/data --console-address ":9001"
```

我们还不能直接在自己的浏览器访问控制台，因为你会发现minio给出的访问地址是172开头的，众所知周，172是B类的私网地址，所以我们需要通过云服务器的公网IP访问控制台，在此之前我们需要到云服务器的防火墙放行端口，否则也是无法访问的。（我的直觉告诉我不应该全部放行的，这样很危险，但是我设置放行9001和172.16.147.252/32会一直卡在加载页面）

![minio5](https://minio.ririsukokoromu.top:9000/pic/Articleillustration/minio5.png)

端口放行之后就可以通过你的云服务器公网ip+端口号访问了。

又众周知所，直接用ip访问是一种危险的行为，所以我们可以通过DNS解析访问控制台。

我这里直接在Cloudflare添加了一条A记录,就可以通过minio.ririsukokoromu.top:9001来访问控制台了。

![minio6](https://minio.ririsukokoromu.top:9000/pic/Articleillustration/minio6.png)

事已至此，貌似快结束了，但是重点来了，一个很大的坑在之前埋下了。

仔细观察云服务器的终端输出，你会发现minio给出的链接居然是http协议，所众周知，如果你的网站使用的是https协议，但是你的网站图片用的是http协议，会导致浏览器拒绝加载http协议的图片。

![minio7](https://minio.ririsukokoromu.top:9000/pic/Articleillustration/minio7.png)

这个时候我们就需要用到证书网站了，申请一个TLS证书，这里再贴一遍网址https://letsencrypt.osfipin.com/。证书申请很简单，一路都有文字引导，所以这里就不教了。

证书成功申请之后下载下来，我们只需要 `certificate.crt`和 `private.pem`两个文件，将证书文件 `certificate.crt`改名为 `public.crt`，私钥文件 `private.pem`改后缀为 `private.key`在minio的工作目录下新建一个文件夹 `certs`把命名后的文件放进去

![minio8]

在启动项里添加上 `--certs -dir /root/minio/certs/`就可以成功开启https协议了。

```shell
./minio server  minio/data --console-address ":9001" --certs-dir /root/minio/certs/ > /root/minio/minio.log 2>&1 &
```

最后一步，写一个脚本，让程序在后台自动运行就好了，这样即使关掉终端程序也不会停止。

```shell
vim start.sh

### 在.sh文件中填入一下内容

nohup /root/minio/minio server  /root/minio/data --console-address ":9001" --certs-dir /root/minio/certs/ > /root/minio/minio.log 2>&1 &

### 保存并退出

sh start.sh
```

这样就完事大吉了，可以享用你的图床（其实可以当云盘用的）了。
