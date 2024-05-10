---
group:
  title: 前端进阶
  order: 1
title: 默认配置文件
order: 6
---

# 默认配置文件

为了项目代码的简洁和可读性，我们将前端一些配置文件放到了 src/default 目录之下

## appList.ts

ProLayout 配置中的 appList 跨站点导航列表，[参考文档](https://procomponents.ant.design/components/layout#prolayout)

```ts | prue
export default [
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', // 跨站点项图标
    title: 'Ant Design', // 跨站点项标题
    desc: '杭州市较知名的 UI 设计语言', // 描述
    url: 'https://ant.design', // 地址
  },
];
```

## initialState.ts

Umi Js 的 全局初始化状态， [参考文档](https://umijs.org/docs/max/data-flow#%E5%85%A8%E5%B1%80%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81)

```ts | prue
const defaultInitialState: initialStateType = {
  access: [], // 权限
  isLogin: false, // 是否登录
  isAccess: false, // 是否拥有访问权限
  drawerShow: false,
  fetchUserInfo, // 获取会员信息
  fetchAdminInfo, // 获取管理员信息
  settings: appSettings, // 默认布局设置
  borderShow: true, // 边框显示
  app: localStorage.getItem('app'), // 当前应用( 客户端-app | 管理端-admin)
  webSetting: {
    // 站点设置
    logo: 'https://file.xinadmin.cn/file/favicons.ico',
    title: 'Xin Admin',
  },
};

export default defaultInitialState;
```

## noAuthRoute.ts

不进行权限校验的路由地址，权限验证白名单

## routes.ts

基础路由文件，可以单独设置路由，适用于不参与 Layout 的路由自定义

## settings.ts

默认布局配置文件，参考文档[ UmiMax 布局菜单](https://umijs.org/docs/max/layout-menu)，[页面布局](/doc/layout)
