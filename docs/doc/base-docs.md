---
group:
  title: 基础
  order: 3
title: 文档开发
order: 6
---

# 文档开发

我们在 php-swagger 的基础上为开发者提供了完善的注解文档支持，通过此篇文档你可以轻松的书写接口文档，如果你想应用与大型项目，这将极大的减少开发沟通成本。

当你的项目启动的时候，在后台的 `public` 文件夹下，你会看到 `docs.html` 文件，你可以直接通过 `127.0.0.1:8000/docs.html` 来访问它，它会请求 `swagger.php` 接口来获取 Api 文档，这之间的过程并不需要你特别注意，作为开发者，只用来了解文档的书写规范即可！

:::info
需要注意的是，在生产环境中并不能直接通过 `swagger.php` 来获取文档 json ，你可以在开发环境中将 json 保存为文件然后修改 `docs.html` 文件中的请求路径！
:::

你可以通过测试控制器中的注解来了解它的基本使用方法

```php
use app\common\attribute as XinAttr;

// 文档分组
#[XinAttr\OpenApi\Tag(name: "测试控制器", description: "
    Controller： 测试控制器 \n
    File： app\admin\controller\TestTableController \n
    Auth： TestTable \n
    Author: 小刘同学 <2302563948@qq.com> \n
")]
class TestTableController extends Controller
{

    // 基本的CRUD接口
    #[XinAttr\OpenApi\Get(title: '查询列表', path: '/admin.php/test_table/list', operationId: 'test_table_list', tags: ['测试控制器'], ref: '#/components/schemas/test_table_model')]
    #[XinAttr\OpenApi\Post(title: '新增', path: '/admin.php/test_table/add', operationId: 'test_table_add', tags: ['测试控制器'], bodyRef: '#/components/schemas/test_table_model')]
    #[XinAttr\OpenApi\Put(title: '编辑', path: '/admin.php/test_table/edit', operationId: 'test_table_edit', tags: ['测试控制器'], ref: '#/components/schemas/test_table_model')]
    #[XinAttr\OpenApi\Delete(title: '删除', path: '/admin.php/test_table/delete',operationId: 'test_table_delete', tags: ['测试控制器'])]
    public function initialize(): void
    {
        parent::initialize();
        $this->model = new TestTableModel();
        $this->validate = new TestTableVal();
    }
}
```

上面示例生成了一个 名字为 `测试控制器` 的文档分组，在此分组之下拥有 `查询列表`、`新增`、`编辑`、`删除`，四个接口。

## Tag 文档分组

```php
use app\common\attribute\OpenApi\Tag;
```

注解类 `Tag` 用来对接口进行分组，它包含以下几个基本属性：

- name： 分组名称
- description：分组描述

当然，它支持 `swagger-php` Tag 中的所有属性，详情查看 swagger-php 文档

```php
use app\common\attribute as XinAttr;

#[XinAttr\OpenApi\Tag(name: "分组名称", description: "分组描述")]
class YouController extends Controller
{

}
```

上面代码将会在文档中生成一个名字为`分组名称` 的菜单，在之后的文档接口书写中，你可以使用 ` tags: ['分组名称']` 来将接口添加到这个分组之中

## Git 接口文档书写

```php
use app\common\attribute\OpenApi\Get;
```

注解类 Git 用来生成一个 Git 请求的接口文档，它包含以下几个基本属性：

| 属性        | 类型   | 用途            | 示例                               |
| ----------- | ------ | --------------- | ---------------------------------- |
| title       | string | 文档标题        | `查询姓名`                         |
| description | string | 文档描述        | `查询姓名接口`                     |
| path        | string | 接口地址        | `admin.php\index\getName`          |
| operationId | string | 接口唯一 ID     | `getName`                          |
| tags        | array  | 标签            | ['示例接口']                       |
| ref         | string | 返回模型 Ref    | `#/components/schemas/admin_model` |
| params      | array  | 请求参数 Params | [['name','姓名','string']]         |
| response    | array  | 响应 data       | [['name','张三','name']]           |

示例：

```php
#[XinAttr\OpenApi\Get(
    title: '查询姓名',
    description: '查询姓名接口',
    path: 'admin.php\index\getName',
    operationId: 'getName',
    tags: ['示例接口'],
    params: [
        ['name','姓名','string']
    ],
    response: [
        ['name','姓名','name']
    ]
)]
public function getName()
{
    $name = $this->request->get('name');
    return $this->success(['name' => '张三']);
}

```

这里需要注意的是 `ref` 、`params` 、 `response` 三个属性，在注解类中，已经将基本地响应内容包含在响应体中，如果上面三个属性都不存在的话，它将生成一个类似以下的响应体

```json
{
  "msg": "string",
  "showType": 0,
  "status": 200,
  "success": true,
  "data": {}
}
```

### ref

在 CRUD 中 Git 通常为查询分页数据集，所以我们提供了 ref 数据方便快速的生成一个包含分页的响应文档，如果你的如果你不知道怎么定义 ref，请参考

示例：

```php
#[XinAttr\OpenApi\Get(
    title: '查询管理员列表',
    description: '查询管理员列表接口',
    path: 'admin.php\index\getAdminList',
    operationId: 'getAdminList',
    tags: ['示例接口'],
    ref: '#/components/schemas/admin_model'
)]
public function getAdminList()
{
    $model = new AdminModel;
    $data = $model->paginate(10)->toArray();
    return $this->success($data);
}
```

上面注解的定义将会生成以下一个响应体

```json
{
  "msg": "string",
  "showType": 0,
  "status": 200,
  "success": true,
  "data": {
    "current_page": null,
    "data": {
      "id": 0,
      "username": "string",
      "nickname": "string",
      "sex": "string",
      "email": "string",
      "status": "string",
      "group_id": "string",
      "avatar_id": 0,
      "create_time": "string",
      "update_time": "string",
      "msg": "string"
    },
    "last_page": null,
    "per_page": null,
    "total": null
  }
}
```

其中包含一级 data 中的分页数据，与二级 data 中的 model 数据

### params

你可以通过 params 来自定义请求参数，它是一个 php 二维数组，
`[['name','姓名','name']]`
其中内部数组中包含三个字段，它分别对应 `parameter 属性`、`description 描述`、`name 名称`

### response

你可以通过 response 来自定义响应参数，它是一个 php 二维数组，
`[['name','姓名','string']]`
其中内部数组中包含三个字段，它分别对应 `property 属性`、`description 描述`、`type 类型`
