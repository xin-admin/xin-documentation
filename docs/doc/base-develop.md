---
group:
  title: 基础
title: 开发教程
order: 2
---

# 开发教程

:::info
如果你还不清楚 React 和 Think 的搭配使用，推荐你阅读本文章以便快速上手开发项目
:::

我们的框架是一个全栈开发框架，包含的技术栈比较广，如果你是作为学习使用，相信很快就可以上手，但是如果你想用于工作开发项目，我们还是强烈建议你先去了解一下 ThinkPHP 和 React

本教程将引导您了解如何结合使用 React 和 ThinkPHP 来进行 Web 应用开发。我们将逐步介绍新增页面、添加路由、组件的使用和后端的控制器、模型以及数据验证，我们通过一下几点来对我们的框架有一个基本的了解

- 新增页面
- 添加路由
- 组件的使用
- 后端控制器
- 后端模型
- 后端数据验证

在 React 应用中新增页面通常意味着创建新的组件。我们来创建一个示例页面。

## 新增页面

页面文件的位置放在 `web/src/pages` 目录下，它包含了前端 web 页面和后端 web 页面，本文以后端页面为例，需要你先在开发环境中登录到后台，以便实时预览开发效果

<img description="前端页面目录" src="https://file.xinadmin.cn/doc/develop/1.png"  alt=""/>

我们在开发过程中，新增页面是必不可少的，我们的页面文件在前端项目的 `src/pages` 中，其中的每一个 .tsx 文件，都可以当作一个页面

前端项目我们使用 `大驼峰名字文件夹 / index.tsx ` 的方式来定义页面，比如` Name / index.tsx`

<img description="前端页面目录" src="https://file.xinadmin.cn/doc/develop/2.png"  alt=""/>

在 pages/backend 文件夹下 新建页面文件 `Name / index.tsx` ，并且插入以下代码

```tsx | pure
// index.tsx

import React from 'react';

const Name: React.FC = () => {
  return <div>欢迎来到新页面</div>;
};

export default Name;
```

这样你就新增了一个 React 组件，在我们的框架中，它会被自动注册到路由表中，并不需要你手动来添加路由，至此你可以通过 web 路径 `http://127.0.0.1:3000/name ` 访问到它

<img description="前端页面目录" src="https://file.xinadmin.cn/doc/develop/3.png"  alt=""/>

当你访问进去的时候你会发现页面中出现没有权限的页面，下面我们来学习如何增加当前页面的权限

## 添加菜单路由权限

我们系统拥有完善的权限校验，路由权限也是其中一部分，当然你可以通过添加权限白名单来忽略当前路由的权限

<img description="前端页面目录" src="https://file.xinadmin.cn/doc/develop/4.png"  alt=""/>

在图片文件的数组中添加 `/name` 这样就把这个路径排除在路由权限之外，适用于官网首页、登录页等不需要用户鉴权的页面，添加进去后，你在刷新页面，就可以访问到刚才新建的页面中

<img description="前端页面目录" src="https://file.xinadmin.cn/doc/develop/5.png"  alt=""/>

当然我们最经常用的还是需要对页面进行权限控制

页面的权限可以通过后台来配置，以实现不同用户看到不同页面的目的，下面我们来添加 name 页面的权限

权限菜单可以在 后台->管理员->菜单权限管理 中查看

<img description="前端页面目录" src="https://file.xinadmin.cn/doc/develop/6.png"  alt=""/>

进入菜单权限管理，新建一个菜单权限

<img description="新增一级菜单" src="https://file.xinadmin.cn/doc/develop/7.png"  alt=""/>

如果你是管理员账户，则不用分配权限，如果不是，需要在管理员分组中将刚才所添加的菜单分配给你的账户所在的分组

刷新菜单，你会看到导航栏出现你刚才所添加的页面

然后你就可以通过 http://127.0.0.1:3000/name 来顺利的访问它

:::info
你可能好奇前端的路由是怎么加入进去的，推荐你阅读[路由](/doc/route) 章节来了解它
:::

## Antd 组件 的使用

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

## 后端控制器

ThinkPHP 后端控制器负责处理 HTTP 请求并返回响应。
:::info
控制器是指控制器接受用户的输入并调用模型去完成用户的需求，控制器是程序的主要组成部分，它决定了程序改怎么执行。你可以通过 <a href="https://doc.thinkphp.cn/v8_0/controller_define.html" target="_blank" rel="noreferrer">Think PHP 文档</a> 来了解 Think PHP 中的控制器，
这里只做简单介绍
:::

控制器文件通常放在后端文件夹 app/admin/controller 下面，类名和文件名保持大小写一致，并采用驼峰命名（首字母大写）。

我们在 `app/admin/controller` 文件夹下新建文件 `HelloWord.php` 插入以下 PHP 代码

```php
// app/admin/controller/HelloWord.php

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
        return '你好世界';
    }
}
```

这样你就新建了一个名称为 `HelloWord` 的控制器,如果你启动了前端以及后端服务的话，你就可以通过 http://127.0.0.1:8000/api.php/helloword 来访问它

## 后端模型

后端模型负责与数据库交互，获取数据，具体参考 Think 模型

```php
// app/admin/model/HelloWordModel.php

<?php

namespace app\index\model;
use think\Model;

class HelloWordModel extends Model {
    // 模型的代码逻辑
}

```

## 验证器

使用 ThinkPHP 的验证功能可以确保后端接收到的数据是合法和正确的。

```php

// app/admin/validate/HelloWordValidate.php

namespace app\admin\validate;
use think\Validate;

class HelloWordValidate extends Validate {
    protected $rule = [
        // 定义验证规则
        '字段名' => '验证规则',
    ];
}


```

## 在控制器中使用验证器

```php

// app/admin/controller/HelloWord.php 更新代码

<?php

namespace app\admin\controller;

use app\common\controller\ApiController as Controller;
use app\admin\validate\HelloWordValidate;

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

    public function add() {
        $data = input('post.');
        $validate = new HelloWordValidate();
        if (!$validate->check($data)) {
            return $validate->getError();
        }
        // 保存数据逻辑
    }
}

```
