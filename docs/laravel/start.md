---
title: 快速上手
order: 2
description: XinAdmin文档 - 快速上手 XinAdmin
---

## 技术栈概览

XinAdmin 项目采用现代全栈技术架构：

- **后端框架**：Laravel (PHP)
- **前端框架**：React + UmiJS
- **UI 组件库**：Ant Design

在开始之前，请确保您具备以下基础知识：

- HTML、CSS、JavaScript 基础
- PHP 开发基础
- 数据库基础知识

### 推荐学习资源

| 技术栈     | 说明               | 官方文档                                        |
| ---------- | ------------------ | ----------------------------------------------- |
| React      | 前端核心框架       | [React 文档](https://react.docschina.org/)      |
| UmiJS      | React 应用开发框架 | [UmiJS 文档](https://umijs.org/)                |
| Ant Design | React UI 组件库    | [Ant Design 文档](https://ant.design/index-cn/) |
| Laravel    | PHP 后端框架       | [Laravel 文档](https://laravel.com/)            |

:::warning{title="重要提示"}

- 首次使用请先阅读[环境准备](/laravel/dev)章节
- 遇到问题可加入[官方 QQ 群](/introduce/author#联系我)获取帮助
  :::

## 获取项目

### 方式一：Git 克隆（推荐）

```bash
git clone https://github.com/xin-admin/xin-laravel.git
```

:::tip
推荐先 Fork 项目到自己的仓库，这样可以方便接收上游更新。
:::

### 方式二：直接下载

访问 XinAdmin 项目主页 下载最新版本的源码压缩包。

```shell
# 下载地址
https://github.com/xin-admin/xin-laravel
```

## 项目结构

<Tree>
  <ul>
    <li> app <small>应用程序目录，包含应用程序的核心代码</small>
      <ul>
        <li>Enum <small>枚举类</small>
          <ul></ul>
        </li>
        <li>Exceptions <small>异常处理类目录</small>
          <ul></ul>
        </li>
        <li>Http <small>请求目录，所有的请求接口都在这里面实现</small>
          <ul>
            <li>Admin <small>管理员后台目录</small>
              <ul>
                <li>Controller <small>控制器目录</small></li>
                <li>Requests <small>表单请求目录</small></li>
              </ul>
            </li>
            <li>App <small>会员前台目录</small>
              <ul>
                <li>Controller <small>控制器目录</small></li>
                <li>Requests <small>表单请求目录</small></li>
              </ul>
            </li>
            <li>BaseController.php <small>基础控制器文件</small></li>
          </ul>
        </li>
        <li>Middleware <small>中间件目录</small>
          <ul></ul>
        </li>
        <li>Models <small>模型目录</small>
          <ul></ul>
        </li>
        <li>Service <small>服务类目录</small>
          <ul></ul>
        </li>
        <li>helpers.php <small>公共文件</small></li>
      </ul>
    </li>
    <li> bootstrap <ul></ul> </li>
    <li> config <small>配置目录，该目录包含应用程序的所有配置文件</small> <ul></ul></li>
    <li> database <small>数据库目录，该目录包含您的数据库迁移、模型工厂和种子。</small> <ul></ul></li>
    <li> extends <small>扩展目录，该目录是系统扩展的目录。</small> <ul></ul></li>
    <li> public <small>公共目录，该文件是进入应用程序的所有请求的入口点。</small> <ul></ul></li>
    <li> resources <small>资源目录</small> <ul></ul></li>
    <li> routes <small>路由目录，该目录包含应用程序的所有路由定义。</small> <ul></ul></li>
    <li> storage <small>缓存目录</small> <ul></ul></li>
    <li> vendor <small>依赖目录</small> <ul></ul></li>
    <li> web <small>前端UI目录</small> <ul>
      <li>public <small>公共文件目录</small><ul></ul></li>
      <li>src <small>前端资源目录</small><ul></ul></li>
      <li>types <small>ts类型目录</small><ul></ul></li>
      <li>...</li>
    </ul></li>
    <li>.env.example <small>环境变量文件</small></li>
    <li>.gitignore <small>Git忽略配置文件</small></li>
    <li>composer.json <small>依赖配置文件</small></li>
    <li>README.md <small>项目描述</small></li>
  </ul>
</Tree>

## 启动安装服务

### 1、新建数据库

请先使用数据库管理工具，链接到数据库，并新建一个空数据库。

### 2、配置环境变量

修改项目文件 .example.env 中的配置，确保数据库配置正确，如果你没有数据库，请先新建一个空数据库

```shell
# 数据库配置
DB_CONNECTION=mysql     # 数据库类型
DB_HOST=127.0.0.1       # 数据库地址
DB_PORT=3306            # 数据库端口号
DB_DATABASE=xin_laravel # 数据库名称
DB_USERNAME=root        # 数据库用户名
DB_PASSWORD=root        # 数据库密码
```

### 3、安装 PHP 依赖

```shell
# 切换到项目根目录
cd xin-laravel

# 执行依赖安装命令
composer install

# 如果安装速度较慢可以先切换阿里镜像源，安装失败或提示版本不存在请多换几个镜像重试！！！
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/  # 切换阿里云镜像
# 镜像地址
# composer        https://packagist.org  官方镜像
# phpcomposer     https://packagist.phpcomposer.com 中文镜像
# aliyun          https://mirrors.aliyun.com/composer 阿里云镜像
# tencent         https://mirrors.cloud.tencent.com/composer 腾讯云镜像
# huawei          https://mirrors.huaweicloud.com/repository/php 华为云镜像
# 其它镜像
# laravel-china   https://packagist.laravel-china.org
# cnpkg           https://php.cnpkg.org cnpkg
# sjtug           https://packagist.mirrors.sjtug.sjtu.edu.cn

```

### 4、环境变量配置与数据导入

```shell
# 依赖安装完成后，你可以通过执行 以下命令来完成 XinLaravel 的安装

# 复制环境变量文件
php -r "file_exists('.env') || copy('.env.example', '.env');"

# 创建文件储存链接 （用于文件存储的本地公共目录链接）
php artisan storage:link

# 执行数据库迁移 （执行前请确保 .env 文件存在 并且已经配置好数据库 ）
php artisan migrate

# 执行数据导入
php artisan db:seed

```

### 5、运行后端项目

安装完成后你就可以使用命令来运行后端项目

```shell
# Linux下推荐使用:sudo php artisan serve
# Linux下若加sudo后仍然异常，请确保 xin admin 目录的所有者和执行此命令的用户一致，推荐root
php artisan serve
```

上述 命令执行成功后输出类似：

```shell
INFO  Server running on [http://127.0.0.1:8000].

Press Ctrl+C to stop the server
```

测试访问 `http://loaclhost:8000` 或者 `http://127.0.0.1:8000` 出现 响应 JSON 即可

### 6、安装前端依赖

```shell
# 打开新命令行窗口并切换到 前端 项目目录
cd ./web

# 使用 pnpm 安装依赖 ，如果你没有安装 pnpm 请参阅环境准备一章安装环境变量
pnpm install

# 如果安装速度较慢可以切换npm和pnpm镜像
# 切换 npm 镜像
npm config set registry https://registry.npmmirror.com
# 切换 pnpm 镜像
pnpm config set registry https://registry.npmmirror.com
```

### 7、运行前端项目

```shell
# 你可以执行以下命令来启动前端项目
pnpm run dev

# 运行成功后输出类似以下内容
#         ╔════════════════════════════════════════════════════╗
#         ║ App listening at:                                  ║
#         ║  >   Local: http://localhost:3000                  ║
# ready - ║  > Network: http://17.128.181.104:3000             ║
#         ║                                                    ║
#         ║ Now you can open browser with the above addresses↑ ║
#         ╚════════════════════════════════════════════════════╝
```

自此，你可以通过 http://127.0.0.1:3000 来访问你的项目

:::info
在前后端分离开发的模式下，我们建议你保持本地环境作为开发环境，并通过 `php artisan serve` 和 `pnpm run dev` 来启动本地项目作为开发环境，如果需要部署请参考[部署环节](/laravel/deployment)
:::

:::warning
在服务器端使用 `php artisan serve` 和 `pnpm run dev` 启动项目会造成服务器性能浪费，请打包前端代码，并使用 nginx 或者 apache 来部署。具体参考[部署环节](/laravel/deployment)
:::

## 常见问题

#### 1. 提示 `composer install` 命令不存在？

如果您已完成了 Composer 的安装，但还是找不到 composer 命令，可以尝试 composer.phar install 命令，如果命令还不存在，那么请检查您电脑的环境变量设置。

#### 2. 提示 `ERROR  The [*****\public\storage] link already exists. `

你已经创建过了符号链接，请不要重复执行 `php artisan storage:link` 命令。

#### 3. 提示 `SQLSTATE[HY000] [1045] Access denied for user 'root'@'localhost' (using password: NO)`

请检查 .env 文件中的数据库配置。当前配置链接与端口号是否正确，数据表是否存在。

#### 4. Composer 提示 `Your requirements could not be resolved to an installable set of packages.`

请检查报错下方的 Problem，依次解决即可，比如提示`laravel/framework 11.9.0 requires ext-fileinfo * -> it is missing from your system. Install or enable PHP's fileinfo extension.`，那么请为 PHP 安装 fileinfo 扩展。
