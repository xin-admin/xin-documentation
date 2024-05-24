---
group:
  title: 前端进阶
title: 路由
order: 1
---

# 路由

Xin Admin 前端项目基于 Umi Js，路由采用 UmiJs 约定式路由，根据文件目录生成路由表。

## 约定式路由

约定式路由也叫文件路由，就是不需要手写配置，文件系统即路由，通过目录和文件及其命名分析出路由配置。

比如以下文件结构：

```bash
.
  └── pages
    ├── index.tsx
    └── users.tsx
```

会得到以下路由配置，

```js
[
  { path: '/', component: '@/pages/index' },
  { path: '/users', component: '@/pages/users' },
];
```

> 使用约定式路由时，约定 `src/pages` 下所有的 `(j|t)sx?` 文件即路由。我们已经配置忽略了`components`文件夹，可以使用 conventionRoutes] 配置。

## 前后端页面分离

我们通过 UmiJs 插件的能力，实现了前后端页面文件分离，在 `backend` 、 `fortend` 和 `public` 中的文件 会自动忽略 `\backend` 、 `\fortend` 和 `\public` 来生成路由

比如以下文件结构：

```bash
.
  └── pages
    └── backend
      ├── index.tsx
      └── users.tsx
```

在不使用 Umi 插件的情况下，会得到以下路由配置，

```js
[
  { path: '/backend', component: '@/pages/index' },
  { path: '/backend/users', component: '@/pages/users' },
];
```

通过插件过滤后 会得到以下路由配置，使我们开发时的文件结构更简洁

```js
[
  { path: '/', component: '@/pages/index' },
  { path: '/users', component: '@/pages/users' },
];
```

## 开发技巧

在实际开发过程中我们考虑到会出现客户端和管理端通用页面

我们只需将页面文件放到 `public` 文件夹下面，然后分别在 客户端 和 管理端 添加该页面的 权限 来控制页面的展示

这样我们可以最大的做到页面复用
