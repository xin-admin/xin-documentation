---
group:
  title: 前端进阶
title: 目录结构
order: 0
---

# 目录结构

详细参考[Umi Js 目录结构](https://umijs.org/docs/guides/directory-structure#public-%E7%9B%AE%E5%BD%95)

这里罗列了 Umi 项目中约定(或推荐)的目录结构，在项目开发中，请遵照这个目录结构组织代码。

```bash
.
├── config
│   └── config.ts
├── dist
├── mock
│   └── app.ts｜tsx
├── src
│   ├── .umi
│   ├── .umi-production
│   ├── layouts
│   │   ├── BasicLayout.tsx
│   │   ├── index.less
│   ├── models
│   │   ├── global.ts
│   │   └── index.ts
│   ├── pages
│   │   ├── index.less
│   │   └── index.tsx
│   ├── utils // 推荐目录
│   │   └── index.ts
│   ├── services // 推荐目录
│   │   └── api.ts
│   ├── app.(ts|tsx)
│   ├── global.ts
│   ├── global.(css|less|sass|scss)
│   ├── overrides.(css|less|sass|scss)
│   ├── favicon.(ico|gif|png|jpg|jpeg|svg|avif|webp)
│   └── loading.(tsx|jsx)
├── node_modules
│   └── .cache
│       ├── bundler-webpack
│       ├── mfsu
│       └── mfsu-deps
├── .env
├── plugin.ts
├── .umirc.ts // 与 config/config 文件 2 选一
├── package.json
├── tsconfig.json
└── typings.d.ts
```

## 根目录

### .env

环境变量，比如：

```text
PORT=8888
COMPRESS=none
```

### .umirc.ts

> 与 `config/config.ts` 文件功能相同，2 选 1 。`.umirc.ts` 文件优先级较高

配置文件，包含 Umi 所有非运行时配置。

若你需要在不同环境中加载不同配置，这在 Umi 中是根据 UMI_ENV 来实现的，一个不同环境启动的例子：

```json
{
  "scripts": {
    "dev": "umi dev",
    "dev:pre": "cross-env UMI_ENV=pre umi dev"
  }
}
```

### config/config.ts

> 与 `.umirc.ts` 文件功能相同，2 选 1 。`.umirc.ts` 文件优先级较高

与 `.umirc.ts` 相同，区别是你可以单独在一个 `config` 文件夹下集中管理所有的配置，保持项目根目录整洁。

### dist 目录

执行 `build` 后产物的默认输出文件夹。可通过 `outputPath` 配置修改产物输出文件夹。

### mock 目录

存放 mock 文件，此目录下所有 `.ts` / `.js` 文件会被 mock 服务加载，从而提供模拟数据 。

### public 目录

存放固定的静态资源，如存放 `public/image.png` ，则开发时可以通过 `/image.png` 访问到，构建后会被拷贝到输出文件夹。

### `src` 目录

#### .umi 目录

:::warning{title=🛎️}
**不要提交 `.umi` 临时文件到 git 仓库，默认已在 `.gitignore` 被忽略。**
:::

dev 时的临时文件目录，比如入口文件、路由等，都会被临时生成到这里。

#### .umi-production 目录

:::warning{title=🛎️}
**不要提交 `.umi-production` 临时文件到 git 仓库，默认已在 `.gitignore` 被忽略。**
:::

build 时的临时文件目录，比如入口文件、路由等，都会被临时生成到这里。

#### app.[ts ｜ tsx]

运行时配置 文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。

运行时配置带来的逻辑会在浏览器中运行，因此当有远程配置、动态内容时，这些我们在本地开发时还不确定，不能写死，所以需要在浏览器实际运行项目时动态获取他们。

#### layouts/index.tsx

全局布局，默认会在所有路由下生效

```
[
  { path: '/', component: '@/pages/index' },
  { path: '/users', component: '@/pages/users' },
]
```

当你需要关闭 layout 时可以使用 `layout: false` ，当你需要更多层 layout 时，可以考虑使用 wrappers ，仅在配置式路由可用：

```ts
routes: [
  { path: '/', component: './index', layout: false },
  {
    path: '/users',
    component: './users',
    wrappers: ['@/wrappers/auth'],
  },
];
```

#### pages 目录

约定式路由默认以 `pages/*` 文件夹的文件层级结构来生成路由表。

在配置式路由中，`component` 若写为相对路径，将从该文件夹为起点开始寻找文件：

```ts
routes: [
  // `./index` === `@/pages/index`
  { path: '/', component: './index' },
];
```

##### pages/404.tsx

在使用约定式路由时，该文件会自动被注册为全局 404 的 fallback 页面。若你使用配置式路由，需要自行配置兜底路由到路由表最后一个：

```ts
routes: [
  // other routes ...
  { path: '/*', component: '@/pages/404.tsx' },
];
```

### favicon

站点 `favicon` 图标文件。

当存在 `src/favicon.(ico|gif|png|jpg|jpeg|svg|avif|webp)` 文件时，将会自动在产物中添加站点 `favicon` ：
