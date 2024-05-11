---
group:
  title: 前端进阶
  order: 1
title: 字典组件
order: 4
---

# 字典组件

    我们提供了完善的字典配置，来灵活配置你的下拉框、单选、多选等枚举类表单
    在很多时候，简单的配置不需要单独新增数据表，如：电脑分类、性别、学历等
    `XinDict` 组件可以灵活的运用于 `XinTable`，以及其它场景
    采用字典缓存策略，减少对服务器的请求

## 字典简介

我们将字典分为两部分，一种是请求，一种是显示，请求用于表单，以及表单项的生成，显示用于表格和其它组件的显示

完整示例

```tsx | pure
import { useModel } from '@umijs/max';
const { getDictionaryData } = useModel('dictModel');
const columns = [
  {
    title: '性别',
    dataIndex: 'sex',
    valueType: 'radio',
    request: async () => getDictionaryData('sex'), // 返回字典的枚举，通常用于XinTable的request
    render: (_, date) => <XinDict value={date.sex} dict={'sex'} />, // 表格的渲染
  },
];
```

## XinDict 组件参数

| 参数  | 类型   | 必填 | 说明                                                          |
| ----- | ------ | ---- | ------------------------------------------------------------- |
| value | string | √    | 字典值的 value，用于回显数据，一般为表格的 dataIndex          |
| dict  | string | √    | 字典 code 配置，比如通过性别字典编码：sex，可以直接渲染出组件 |

## getDictionaryData

getDictionaryData 用于获取字典的枚举对象，可以方便的与 XinTable 的 request 结合

当然你也可以将这个特性用于其它环境中
