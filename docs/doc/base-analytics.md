---
group:
  title: 基础
title: 站点统计
order: 5
---

# 站点统计

Xin Admin 基于 `@umijs/max`，并且支持 `@umijs/max` 的站点统计

目前支持 [Google Analytics](https://analytics.google.com/analytics/web/) 和[百度统计](https://tongji.baidu.com/web/welcome/login)

## 启用方式

通过配置文件的方式来配置站点的统计，配置文件地址：`xin-web\config\config.ts`

举例：

```ts
{
  analytics: {
    ga_v2: 'G-abcdefg', // google analytics 的 key (GA 4)
    baidu: 'baidu_tongji_key',

    // 若你在使用 GA v1 旧版本，请使用 `ga` 来配置
    ga: 'ga_old_key'
  }
}
```

### 环境变量

[Google Analytics 4](https://support.google.com/analytics/answer/10089681) 的 key 也可以通过环境变量 `GA_V2_KEY` 来配置，旧版本为 `GA_KEY` 。

具体文档及使用方式参考 [UmiJs 站点统计](https://umijs.org/docs/max/analytics)
