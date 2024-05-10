---
group:
  title: 基础
  order: 0
title: 开发教程
order: 2
---

# 开发教程

如果你还不清楚 React 和 Think 的搭配使用，推荐你阅读本文章以便快速上手开发项目

## 新增页面

:::info
我们在开发过程中，新增页面是必不可少的，我们的页面文件在前端项目的 `src\pages` 中，其中的每一个 .tsx 文件，都可以当作一个页面
前端项目我们推荐使用 `大驼峰名字文件夹 \ 页面文件 index.tsx 的方式` 来定义页面，比如` Name \ index.tsx`
:::

### 新增页面前端文件

在 pages\backend 文件夹下 新建页面文件 `Name \ index.tsx` ，并且插入以下代码

```tsx | pure
// index.tsx

import React from 'react';

const Name: React.FC = () => {
  return <>你好世界</>;
};
```

这样你就新建了一个路径为 `/name` 的文件,如果你启动了前端以及后端服务的话，你就可以通过 http://127.0.0.1:3000/name 来访问它

### 添加菜单路由权限

1、 在菜单`管理员`、`菜单权限管理` 中新增一级菜单 填入路由地址 `\name`

2、 如果你是管理员账户，则不用分配权限，如果不是，需要在管理员分组中将刚才所添加的菜单分配给你的账户所在的分组

3、刷新菜单，你会看到导航栏出现你刚才所添加的页面

然后你就可以通过 http://127.0.0.1:3000/name 来顺利的访问它

:::info
你可能好奇前端的路由是怎么加入进去的，推荐你阅读[路由](/doc/route) 章节来了解它
:::

### Antd 的使用

上面的教程告诉你怎么来创建页面，在这里告诉你如何使用 Antd 组件库 ，我们可以访问 https://ant-design.antgroup.com/index-cn 来查看所有组件，下面列举一些简单的组件

```tsx | pure
// Name/index.tsx
import React from 'react';

// 引入相关组件
import { Button, Space } from 'antd';

const Name: React.FC = () => {
  return (
    <Space wrap>
      {/* 使用组件 */}
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Space>
  );
};
```

上面的代码你可以看到页面上多出了几个按钮，当然你也可以访问 https://ant-design.antgroup.com/index-cn 来使用更多组件

## 新增 PHP 控制器

:::info
控制器是指控制器接受用户的输入并调用模型去完成用户的需求，控制器是程序的主要组成部分，它决定了程序改怎么执行。你可以通过 <a href="https://doc.thinkphp.cn/v8_0/controller_define.html" target="_blank" rel="noreferrer">Think PHP 文档</a> 来了解 Think PHP 中的控制器，
这里只做简单介绍
:::

控制器文件通常放在后端文件夹 app/admin/controller 下面，类名和文件名保持大小写一致，并采用驼峰命名（首字母大写）。

我们在 `app/admin/controller` 文件夹下新建文件 `HelloWord.php` 插入以下 PHP 代码

```
<?php

namespace app\admin\controller;

use app\common\controller\ApiController as Controller;

class HelloWord extends Controller
{
    public function initialize(): void
    {
        parent::initialize();
    }

    public function index(): void
    {
        return '你好世界'
    }
}
```

这样你就新建了一个名称为 `HelloWord` 的控制器,如果你启动了前端以及后端服务的话，你就可以通过 http://127.0.0.1:8000/api.php/helloword 来访问它

下一章我们会了解前后端怎么来交互
