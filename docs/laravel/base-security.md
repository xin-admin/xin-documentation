---
group: 基础教程
title: 安全认证
order: 2
description: XinAdmin 提供了完整的用户认证与权限控制系统，它使用 Laravel 的 Sanctum 为用户颁发 API 令牌，并且通过 Token Abilities 来控制用户对资源的访问权限。
---

XinAdmin 基于 `Laravel` 的 `认证` 与 [Laravel Sanctum](https://laravel.com/docs/12.x/sanctum) 构建了一套完整的认证授权系统，它使用
`Laravel` 的 `Sanctum` 为用户颁发 API 令牌，来控制用户对系统资源的访问。

## 用户认证

用户通过账户名和密码登入到系统，系统会颁发一个 `Token`，该 `Token` 拥有用户所属用户组的 [菜单和权限](/laravel/base-auth)，用户在登录后，会自动保存该 `Token`，并在下次请求时在请求头中自动携带该 `Token`
从而实现用户校验。

```text
// 自动携带的请求头
Authorization: Bearer {token}
```

XinAdmin 默认提供两套用户认证驱动，`admin` 与 `user`。

默认的驱动为 `admin` 驱动，它也是后端管理系统的核心认证，它的用户数据储存在 `admin_user` 数据表中。

`user` 驱动用于客户端应用，你可以根据自己的业务需求扩展它，它默认储存在 `xin_user` 数据表中。

当然你也可也根据自己的业务需求，扩展更多的认证驱动。

## 访问控制

Xin Admin 默认对所有的后台请求都添加了 `auth:sanctum` 中间件来对请求进行控制，当然对于特殊接口，你也可以通过在控制器的属性
`$noPermission` 中添加不需要验证的白名单，来跳过权限验证，数组中包含的是不需要验证的方法名称：

```php
#[RequestMapping('/admin')]
class AdminUserController extends BaseController
{

    protected array $noPermission = ['refreshToken', 'login'];

    // 不会对该方法进行权限验证
    #[PostMapping('/login')]
    public function login(Request $request): JsonResponse
    {
      // ... some code
    }
}

```

## 检索用户

在处理传入请求时，您可以通过 `Illuminate\Support\Facades\Auth` 的方法访问经过身份验证的用户：

```php
use Illuminate\Support\Facades\Auth;

// 获取通过认证的用户的信息...
$user = Auth::user();

// 获取通过认证的用户 ID...
$id = Auth::id();
```

你也可以通过 `Illuminate\Http\Request` 实例来访问经过身份验证的用户，类型提示类将自动注入到你的控制器方法中，
通过对对象进行类型提示，您可以通过请求的方法从应用程序中的任何控制器方法方便地访问经过身份验证的用户：

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    /**
     * Update the flight information for an existing flight.
     */
    public function update(Request $request): RedirectResponse
    {
        $user = $request->user();

        // ...

        return redirect('/flights');
    }
}
```

如果你不确定请求是否经过身份验证，则可以使用 `Illuminate\Support\Facades\Auth` 的 `check` 方法，如果该请求已经经过身份验证，则返回 `true`：

```php
use Illuminate\Support\Facades\Auth;

if (Auth::check()) {
    // The user is logged in...
}
```

## 其它

### 修改密码

管理端用户可以在管理后台中点击头像访问用户设置，在用户设置中修改自己的密码，修改密码时需要校验之前的密码是否正确。

管理员如果拥有 管理用户列表的重置密码权限，就可以只接在管理员列表中点击重置密码，修改用户密码。

### 登录日志

管理员登录时会记录登录日志，登录日志记录在 `admin_login_log` 表中，你可以在管理后台中查看登录日志。

### 退出登录

管理员可以在管理后台中点击头像访问用户设置，在用户设置中点击退出登录，退出登录后，将自动清除当前用户的 `Token`，并重定向到登录页。
