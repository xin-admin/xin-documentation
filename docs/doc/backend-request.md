---
group:
  title: 后端进阶
title: 请求验证
order: 0
---

在很多情况下面，我们需要判断当前操作的请求类型是 GET、POST、PUT、DELETE 或者 HEAD，一方面可以针对请求类型作出不同的逻辑处理，另外一方面有些情况下面需要验证安全性，过滤不安全的请求。

具体 PHP 请求请参考 ThinkPHP

XinAdmin 使用 PHP 的注解类，实现了对控制器请求的验证，只用在 PHP 类上添加一个注解，就能做到对控制器请求的类型验证

```php {7} | pure
// 引入注解类 Method
use app\common\attribute\Method;

class File extends Controller
{
    // 使用注解类
    #[Method('GET')]
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

此时请求该方法的时候必须使用 GET 请求，否则会抛出错误 `请求方式错误`；

| 用途                 | 类型   | 方法             |
| -------------------- | ------ | ---------------- |
| 判断是否 GET 请求    | GET    | Method('GET')    |
| 判断是否 PUT 请求    | PUT    | Method('PUT')    |
| 判断是否 DELETE 请求 | DELETE | Method('DELETE') |
| 判断是否 POST 请求   | POST   | Method('POST')   |
| 判断是否 HEAD 请求   | HEAD   | Method('HEAD')   |
