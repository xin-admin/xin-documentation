---
group:
  title: 开发技巧
  order: 6
type:
  title: 表单表格
  order: 0
order: 0
title: XinTable 自定义表单渲染
---

XinTable 新增与编辑表单使用 Ant Design Pro Components 中的 SchemaForm， 接口与 SchemaForm 保持一致，详细参考[Schema Form - JSON 表单](https://procomponents.ant.design/components/schema-form)

`renderFormItem` 用来自定义表单项，自定义编辑模式，返回一个 ReactNode，会自动包裹 value 和 onChange

示例代码

```tsx | pure
const columns: ProFormColumnsType<any>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    initialValue: '必填',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    renderFormItem: () => {
      return <Input></Input>;
    },
    width: 'm',
  },
];
```
