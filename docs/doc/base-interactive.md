---
group:
  title: 基础
title: 前后端交互
order: 3
---

# 前后端交互

我们基于 UmiJs 的 Request 封装了一套完整的请求响应规范

前端请求基础配置参考： <a href="https://umijs.org/docs/max/request" target="_blank" rel="noreferrer">Umi Js 请求</a>

ThinkPHP 响应基础： <a href="https://doc.thinkphp.cn/v8_0/response.html" target="_blank" rel="noreferrer">ThinkPHP 响应</a>

## 响应格式

```ts
// 与后端约定的响应数据格式
interface ResponseStructure<T> {
  // 本次请求是否成功
  success: boolean;
  // 响应数据
  data: T;
  // 错误码
  errorCode?: number;
  // 响应消息
  msg?: string;
  // 错误显示类型
  showType?: ErrorShowType;
  // 状态码
  status?: number;
}

// 错误处理方案： 错误类型
enum ErrorShowType {
  // 静态响应
  SILENT = 0,
  // 弹出警告
  WARN_MESSAGE = 1,
  // 弹出错误
  ERROR_MESSAGE = 2,
  // 弹出提示
  NOTIFICATION = 3,
  // 其它操作
  REDIRECT = 9,
}
```

## 请求

请求一般是由前端 js 发起的请求，我们约定前端请求接口目录 `web\admin\src\services`，所有的前端请求都在这里面定义

例如我们在前端定义接口：

```ts
// web\admin\src\services\test 目录下新建文件 index.ts

// 引入基础请求
import { request } from '@umijs/max';
import React from 'react';

// 定义异步函数 GET 请求
export async function getUser() {
  return request<ResponseStructure<any>>('/admin/index', {
    method: 'get', // 请求方式
  });
}

// 定义异步函数 POST 请求
export async function saveUser(date: { [key: string]: any }) {
  return request<ResponseStructure<any>>('/admin/index', {
    method: 'post', // 请求方式
    date, // 荷载数据
  });
}

// 在其它文件中发送请求 web\admin\src\pages\index.tsx
import { getUser, saveUser } from '@/services/test';

// 获取用户
const get = async () => {
  let res = await getUser();
  // 执行成功逻辑，请求失败抛出异常，无需处理
};
```

### 错误处理

在请求失败的时候，系统会根据返回的 错误处理方案： 错误类型，来做出相应的动作，所以在前端中，你无需关心请求失败后的操作，如果请求失败后需要手动处理错误，请使用 try{}catch(){}

## 响应

我们封装了 `trait RequestJson` 来允许你在任何情况下响应数据，与前端约定响应格式，你在任何地方都可以通过它来返回前端数据，并且达到你想要的效果

### 在控制器中使用

```php
// 继承后台基础控制器
use app\common\controller\AdminController as Controller;

// 返回成功响应
return $this->success();

// 返回警告响应
return $this->warn();

// 返回失败响应
return $this->error();

```

### 在其它地方使用，抛出 HTTP 响应，中断程序运行

```php
// 引入 RequestJson;

/**
  * 支持抛出响应中断程序和返回 json
  * @param string $message 响应内容
  * @param array $data 响应数据
  * @param int $status 响应状态码
  * @param string $type 响应类型 render | throw
  * @return Json
  */

use RequestJson;

// 抛出成功响应
$this->throwSuccess('');

// 抛出警告响应
$this->throwWarn('');

// 抛出失败响应
$this->throwError('');

```

相信可以轻松的使用他！
