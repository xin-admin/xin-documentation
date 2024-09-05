---
order: 3
title: NPM 镜像配置与PNPM 的安装
---

## 前言

npm 全称 Node Package Manager，是 node.js 的模块依赖管理工具。由于 npm 的源在国外，在前端开发的时候使用国外的镜像源速度很慢并且容易下载失败，有时候需要尝试多次才有可能下载成功，很麻烦，所以国内用户使用起来各种不方便。因此可以切换为国内镜像源，下面为常用的 npm,yarn,pnpm 切换国内镜像源（以淘宝为例）的方式，下面整理出了一部分国内优秀的 npm 镜像资源，国内用户可以选择使用.

## 1、NPM 切换镜像源

- 查看当前的镜像源。

```shell
npm config get registry
```

- 切换国内镜像

```shell
npm config set registry https://registry.npmmirror.com
```

- 还原默认源

```shell
npm config set registry https://registry.npmjs.org
```

## 2、PNPM 的安装

- 执行全局安装 PNPM

```shell
npm install -g pnpm
```

- 验证 PNPM 的安装

```shell
pnpm -v
# 打印 PNPM 版本号即为成功，例：8.9.0
```

- 查询 PNPM 源

```shell
pnpm get registry
```

- 切换 PNPM 镜像

```shell
# 国内 淘宝 镜像源
pnpm config set registry https://registry.npmmirror.com/
# 官方镜像源
pnpm config set registry https://registry.npmjs.org/
```
