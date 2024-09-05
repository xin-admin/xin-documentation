---
order: 1
title: NVM 的安装和使用
---

```php
# 本章节选改自简书：【nvm下载安装使用】
# 作者: 【driver_ab】
# 链接地址: https://www.jianshu.com/p/26485ee1209d
```

## 前言

在我们的日常开发中可能会遇到这种情况：手上有好几个项目，每个项目的需求不同，进而不同项目必须依赖不同版的 node.js，如果没有一个合适的工具，这个问题将非常棘手。所以，nvm 应运而生，nvm 是一个 nodejs 版本管理工具，可以

## 安装 nvm

1、首先需要卸载已安装的 node.js，卸载完成后，请检查环境变量，如果还有 node.js，请去掉，保证系统已经无任何 node.js 残留。

[nvm 下载网址：https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

2、进入 nvm 下载地址，下载 nvm-setup 安装包

3、下载完成后，解压，运行安装文件，安装路径不要有中文，空格等，不要放在 C 盘，可能会出现无法访问的情况。

4、打开 cmd，输入 `nvm -v` ，出现版本号就是安装成功了

5、配置下载镜像，在 nvm 安装路径下找到 setting.txt 文件，打开，新增如下信息

```js
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

6、常用命令

| 命令                         | 说明                                                                                                                                                             |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nvm arch                     | 显示 node 是运行在 32 位还是 64 位。                                                                                                                             |
| nvm install <version> [arch] | 安装 node， version 是特定版本也可以是最新稳定版本 latest。可选参数 arch 指定安装 32 位还是 64 位版本，默认是系统位数。可以添加--insecure 绕过远程服务器的 SSL。 |
| nvm list [available]         | 显示已安装的列表。可选参数 available，显示可安装的所有版本。list 可简化为 ls。                                                                                   |
| nvm on                       | 开启 node.js 版本管理                                                                                                                                            |
| nvm off                      | 关闭 node.js 版本管理。                                                                                                                                          |
| nvm proxy [url]              | 设置下载代理。不加可选参数 url，显示当前代理。将 url 设置为 none 则移除代理。                                                                                    |
| nvm node_mirror [url]        | 设置 node 镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。                       |
| nvm npm_mirror [url]         | 设置 npm 镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。                   |
| nvm uninstall <version>      | 卸载指定版本 node。                                                                                                                                              |
| nvm use [version] [arch]     | 使用制定版本 node。可指定 32/64 位。                                                                                                                             |
| nvm root [path]              | 设置存储不同版本 node 的目录。如果未设置，默认使用当前目录。                                                                                                     |
| nvm version                  | 显示 nvm 版本。version 可简化为 v。                                                                                                                              |

<Alert type="warning">
  注意：切换版本命令需要使用管理员身份执行
</Alert>
