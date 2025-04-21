---
group: 基础教程
title: 请求响应
order: 0
description: XinAdmin文档 - XinAdmin 封装了一整套的请求与响应，使得开发者在前后端的请求中如鱼得水。
---

XinAdmin 封装了一整套的请求与响应，使得开发者在前后端的请求中如鱼得水。

前端使用`UmiJs` 的 `request` 方案，它基于 `axios` 和 `ahooks` 的 `useRequest` 提供了一套统一的网络请求和错误处理方案。

后端使用 `Laravel` 的 JSON 响应与错误处理，将前后端的请求响应统一，你可以很方便的在代码中构建请求与响应。

## 前端请求

前端通过 `request` 来执行请求，所有的请求文件都存放在前端项目目录的`src/services`目录中，以下是一个简单的请求示例：

```ts | purl
import { request } from '@umijs/max';

export async function api(data: any) {
  return request<API.ResponseStructure<any>>('/you/request/url', {
    method: 'post',
    data,
  });
}
```

在上面的示例中，通过 Url 和请求体的配置，来创建了一个请求，你可以在业务代码中导入并使用。

你可以根据你的业务需要，修改请求的配置，如请求头、请求体、请求方法等。

如果你需要根据你的业务进行自定义请求或者需要更复杂的配置，你可以参考前端专项 [请求](/laravel/frontend-request)。

## 后端响应

在后端，我们使用了 `Laravel` 的 `JSON` 响应与错误处理，将前后端的请求响应统一，你可以很方便的在代码中构建请求与响应。

你可以在控制器的方法中，直接返回 `JSON` 响应，以下是一些常用的响应：

```php
// 返回成功响应
return $this->success([]);

// 返回失败响应
return $this->error('错误信息');

// 返回警告响应
return $this->warn('警告信息');

// 返回通知响应
return $this->notification('通知标题', '通知描述');
```

你也可以使用 `throw` 类型响应来终端程序的运行：

```php
// 抛出成功响应，中断程序运行
$this->throwSuccess([]);

// 抛出异常响应，中断程序运行
$this->throwError('错误信息');

// 抛出警告响应，中断程序运行
$this->throwError('警告信息');

```

## 约定结构

我们将请求响应结构进行了统一，通过以下数据结构进行约定，前端使用以下数据处理响应后的逻辑，并且执行相应的错误处理。

请求返回类似以下的结构：

```ts | purl
interface ResponseStructure<T> {
  success: boolean;
  data: T;
  errorCode?: number;
  msg?: string;
  showType?: number;
  status?: number;
  description?: string;
  placement?:
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight';
}
```

下面是一些常见的字段说明：

- `success`: 请求是否成功，返回 `true` 或者 `false`
- `data`: 请求返回的数据
- `errorCode`: 错误码
- `msg`: 错误信息
- `showType`: 错误显示类型，只有在`success` 为 `false` 时有效
  ```ts
  // 消息的展示形态为 AntDesign 的 message，通知的展示形态为 AntDesign 的 notification，当消息类型为通知时，可以使用 placement 修改通知位置
  enum ErrorShowType {
    SUCCESS_MESSAGE = 0, // 成功消息
    WARN_MESSAGE = 1, // 警告消息
    ERROR_MESSAGE = 2, // 失败消息
    SUCCESS_NOTIFICATION = 3, // 成功通知
    WARN_NOTIFICATION = 4, // 警告通知
    ERROR_NOTIFICATION = 5, // 失败通知
    SILENT = 99, // 无状态
  }
  ```
- `status`: 状态码
- `description`: 错误描述
- `placement`: 错误显示位置，在`success` 为 `false` 时有效

## 异常处理

我们通过对 `Laravel` 程序全局异常捕捉，将所有的异常都通过上面约定的数据格式返回，你也可以自定义异常的处理方式

如果你需要自定义异常的处理方式，或者对其进行日志记录，请参考后端专项[错误处理](/laravel/backend-error)

在前端应用程序中，我门通过对`Request`的二次封装，使所有经过`Request`的响应都会在系统中通过约定的状态进行展示，如果你是使用`fetch`，需要自己手动来处理异常逻辑。

更多前端的请求说明，请参考前端专项[请求](/laravel/frontend-request)
