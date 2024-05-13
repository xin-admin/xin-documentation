---
group:
  title: 后端基础
  order: 2
title: 查询条件
order: 3
---

上一章我们讲解了基础的查询，当然查询往往更为复杂，封装的 `buildSearch` 可以实现更好的扩展，来实现更为复杂的查询

searchField 适用于基础的查询字段，支持基本的数据库查询表达式，['=', '>', '<>', '<', '>=', '<='] 等

使用方法：

```php
protected array $searchField = [
    'id' => '=',
    'username' => '=',
    'mobile' => '=',
    'email' => '=',
    'sex' => '=',
    'nickname' => 'like'
];


```
