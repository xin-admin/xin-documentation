---
group:
  title: 后端专项
  order: 6
title: 控制器
order: 2
---

控制器作为应用程序关键的组成部分，它决定了应用该如何执行，常用的就是将增删改查的操作封装成控制器，然后通过路由映射的方式，将请求映射到对应的控制器。

XinAdmin 对控制器进行了扩展，封装了基础的 CRUD 操作，并且支持高级查询与筛选。

## 编写控制器

XinAdmin 将默认将控制器分为 `app` 和 `admin` 两组，`app` 组用于客户端的请求，`admin` 组用于后台管理页面的请求，他们分别储存在 `app/Http/App/Controllers` 和 `app/Http/Admin/Controllers` 文件夹下。

事实上只要继承了基础控制器 `XinAdmin\Http\Controllers\Controller` 就可以很方便的实现 CRUD 操作。

### 查询

让我们看一个基本的用户查询控制器的示例：

```php
<?php
namespace App\Http\Admin\Controllers;

use App\Http\BaseController;
use App\Models\UserModel;

#[RequestMapping('/user')]
class UserController extends BaseController
{
    public function __construct()
    {
        $this->model = new UserModel;
        $this->searchField = [
            'user_id' => '=',
            'username' => 'LIKE',
        ];
        $this->quickSearchField = ['username', 'nickname', 'email', 'user_id'];
    }

    /** 获取用户列表 */
    #[GetMapping] #[Authorize('user.list')]
    public function list(): JsonResponse
    {
        return $this->listResponse();
    }
}

```

在上面的控制器示例中

- `@RequestMapping` 注解指定了控制器路由的访问路径前缀。
- `@GetMapping` 注解指定了该路径的 GET 请求方法。
- `@Authorize` 注解指定了该控制器的访问权限。

它将生成一个 `/user` 路由，当客户端以 `GET`方式访问 `/user` 路由时，将调用控制器的 `list()` 方法。

:::info
注解具体使用方式可以参考[注解路由与权限](/laravel/backend-attribute)。
:::

这个 `list` 方法将会调用父类的查询响应，并根据初始化方法中所指定的模型与查询参数，来响应给前端所需要的数据。

以下是具体可用的初始化参数：

- `model`：指定了控制器所使用的模型，默认为当前控制器的类名，即 `UserController` 对应的模型为 `UserModel`，该控制器默认的增删改查将使用 `UserModel` 进行操作。
- `searchField`：指定了查询字段，它是一个 PHP 数组，数组中的键表示查询字段的名称，值表示查询字段的比较方式，默认为 `=`，你也可用使用 `>` `>=` `<` `<=` `LIKE`等等。
- `quickSearchField`：指定了快速查询字段，它是一个 PHP 数组，数组中的键表示快速查询字段的名称，在查询的时候会会通过 `LIKE` 对数组中的字段进行模糊查询。

### 新增与编辑

新增和编辑的操作将会简单许多，以下是一个新增与编辑的操作示例：

```php
/** 新增用户 */
#[PostMapping] #[Authorize('user.add')]
public function add(UserRequest $request): JsonResponse
{
    return $this->addResponse($request);
}

/** 新增用户 */
#[PutMapping] #[Authorize('user.edit')]
public function edit(UserRequest $request): JsonResponse
{
    return $this->editResponse($request);
}
```

- 当客户端以 `POST` 方式访问 `/user` 路由时，将调用控制器的 `add()` 方法。
- 当客户端以 `PUT` 方式访问 `/user` 路由时，将调用控制器的 `edit()` 方法。

这两个方法将调用父类的新增响应，它会根据所提供的表单请求进行数据校验，如果校验成功将会插入数据，如果校验失败，将会返回对应的错误消息。

`UserRequest` 是 `Laravel` 的表单请求，你可以参考 `Laravel` 的 [Form Request](https://laravel.com/docs/12.x/validation#form-request-validation) 来了解更多信息

下面是一个简单的表单请求示例：

```php
<?php

namespace App\Http\Admin\Requests\UserRequest;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    public function rules(): array
    {
        if ($this->isMethod('post')) {
            return [
                'username' => 'required',
                'nickname' => 'required',
            ];
        }else {
            return [
                'user_id' => 'required|exists:user,user_id|integer',
                'username' => 'required',
                'nickname' => 'required',
            ];
        }

    }
}
```

在上面的示例中，你可以通过请求的方法，很方便的将新增和编辑对应的校验规则进行区分。

### 删除

对于删除操作，XinAdmin 提供了 `deleteResponse` 方法，你可以直接使用它来完成删除操作。

```php

/** 删除用户 */
#[DeleteMapping] #[Authorize('user.delete')]
public function delete(): JsonResponse
{
    return $this->deleteResponse();
}
```

在上面的示例中，当客户端以 `DELETE` 方式访问 `/user` 路由时，将调用控制器的 `delete()` 方法。

`deleteResponse` 方法将调用父类的删除响应，它会根据客户端提供的 `模型主键` 字段来删除对应的数据。
