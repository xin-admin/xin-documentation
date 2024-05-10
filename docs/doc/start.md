---
group:
  title: 基础
  order: 0
title: 快速上手
order: 1
---

# 快速上手

&nbsp;&nbsp;&nbsp;&nbsp;本项目的技术栈选用 thinkphp 和 ant design， 在开始之前，我想你应该已经熟练了解了 Html、Css、JavaScript 以及 PHP 的相关知识，在此前提之下，推荐你去了解以下相关文档及内容:
JS 框架: <a href="https://react.docschina.org/" target="_blank" rel="noreferrer">React</a>、
JS 框架: <a href="https://umijs.org/" target="_blank" rel="noreferrer">Umi Js</a>、
React 组件库: <a href="https://ant.design/index-cn/" target="_blank" rel="noreferrer">Ant Design</a>、
PHP 框架: <a href="https://doc.thinkphp.cn/" target="_blank" rel="noreferrer">Think PHP</a>，当然我们也会在文档中尽可能的去详细的描述任何一个相关的知识点，以便新手也可以快速上手本项目

:::warning
如果你还没有基础的开发环境，建议你先阅读[环境准备](/doc/dev)章节
如果你想使用本项目，强烈建议你花几分钟时间阅读一下本文章！如果在安装过程中有任何错误，也请你加入我们的[官方 qq 群](/introduce/author#联系我)来获取帮助。
:::

## 获取项目

1、克隆项目到本地目录，你可能需要安装 <a href="https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git" target="_blank" rel="noreferrer">Git</a>

```shell
# 新建项目文件夹

# 在文件夹中打开命令行执行
git clone https://gitee.com/xineny/xin-admin.git

```

2、直接下载项目压缩包，到本地解压

```shell
# 下载地址
https://gitee.com/xineny/xin-admin
```

## 项目目录

下载或者解压之后你会看到这样一个文件目录

```bash
.
├── database #基础数据库文件夹
│   └── install.sql
├── log # 日志文件夹
├── modules # 基础模块文件夹
│   └── extend
├── xin-admin # 后端文件夹
│   └── ...
├── xin-web # 前端文件夹
│   └── ...
├── .gitignore
├── LICENSE
├── project.json # 项目配置文件
├── README.md
└── run  # php 命令行文件
```

## 开发环境依赖安装

1、修改项目配置文件中 开发环境 数据库 配置

```json
// 项目配置文件 project.json
{
  "name": "Xin Admin",
  "description": "the new xin admin",
  "version": "0.1-beta",
  "require": {
    "php": "8.1.0",
    "nodejs": "^16.8.0",
    "composer": "2.5.8"
  },
  "dev": {
    // 数据库地址
    "db_host": "127.0.0.1",
    // 数据库名字
    "db_name": "xin_admin",
    // 数据库用户名
    "db_user": "root",
    // 数据库密码
    "db_pass": "root",
    // 数据库端口
    "db_port": "3306"
  }
}
```

2、执行安装命令

```shell
# 获取全部命令
php run

# 在项目根目录 执行安装脚本 前后端依赖包括数据库将自动安装
php run install
```

安装脚本都做了什么？

1. 检测基础环境是否安装完成，脚本会根据项目配置文件 `project.json` 中的环境版本来判断你的环境是否达到需求

2. 检测数据库链接是否成功，获取项目配置文件 `project.json` `dev` 中的数据库信息，并且尝试链接他，链接成功之后会在后端项目目录创建 .env 环境变量

3. 执行后端依赖安装，自动切换阿里云镜像，并且执行 `composer install`，依赖安装过程会很漫长，请耐心等待

4. 执行前端项目依赖安装，脚本会自动切换阿里云镜像安装`pnpm`，安装成功后之后使用`pnpm inastall`来安装前端依赖，前端依赖安装过程会很漫长，请耐心等待

5. 导入项目数据库文件

:::warning
如果安装失败请查看提示，并查阅[环境准备](/doc/dev)章节，查看环境是否准备完毕，或者手动安装依赖，也可以加入我们的官方群来寻求帮助
:::

## 手动安装依赖

1、安装 PHP 依赖

```shell
# 切换到 PHP 项目目录
cd ./xin-admin

# 执行依赖安装命令
composer install

# 如果安装速度较慢可以先切换阿里镜像源
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

2、导入数据库文件

新建数据库，并且导入项目根目录文件夹 ./database/install.sql 数据库文件

3、 配置环境变量

复制后端项目文件夹中的 .example.env 文件 并 重命名为 .env

在 .env 文件中写入数据库账户密码以及数据库名

```text
APP_DEBUG = true    # 是否开启Debug
DB_TYPE = mysql     # 数据库类型
DB_HOST = 127.0.0.1 # 数据库地址
DB_NAME = xin-cms   # 数据库名称
DB_PREFIX = xin_    # 数据库前缀
DB_USER = root      # 数据库用户名
DB_PASS = root      # 数据库密码
DB_PORT = 3306      # 数据库端口号
DB_CHARSET = utf8   # 编码
DEFAULT_LANG = zh-cn# 语言
# 用于 Crud 代码生成目录 相对于 应用根目录位置
WEB_PATH = ../xin-web

```

4、安装前端依赖

```shell
# 切换到 前端 项目目录
cd ./xin-web

# 执行安装 pnpm
npm install -g pnpm

# 使用pnpm 安装依赖
pnpm install

# 如果安装速度较慢可以切换npm和pnpm镜像
# 切换 npm 镜像
npm config set registry https://registry.npmmirror.com
# 切换 pnpm 镜像
pnpm config set registry https://registry.npmmirror.com
```

## 启动项目

安装成功之后，你可以启动项目执行以下命令来启动项目

```shell
# 切换到前端项目目录
cd ./xin-web

# 运行前端项目
pnpm run dev

# 切换到后端目录
cd ./xin-admin

# 运行后端项目
php think run

```

自此，你可以通过 http://127.0.0.1:3000 来访问你的项目
