---
group: 基础教程
title: Swagger 文档
order: 8
description: XinAdmin文档 - Swagger 文档，XinAdmin 使用 php-swagger 生成版本 3.0 或 3.1 中的 OpenAPI 文档。
---

XinAdmin 提供了开箱即用的 `php-swagger` 支持，你可以直接在代码中使用 `php-swagger` 生成版本 3.0 或 3.1 中的 `OpenAPI` 文档。
使用 swagger-php 可以在 PHP 源文件中编写 API 文档，这有助于使文档保持最新状态。
并且使用 `Redocly redoc` 作为 swagger 的文档展示。

## 访问文档

我们在 `laravel` 路由中已经配置好了`swagger`文档的路由，你可以直接访问 `/doc` 来查阅文档。

```php
# 访问地址 http://{youhost}/doc
# http://127.0.0.1:8000/doc
```

## 使用方法

在 `XinAdmin` 中，我们使用 `php-swagger` 来生成 `OpenAPI` 文档，你可以在 `XinAdmin` 中使用 `php-swagger` 来生成 `OpenAPI` 文档。

我们在`BaseControler.php` 中提供了最基础的配置：

```php
#[OA\Info(
    version: '1.0.0',
    description: 'XinAdmin [ A Full stack framework ] <br> Copyright (c) 2023~2024 http://xinadmin.cn All rights reserved. <br> Apache License ( http://www.apache.org/licenses/LICENSE-2.0 ) <br> Author: 小刘同学 <2302563948@qq.com> <br>',
    title: 'XinAdmin DOCUMENTS',
)]
abstract class BaseController {

  #...

}
```

你可以在你的控制器的方法中，直接使用 `@OA\` 注释来生成 `OpenAPI` 文档。

:::info{title=info}
使用命名空间别名可以简化键入并提高可读性。

所有属性都在命名空间中。OpenApi\Attributes
:::

引入 `OpenApi\Attributes` 命名空间

```php
use OpenApi\Attributes as OA;
```

嵌套使用：

```php


#[OA\Get(
    path: '/api/users',
    responses: [
        new OA\Response(response: 200, description: 'AOK'),
        new OA\Response(response: 401, description: 'Not allowed'),
    ]
)]
public function users() { /* ... */ }
```

未嵌套：

```php
#[OA\Get(path: '/api/users')]
#[OA\Response(response: 200, description: 'AOK')]
#[OA\Response(response: 401, description: 'Not allowed')]
public function users() { /* ... */ }
```

更多示例和使用说明请参考：[https://zircote.github.io/swagger-php/guide/](https://zircote.github.io/swagger-php/guide/)
