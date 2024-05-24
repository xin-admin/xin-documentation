---
group:
  title: 前端进阶
title: 表格开发
order: 3
---

# 表格组件

:::success
非常感谢 AntDesign 以及其团队，提供 Ant ProComponents 组件库
:::

Xin Table 组件 二次封装了 Ant ProComponents Table 组件，可以完美配合 CRUD，开发一个表单表格只用一个 columns 表头对象，并且可以实现表单表格项的高度自定义。
这里只对 Ant ProComponents Table 做简单讲解，具体请查阅 [高级表格](https://procomponents.ant.design/components/table)

代码示例：

```tsx | pure
import XinTable from '@/components/XinTable';
import { ProFormColumnsAndProColumns } from '@/components/XinTable/typings';
import XinDict from '@/components/XinDict';
import { useAccess, useModel } from '@@/exports';
import { Avatar } from 'antd';
import UploadImgItem from '@/components/XinForm/UploadImgItem';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import UpdateModel from '@/pages/Admin/List/components/UpdateModel';
import UpdatePassword from '@/pages/Admin/List/components/UpdatePassword';
import { listApi } from '@/services/admin/table';
import { Access } from '@umijs/max';

// 接口 Api 对应的增删改查接口为：list|add|delete|edit
const api = '/admin';

// 数据接口
interface ResponseAdminList {
  id?: number;
  username?: string;
  nickname?: string;
  avatar?: string;
  email?: string;
  mobile?: string;
  status?: number;
  group_id?: number;
  sex?: number;
  create_time?: string;
  update_time?: string;
}

const Table: React.FC = () => {
  // 字典
  const { getDictionaryData } = useModel('dictModel');

  // 表头
  const columns: ProFormColumnsAndProColumns<ResponseAdminList>[] = [
    {
      title: '用户ID', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'id', // 数据值索引
      hideInForm: true, // 在表单中隐藏
    },
    {
      title: '用户名', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'username', // 数据值索引
      valueType: 'text', // 数据类型
      formItemProps: { rules: [{ required: true, message: '该项为必填' }] }, // 传递给 Form.Item 的配置，表单项的属性，例子中 rules 为表单验证规则
    },
    {
      title: '昵称', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'nickname', // 数据值索引
      valueType: 'text', // 数据类型
      formItemProps: { rules: [{ required: true, message: '该项为必填' }] }, // 传递给 Form.Item 的配置，表单项的属性，例子中 rules 为表单验证规则
    },
    {
      title: '性别', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'sex', // 数据值索引
      valueType: 'radio', // 数据类型
      request: async () => getDictionaryData('sex'), // 远程下拉数据，这里使用了 sex 字典
      render: (_, date) => <XinDict value={date.sex} dict={'sex'} />, // 表格项渲染，这里使用了 sex 字典
    },
    {
      title: '邮箱', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'email', // 数据值索引
      valueType: 'text', // 数据类型
      formItemProps: { rules: [{ required: true, message: '该项为必填' }] }, // 传递给 Form.Item 的配置，表单项的属性，例子中 rules 为表单验证规则
    },
    {
      title: '头像', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'avatar', // 数据值索引
      hideInSearch: true, // 在搜索中隐藏
      valueType: 'text', // 数据类型
      renderFormItem: (schema, config, form) => (
        <UploadImgItem
          form={form}
          dataIndex={'avatar'}
          api={'/admin.php/system.file/upload'}
        ></UploadImgItem>
      ),
      render: (_, data) => (
        <Avatar
          src={data.avatar}
          style={{ backgroundColor: '#4ac4f4' }}
          icon={<UserOutlined />}
        />
      ),
    },
    {
      title: '管理员分组', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'group_id', // 数据值索引
      valueType: 'treeSelect', // 数据类型
      formItemProps: { rules: [{ required: true, message: '该项为必填' }] }, // 传递给 Form.Item 的配置，表单项的属性，例子中 rules 为表单验证规则
      fieldProps: {
        // 查询表单的 props
        fieldNames: { label: 'name', value: 'id', children: 'children' },
      },
      request: async () => {
        // 自定义远程下拉值
        let res = await listApi('/adminGroup/list');
        return res.data.data;
      },
    },
    {
      title: '状态', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'status', // 数据值索引
      valueType: 'radioButton', // 数据类型
      valueEnum: {
        // 自定义按钮的枚举值
        0: {
          text: '禁用',
          status: 'Error',
        },
        1: {
          text: '启用',
          status: 'Success',
        },
      },
      formItemProps: { rules: [{ required: true, message: '该项为必填' }] }, // 传递给 Form.Item 的配置，表单项的属性，例子中 rules 为表单验证规则
    },
    {
      title: '手机号', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'mobile', // 数据值索引
      valueType: 'text', // 数据类型
      formItemProps: { rules: [{ required: true, message: '该项为必填' }] }, // 传递给 Form.Item 的配置，表单项的属性，例子中 rules 为表单验证规则
    },
    {
      title: '密码', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'password', // 数据值索引
      valueType: 'password', // 数据类型
      hideInTable: true,
      hideInSearch: true,
      formItemProps: { rules: [{ required: true, message: '该项为必填' }] }, // 传递给 Form.Item 的配置，表单项的属性，例子中 rules 为表单验证规则
    },
    {
      title: '确认密码', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      dataIndex: 'rePassword', // 数据值索引
      valueType: 'password', // 数据类型
      hideInTable: true,
      hideInSearch: true,
      formItemProps: {
        rules: [
          // 传递给 Form.Item 的配置，表单项的属性，例子中 rules 为表单验证规则
          { required: true, message: '该项为必填' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次输入的密码不同'));
            },
          }),
        ],
      },
    },
    {
      valueType: 'date', // 数据类型
      title: '创建时间', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      order: 1, // 排序
      hideInForm: true, // 在表单中隐藏
      dataIndex: 'create_time', // 数据值索引
    },
    {
      valueType: 'date', // 数据类型
      title: '修改时间', // 表格头 | 搜索表单项 | 新增表单项 | 修改表单项
      hideInForm: true, // 在表单中隐藏
      dataIndex: 'update_time', // 数据值索引
    },
  ];

  const access = useAccess();

  return (
    <>
      <XinTable<ResponseAdminList>
        headerTitle={'管理员列表'} /* 表格头部标题 */
        tableApi={api} /* 表格Api */
        columns={columns} /* 表格属性 */
        accessName={'admin.list'} /* 权限标识 */
        editShow={false} /* 是否显示编辑 */
        operateRender={(
          record, // 自定义操作栏按钮渲染
        ) => (
          <>
            <Access accessible={access.buttonAccess('admin.list.edit')}>
              <UpdateModel record={record}></UpdateModel>
            </Access>
            <Access accessible={access.buttonAccess('admin.list.updatePwd')}>
              <UpdatePassword record={record}></UpdatePassword>
            </Access>
          </>
        )}
      />
    </>
  );
};

export default Table;
```
