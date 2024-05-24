---
group:
  title: 后端进阶
title: CRUD
order: 1
---

XinAdmin 结合 Antd 表格 封装了常用的 CRUD 操作，具体包括 list、add、edit、delete 四个方法，只要你的控制器继承了 `app\common\controller\Controller` 基础控制器类，并且建立好了模型和验证器，你就可以来使用它

一个基本控制器的代码如下

```php
<?php
namespace app\admin\controller;

use app\admin\model\Admin as AdminModel;
use app\admin\validate\Admin as AdminVal;
use app\common\controller\Controller as Controller;

class Admin extends Controller
{
    public function initialize(): void
    {
        parent::initialize();
        $this->model = new AdminModel();
        $this->validate = new AdminVal();
    }
}
```

之后我们就可以直接调用接口 `admin.php/admin/list（add|edit|delete）` 来操作 AdminModel 的数据

## 查询

基础的 `list` 代码如下

```php
// app\common\controller\Controller.php
/**
 * 基础控制器查询方法
 * @return Json
 * @throws DbException
 */
#[Auth('list'),Method('GET')]
public function list(): Json
{
    list($where, $paginate, $order) = $this->buildSearch();
    $list = $this->model
        ->with($this->withModel)
        ->where($where)
        ->order($order)
        ->paginate($paginate)
        ->toArray();
    return $this->success('ok', $list);
}

```

它封装了基础的查询构造方法 `buildSearch` ，使得适配 antd 的查询、筛选、排序等操作

当然，你也可以将上面的代码复制到你的控制器中来重写它，使得实现你自己的查询逻辑

你可以重写当前控制器的 `$withModel` ， 它用来预关联模型

当然，XinAdmin 也支持更为复杂查询方式，你可以灵活的使用查询，具体详情请看[查询条件](/doc/backend-search)

## 新增&编辑

基础的 `add` 代码如下

```php
// app\common\controller\Controller.php
/**
 * 基础控制器新增方法
 * @return Json
 */
#[Auth('add'),Method('POST')]
public function add(): Json
{
    $data = $this->request->post();
    if (!$this->validate->scene('add')->check($data)) {
        return $this->error($this->validate->getError());
    }
    $this->model->save($data);
    return $this->success('ok');
}
```

它会使用验证器 `$this->validate` 来验证当前操作的数据，edit 与 add 基本相同

当然，你也可以将上面的代码复制到你的控制器中来重写它，使得实现你自己的新增逻辑

## 删除

基础的 `delete` 代码如下

```php
/**
 * 基础控制器删除方法
 * @return Json
 */
#[Auth('delete'),Method('DELETE')]
public function delete(): Json
{
    $data = $this->request->param();
    if (!isset($data['ids'])) {
        return $this->error('请选择ID');
    }
    $delArr = explode(',', $data['ids']);

    $delNum = $this->model->destroy($delArr);
    if ($delNum != 0 ) {
        return $this->success('删除成功，删除了' . $delNum . '条数据');
    } else {
        return $this->warn('没有删除任何数据');
    }
}
```

值得一提的是，删除操作支持多选删除和单项删除，当然你也可以重写删除方法
