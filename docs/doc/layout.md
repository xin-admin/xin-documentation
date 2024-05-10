---
group:
  title: 前端进阶
  order: 1
title: 页面布局
order: 2
---

# 页面布局

参考文档[Umi Max 布局与菜单](https://umijs.org/docs/max/layout-menu)

XinAdmin 采用 Umi Max 的布局与菜单，将项目分为 客户端 和 管理端 双布局，由管理端权限菜单配置动态的管理查单，不仅可以实现高度的自定义，也可以享受 Antd 生态带来的便捷

- 默认为 Ant Design 的 Layout [@ant-design/pro-layout](https://www.npmjs.com/package/@ant-design/pro-layout)，支持它全部配置项。
- 顶部导航/侧边栏菜单根据路由中的配置自动生成。

## 默认配置

项目文件 `xin-web/src/default/setting.ts` 保存着布局的默认配置，配置项参考 Ant Design 的 Layout [@ant-design/pro-layout](https://www.npmjs.com/package/@ant-design/pro-layout)

```ts | pure
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Ant Design Pro',
  pwa: true,
  logo: 'https://file.xinadmin.cn/file/favicons.ico',
  iconfontUrl: '',
};
```

## appSettings 客户端配置

```ts | pure
export const appSettings: ProLayoutProps = {
  navTheme: 'light',
  layout: 'top',
  contentWidth: 'Fixed',
  fixedHeader: true,
  token: {
    pageContainer: {
      paddingBlockPageContainerContent: 0,
      paddingInlinePageContainerContent: 0,
    },
  },
  fixSiderbar: true,
  splitMenus: false,
  siderMenuType: 'sub',
};
```

客户端使用顶部导航和固定头布局，你可以在文件 appSettings 中自定义它

## adminSettings 管理端布局

```ts | pure
export const adminSettings: ProLayoutProps = {
  navTheme: 'light',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  token: {
    pageContainer: {
      paddingBlockPageContainerContent: 24,
      paddingInlinePageContainerContent: 24,
    },
  },
};

export default Settings;
```

管理端使用侧边导航和固定头布局，你可以在文件 adminSettings 中自定义它
