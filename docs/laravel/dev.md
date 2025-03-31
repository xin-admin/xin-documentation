---
title: 环境准备
order: 1
description: XinAdmin文档 - XinAdmin 本章为开发环境准备，我们建议你在预览或者开发过程中始终是再本地开发环境中使用项目，如果需要部署项目，请参考部署章节。
---

:::info
本章为开发环境准备，我们建议你在预览或者开发过程中始终是再本地开发环境中使用项目，如果需要部署项目，请参考部署章节。
:::

## 环境要求

| 序号 |   环境   |   版本    |                                     官网                                      |
| :--: | :------: | :-------: | :---------------------------------------------------------------------------: |
|  1   |   PHP    | >= 8.2.0  |   <a href="https://www.php.net/" target="_blank" rel="noreferrer">官网</a>    |
|  2   |  Mysql   |  >= 5.7   | <a href="https://www.mysql.com/cn/" target="_blank" rel="noreferrer">官网</a> |
|  3   |  NodeJs  |   >= 18   |    <a href="https://nodejs.org/" target="_blank" rel="noreferrer">官网</a>    |
|  4   |   Npm    | >= 6.14.0 |  <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">官网</a>   |
|  5   | Composer | >= 2.5.8  | <a href="https://getcomposer.org/" target="_blank" rel="noreferrer">官网</a>  |

## Node 环境安装

NodeJs 是一个 JavaScript 运行环境，它拥有非常强大的包管理器，方便我们来管理我们项目的前端依赖， 如果您电脑未安装 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a>，请安装它，本项目 node 版本为 v18.20.4 。你可以在 NodeJs 官网来安装 NodeJs，你也可以参考我们的技术文章：[Node 安装及环境配置](/problem/node)，安装完成后，通过在命令行中输入以下命令来验证 NodeJs 安装：

```shell
# 在命令行或CMD中执行下列命令，出现相应版本即可
node -v # 输出类似：v18.20.4

# 验证包管理器 npm 版本
npm -v # 输出类似：10.7.0
```

:::info
如果你需要同时存在多个 node 版本，windows 用户可以使用 Nvm 进行 Node.js 进行版本管理，node 版本过于超前也可能会出现问题 ，我们推荐你安装 nvm 来管理你的 node 版本，它可以在不同的 node 版本之间切换，查看[NVM 的安装和使用](/problem/nvm)
:::

pnpm 是一个快速、节省磁盘空间的包管理工具，用于替代 npm 或 yarn，我们也推荐你使用 pnpm 来管理你的前端依赖。

```shell
# 全局安装 PNPM
npm install -g pnpm
# 验证是否安装成功
pnpm -v
# 出现对应版本即可
```

## PHP 安装

PHP 环境 安装教程可以参考<a href="https://zhuanlan.zhihu.com/p/364743118" target="_blank" rel="noreferrer">知乎教程</a> 但是我不建议你这样做，因为他安装起来特别的麻烦，对于新手来说是一件非常棘手的事情。 我推荐用 PHP 开发集成环境开作为开发环境，你可以参考 [PHP 环境搭建](/problem/php) 来在你的电脑或者服务器中安装环境！

```shell
# 验证 PHP 安装
# php 版本大于 8.2 即可
php -v
# 验证 composer 安装 出现相关信息即可
# composer 版本大于 2.5.6 即可
composer -v
# 查看 composer 版本 执行命令来升级 composer 版本
composer self-update

```

## Mysql 安装

我们将 mysql 作为数据库，你需要在你的电脑中安装 mysql 才可以运行项目，当然你可以在集成开发环境如：phpenv、EService、宝塔 中一键启动 mysql 服务，大部分的数据库初始账号为`root`,初始密码为`root`，端口号为`3306`，你可以使用第三方工具来链接数据库，如：navicat。

数据库链接成功之后，需要你新建一个空的数据库，准备好你的数据库信息，下一章我们会需要它。

如果以上环境你都已经准备完毕，请看下一章[快速上手](/laravel/start)
