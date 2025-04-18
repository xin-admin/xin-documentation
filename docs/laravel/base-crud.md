---
group: 基础教程
title: CRUD 代码生成
order: 2
---

# CRUD 基础

CRUD 是创建（Create）、读取（Read）、更新（Update）和删除（Delete）的缩写，是应用程序中最常见的操作。以下是如何在 XinAdmin 中实现这些操作的基本教程。

## 基本概念

- **创建（Create）**：添加新数据到数据库。
- **读取（Read）**：从数据库中检索数据。
- **更新（Update）**：修改数据库中的现有数据。
- **删除（Delete）**：从数据库中移除数据。

## Laravel 中的 CRUD

XinAdmin 封装了 BaseController 来实现 CRUD 操作。你的控制器只需要继承 BaseController，就可使用 基础控制器的方法。以下是一个简单的 CRUD 示例，展示了如何在 Laravel 中实现这些操作。

```php
#[AdminController]
#[RequestMapping('/test')]
class TestController extends BaseController
{
    public function __construct()
    {
        # 设置模型
        $this->model = new DictItemModel;
        # 设置搜索字段
        $this->searchField = [
            'name' => 'like',
            'dict_id' => '=',
        ];
        # 设置快捷搜索字段
        $this->quickSearchField = [];
    }

    /** 查询详情 */
    #[GetMapping('/{id}')]
    public function get($id): JsonResponse
    {
        return $this->getResponse($id);
    }

    /** 查询列表 */
    #[GetMapping]
    public function list(): JsonResponse
    {
        return $this->listResponse();
    }

    /** 新增操作 */
    #[PostMapping]
    public function add(FormRequest $request): JsonResponse
    {
        return $this->addResponse($request);
    }

    /** 编辑操作 */
    #[PutMapping]
    public function edit(FormRequest $request): JsonResponse
    {
        return $this->editResponse($request);
    }

    /** 删除操作 */
    #[DeleteMapping]
    public function delete(): JsonResponse
    {
        return $this->deleteResponse();
    }
}

```

上面的类包含了五个方法，它分别创建了五个路由，对应 CRUD 操作，如果你不清楚路由是怎么创建的，请参考 [路由](/docs/guide/route)。

- **get 方法**：查询单条数据，可以在模型中设置关联。
- **list 方法**：查询多条数据，返回数据集合，并自动处理分页和 where 操作。
- **add 方法**：新增一条数据，通过配置 $request 类型提示可以使用 FormRequest 来验证参数。
- **edit 方法**：编辑数据，同 add 方法，不过请求类型为 PUT，并且需要校验主键。
- **delete 方法**：删除数据。
  > 类初始化时，设置了模型、搜索字段以及快捷搜索等 CRUD 相关配置，更多 CRUD 的设置，请参考 [基础控制器](/docs/guide/base-controller)。

## React 中的 CRUD
