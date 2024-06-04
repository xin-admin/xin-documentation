---
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
├─app           应用目录
├─config        配置目录
├─view          视图目录
├─route         路由定义目录
├─public        WEB目录（对外访问目录）
│  ├─index.php     入口文件
│  ├─router.php    快速测试文件
│  └─.htaccess     用于apache的重写
├─web           前端文件目录
│  ├─admin         后台前端项目目录
│  └─taro          taro项目目录
├─runtime       应用的运行时目录（可写，可定制）
├─.example.env  环境变量示例文件
├─composer.json composer 定义文件
├─LICENSE       授权说明文件
├─README.md     README 文件
├─think         命令行入口文件
```

## 后端项目启动

### 1、安装 PHP 依赖

```shell
# 执行依赖安装命令
composer install

# 如果安装速度较慢可以先切换阿里镜像源
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

### 2、导入数据库文件

新建数据库，并且导入项目根目录文件夹 ./database/install.sql 数据库文件

### 3、 配置环境变量

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

### 4、运行后端项目

```shell
# 运行后端项目
php think run
```

测试访问 `loaclhost:8000` 出现 json 即可

## 安装前端依赖

```shell
# 切换到 前端 项目目录
cd ./web/admin

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

安装成功之后，你可以启动项目执行以下命令来启动项目

```shell
# 运行前端项目
pnpm run dev

```

自此，你可以通过 http://127.0.0.1:3000 来访问你的项目
