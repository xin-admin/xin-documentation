---
group:
  title: 后端进阶
  order: 5
title: 权限校验
order: 1
---

## 基本使用

与请求验证相同，我们使用注解来实现对接口权限的校验，它会校验当前用户是否拥有当前控制器方法的权限

<Alert>
当你的用户组为管理员它将忽略权限校验
</Alert>

```php
#[Auth('list')]
```

### 完整例子

```php {8} | pure
// 引入注解类 Auth
use app\common\attribute\Auth;
use app\common\controller\Controller;

class AuthTest extends Controller
{
    // 使用注解类
    #[Auth('list')]
    public function list(): Json
    {
        list($where, $paginate) = $this->buildSearch();
        $list = $this->model
            ->with($this->withModel)
            ->where($where)
            ->paginate($paginate)
            ->toArray();
        return $this->success('ok', $list);
    }
}

```

假设你的控制器访问路径为 `admin.php\auth.authtext\list`，那么当前权限规则 KEY 为：`auth.authtext.list`，XinAdmin 会校验当前用户是否拥有 `auth.authtext.list` 权限；

你可以在路由中新增 按钮/操作 并且 权限标识 为 `auth.authtext.list`，并且将 该权限分配给用户所在的用户组中，之后就可以访问当前方法

## 自定义权限前缀

XinAdmin 默认从当前控制器路径获取权限前缀 ，当然你也可以通过自定义当前控制器权限前缀来修改它

使用 $authName 来自定义控制器权限前缀

```php
protected string $authName = 'auth';
```

### 完整例子

```php {7} | pure
// 引入注解类 Auth
use app\common\attribute\Auth;
use app\common\controller\Controller;

class AuthTest extends Controller
{
    protected string $authName = 'auth';

    // 使用注解类
    #[Auth('list')]
    public function list(): Json
    {
        list($where, $paginate) = $this->buildSearch();
        $list = $this->model
            ->with($this->withModel)
            ->where($where)
            ->paginate($paginate)
            ->toArray();
        return $this->success('ok', $list);
    }
}

```

自定义当前控制器权限前缀，那么当前方法权限标识 为：`auth.list`，规则为：`$authName . 'list'` XinAdmin 会校验当前用户是否拥有 `auth.list` 权限；

你可以在路由中新增 按钮/操作 并且 权限标识 为 `auth.list`，并且将 该权限分配给用户所在的用户组中，之后就可以访问当前方法

## 校验登录

当然你也可以使用 Auth 类来校验当前用户是否登录，适用于有些场景只用校验用户是否登录，并不需要对某些操作进行特定控制；

```php {10} | pure
// 引入注解类 Auth
use app\common\attribute\Auth;
use app\common\controller\Controller;

class AuthTest extends Controller
{
    protected string $authName = 'auth';

    // 使用注解类
    #[Auth]
    public function list(): Json
    {
        list($where, $paginate) = $this->buildSearch();
        $list = $this->model
            ->with($this->withModel)
            ->where($where)
            ->paginate($paginate)
            ->toArray();
        return $this->success('ok', $list);
    }
}

```

我们可以直接使用 `#[Auth]` 来校验用户是否登录，如果没有登录将返回 error；

## Auth Api

我们在 Auth 中封装了一些比较常用的 Api 你可以使用这些 静态方法快速的获取到当前用户的登录状态和基本信息

### 判断是否登录

```php
Auth::isLogin(); // bool
```

### 获取 Token Data

```php
Auth::getTokenData(); // array
```

### 获取管理员 ID

```php
Auth::getAdminId(); // int
```

### 获取管理员信息

```php
Auth::getAdminInfo(); // array
```

### 获取前台用户 ID

```php
Auth::getUserId(); // int
```

### 获取前台用户信息

```php
Auth::getUserInfo(); // array
```
