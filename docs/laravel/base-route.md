---
group:
  title: 基础教程
  order: 5
title: 路由
order: 1
description: XinAdmin文档 - XinAdmin 路由模块。
---

XinAdmin 作为前后端分离的框架，路由也分为前端和后端两部分，第一是前端页面的路由，指定你可以访问到的页面视图，第二是后端接口的路由，用于与 Laravel
Api 服务器进行交互。而菜单则是在后端管理系统中常见的配置，我们通过菜单来访问前端页面，通常已侧边栏的形式展示出来，点击菜单项，即可访问对应的页面。

## 前端路由

### 约定式路由

前端页面路由是基于 UmiJs 的文件路由系统，约定在前端项目 `src/pages` 目录下，放置你的页面文件，文件名就是路由地址，
它根据文件系统自动注册路由，pages 文件夹下的所有 tsx 文件，都将被注册到路由中，比如 `src/pages/index.tsx`，表示访问 `/index` 的页面：

```text
.
  └── pages
    ├── index.tsx
    └── users.tsx
```

会得到以下路由配置:

```ts | pure
[
  { path: '/', component: '@/pages/index' },
  { path: '/users', component: '@/pages/users' },
];
```

:::info
使用约定式路由时，约定 src/pages 下所有的 tsx 文件即路由。默认忽略了 `components` 和 `models` 文件夹，如果你需要修改默认规则，
可以使用 `UmiJS` 的 [conventionRoutes](https://umijs.org/docs/api/config#conventionroutes) 配置。
:::

### 动态路由

`Umi Js` 约定，带 `$` 前缀的目录或文件为动态路由。若 `$` 后不指定参数名，则代表 `*` 通配，比如以下目录结构：

比如：

- src/pages/users/$id.tsx 会成为 /users/:id
- src/pages/users/$id/settings.tsx 会成为 /users/:id/settings

举个完整的例子，比如以下文件结构，

```text
+ pages/
  + foo/
    - $slug.tsx
  + $bar/
    - $.tsx
  - index.tsx
```

会生成路由配置如下：

```ts | pure
[
  { path: '/', component: '@/pages/index.tsx' },
  { path: '/foo/:slug', component: '@/pages/foo/$slug.tsx' },
  { path: '/:bar/*', component: '@/pages/$bar/$.tsx' },
];
```

### 路由参数

你可以使用 `useParams` 获取动态路由中的参数，比如路由配置为 `/users/:id` ，当前访问的路径为 `/users/1` ，你可以使用 `useParams` 获取 `id` 参数：

```tsx | pure
// 当前 location /users/1
import { useParams } from '@umijs/max';

export default () => {
  const params = useParams();
  console.log(params.id);
  // 输出：1
};
```

你也可用使用 `useSearchParams` 获取查询参数，比如路由配置为 `/users?id=1` ，你可以使用 `useSearchParams` 获取 `id` 参数：

```tsx | pure
import { useSearchParams } from '@umijs/max';
export default () => {
  const [searchParams, setSearchParams] = useSearchParams();

  searchParams.get('a'); // b
  searchParams.toString(); // a=b

  setSearchParams({ a: 'c', d: 'e' }); // location 变成 /comp?a=c&d=e
};
```

更多使用方式请参考 [UmiJs Route](https://umijs.org/docs/guides/routes)

## 后端路由

Laravel 中的路由 通过 `Illuminate\Support\Facades\Route` 注册，基本的路由知识，你可以参考 [Laravel Route](https://laravel.com/docs/12.x/routing)，
在 XinAdmin 中，我们对 Laravel 的路由进行了扩展，现在你可以使用注解，直接在控制器中注册路由，不需要格外的路由文件，并且自动与方法进行绑定，支持路由中间件与权限中间件。

:::info
`Attribute` 注解为 PHP8 的新特性，如果你不了解，请参考 PHP 文档 [PHP Attribute](https://www.php.net/manual/class.attribute.php)
:::

### 基本使用

注解路由通过 PHP8 注解，通过解析器对所有的控制器进行解析并且注册路由，以下是一个基本的示例：

```php
use Xin\AnnoRoute\Attribute\GetMapping;
use Xin\AnnoRoute\Attribute\RequestMapping;

#[RequestMapping('/api')]
class UserController extends BaseController
{

    #[GetMapping]
    public function index(){
        return $this->success();
    }

}
```

每一个需要对外访问的控制器类都需要注册一个 `RequestMapping` 注解，它用来定义当前控制器需要被解析器解析，并且注册路由，如果你没有在你的控制器类中添加
`RequestMapping` 注解，则方法中的路由注解不会生效，在上面的示例中，`UserController` 将被解析器解析，并且注册路由，路由前缀为 `/api`，

`GetMapping` 注解表示当前方法将注册一个 `GET` 请求，它将自动与当前方法绑定，类似 Laravel 中注册以下路由：

```php
Route::get('/api', [UserController::class, 'index']);
```

方便的是它不用格外的书写定义文件，只需要一个注解属性就可以完成路由的注册。

你也可以为当前方法定义自有的路径，它们都将自动包含 `RequestMapping` 的前缀，比如：

```php
// UserController
#[GetMapping('/show')]
public function show(){
    return $this->success();
}
```

上面的示例类似注册以下路由：

```php
Route::get('/api/show', [UserController::class, 'show']);
```

### 可用的路由注解

XinAdmin 已经支持常用的集中请求注解

```php
// 注册一个 Get 请求
use Xin\AnnoRoute\Attribute\GetMapping;

// 注册一个 Put 请求
use Xin\AnnoRoute\Attribute\PutMapping;

// 注册一个 Post 请求
use Xin\AnnoRoute\Attribute\PostMapping;

// 注册一个 Delete 请求
use Xin\AnnoRoute\Attribute\DeletsMapping;
```

### 绑定多个路由

当然，你也可以为一个方法定义多个路由：

```php
// UserController
#[GetMapping, PostMapping]
public function show(){
    return $this->success();
}
```

上面的示例类似注册以下路由：

```php
Route::get('/api/show', [UserController::class, 'show']);
Route::post('/api/show', [UserController::class, 'show']);
```

### 路由参数

路由映射也支持路由参数，您可能需要从 URL 中捕获用户的 ID，您可以通过定义路由参数来实现：

```php
#[GetMapping('/{id}')]
public function show($id){
    return $this->success();
}
```

它将自动将 URL 中的参数传递给方法。 同样它也支持 Laravel 路由的可选参数：

```php
#[GetMapping('/{name?}')]
public function show(?string $name = 'John'){
    return $this->success();
}
```

### 路由中间件

所有的路由映射都支持中间件，你可以通过注解类的 `middleware` 参数为路由定义一个中间件，比如：

```php
#[GetMapping(middleware: EnsureTokenIsValid::class)]
public function show(){
    return $this->success();
}
```

它也支持传入中间件数组：

```php
#[GetMapping(
    middleware: [
        EnsureTokenIsValid::class,
        First::class, Second::class
    ]
)]
public function show(){
    return $this->success();
}
```

如果你想为当前控制器中的所有路由都定义一个中间件，你可以在 `RequestMapping` 注解中定义 `middleware` 属性：

```php
#[RequestMapping('/api', middleware: EnsureTokenIsValid::class)]
class UserController extends BaseController
{

    #[GetMapping]
    public function index(){
        return $this->success();
    }

}
```
