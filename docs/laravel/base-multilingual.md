---
group: 基础教程
title: 多语言
order: 5
---

XinAdmin 的前端与后端都提供了多语言的支持，并且已经配置了菜单、文本和部分 `message` 的多语言，在 Server 中，你可以在 `config/app.php` 中配置 `locale` 来设置默认语言，
在前端中，通过管理后台的语言设置来设置页面的语言。

## WEB 端

XinAdmin 使用的 `@umi/max` 内置了国际化插件，它可以轻松地将国际化功能集成到你的应用程序之中。

国际化插件采用约定式目录结构，我们约定在 src/locales 目录下引入多语言文件。

在前端项目根目录的 locales 文件夹中，你可以看到 `en-US.ts`、`zh-CN.ts` 等文件，分别对应英文和中文的多语言文件，多语言文件的命名需遵循此规范：
`<lang><separator><COUNTRY>.(js|json|ts)`。其中，<separator> 为分隔符，默认为 -，可以通过 baseSeparator 项配置。

```markdown
- locales
  - zh-CN ---> 中文语言文件目录
    - menu.ts
  - en-US ---> 英文语言文件目录
    - menu.ts
  - zh-CN.ts
  - en-US.ts
    pages
```

### 添加多语言

现在，添加您的第一条多语言内容：

```typescript | pure
// src/locales/zh-CN.ts
export default {
  welcome: '欢迎光临 Umi 的世界！',
};

// src/locales/en-US.ts
export default {
  welcome: "Welcome to Umi's world!",
};
```

### 使用多语言

一切就绪，现在您可以在 前端项目 中使用多语言内容。使用 `<FormattedMessage />` 组件，只需要将前面的 welcome 作为参数 id 的值传入即可：

```tsx | pure
import { FormattedMessage } from 'umi';

export default function Page() {
  return (
    <div>
      <FormattedMessage id="welcome" />
    </div>
  );
}
```

渲染的结果如下：

```html
<!-- zh-CN -->
<div>欢迎光临 Umi 的世界！</div>

<!-- en-US -->
<div>Welcome to Umi's world!</div>
```

### 在组件的参数中使用

在某些情况下，您需要将多语言内容作为参数传递给某个组件。可以通过 intl 对象来实现：

```tsx | pure
import { Alert } from 'antd';
import { useIntl } from 'umi';

export default function Page() {
  const intl = useIntl();
  const msg = intl.formatMessage({
    id: 'welcome',
  });

  return <Alert message={msg} type="success" />;
}
```

在底层，国际化插件基于 react-intl 封装，并支持它的所有接口，详情可见[此文档](https://github.com/formatjs/formatjs/blob/main/website/docs/react-intl/api.md)。

在上面的代码中，我们就运用到了 react-intl 提供的 useIntl() 接口来初始化 intl 对象，并调用此对象的 formatMessage() 方法来格式化字符串。

### 格式化字符串

您可能想要在多语言翻译中动态插值，那么可以像这样编写多语言内容：

```ts
// src/locales/zh-CN.ts
export default {
  user: {
    welcome: '{name}，今天也是美好的一天！',
  },
};
```

```ts
// src/locales/en-US.ts
export default {
  user: {
    welcome: '{name}, what a nice day!',
  },
};
```

在上面，我们编写了特殊的语法 `{name}`，这允许我们在运行时动态赋值：

```tsx | pure
import { FormattedMessage } from 'umi';

export default function Page() {
  return (
    <p>
      <FormattedMessage id="user.welcome" values={{ name: '张三' }} />
    </p>
  );
}
```

如果您希望通过 `intl` 对象来实现，那么可以这样对它赋值：

```tsx | pure
import { useIntl } from 'umi';

export default function Page() {
  const intl = useIntl();
  const msg = intl.formatMessage(
    {
      id: 'user.welcome',
    },
    {
      name: '张三',
    },
  );

  return <p>{msg}</p>;
}
```

注意，用于赋值的键值对对象应当作为 `formatMessage()` 方法的第二个参数传递。

渲染的结果如下：

```html
<!-- zh-CN -->
<p>张三，今天也是美好的一天！</p>

<!-- en-US -->
<p>张三, what a nice day!</p>
```

### 其它配置

你可以参考 UmiJs 的 多语言获取更多其它的用法和设置，[UmiJs 多语言](https://umijs.org/docs/max/i18n)

## Server 端

Laravel 的本地化功能提供了一种便捷的方式来检索各种语言的字符串，使您可以轻松地在应用程序中支持多种语言。

Laravel 提供了两种管理翻译字符串的方法。首先，语言字符串可以存储在应用程序目录中的 `lang` 文件中。在此目录中，应用程序支持的每种语言可能都有子目录。这是 Laravel 用来管理内置 Laravel 功能（例如验证错误消息）的翻译字符串的方法：

```text
/lang
    /en
        messages.php
    /zh
        messages.php
```

在 `lang` 目录下创建子目录，然后创建 多语言文件，并添加您的翻译字符串

### 使用多语言

在应用程序中，您可以使用 `__()` 函数来检索翻译字符串。例如，假设您有一个名为 `welcome` 的翻译字符串，则可以使用以下代码来检索翻译字符串：

```php
# 多语言文件数组
[
    'welcome' => 'Welcome',
]

# 使用 __() 函数
echo __('welcome');

# 输出：Welcome

```

### 格式化字符串

您可以在翻译字符串中定义占位符。所有占位符都以 `:` 开始，后跟占位符名称。
例如，假设您有一个名为 `welcome` 的翻译字符串，该字符串包含一个占位符 `:name`，则可以使用以下代码来检索翻译字符串并替换占位符：

```php
# 多语言文件数组
[
    'welcome' => 'Welcome :name',
]

# 使用 __() 函数
echo __('welcome', ['name' => 'John']);

# 输出：Welcome, John
```

### 其它配置

更多配置和使用方法，请参考 Laravel 的 [多语言](https://laravel.com/docs/12.x/localization)
