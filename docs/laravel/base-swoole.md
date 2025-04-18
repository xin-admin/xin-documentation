---
group: 基础教程
title: 高性能服务 Swoole
order: 9
description: XinAdmin文档 - Swoole，如果你希望使用 Swoole 来提高应用的性能，可以参考本章节。
---

XinAdmin 基于 Laravel 的生态，可以直接使用 `Swoole` 来作为你应用程序的服务器 详情请查看[Laravel 文档](https://laravel.com/docs/12.x/octane)。它具有以下优势：

- 提供高性能的 Http 请求。
- 超高的并发处理能力。
- 定时器

`Laravel Octane`通过使用高性能应用程序服务器 `Swoole` 启动您的应用程序一次，将其保存在内存中，然后以超音速馈送请求，在本章节中我们介绍如何使用`Swoole`来提高应用的性能。

:::info{title=注意}
`Swoole` 不支持在 windows 系统下运行，建议你在本地搭建虚拟环境作为本地开发环境，我们建议使用 `Linux` 系统作为你的服务器。
:::

## 准备

### 安装 `Swoole`

在开始前，您必须安装 `Swoole` 扩展。 通常，这可以通过 PECL 完成：

```shell
pecl install swoole
```

### 安装 Octane

Octane 可以通过 Composer 包管理器安装：

```shell
composer require laravel/octane
```

安装完成后，您可以执行 Artisan `octane:install` 命令，该命令会将 Octane 的配置文件安装到您的应用程序中：

```shell
php artisan octane:install
```

安装的时候选择 `Swoole` 来作为你的服务器。安装完成后，默认会在 `.env` 文件中添加以下配置：

```shell
OCTANE_SERVER=swoole
```

## Swoole Serve

基于 Laravel 的 `Octane`，你可以使用 `Swoole` 作为你的服务器。 在生产环境中，您应该在传统的 Web 服务器（如 Nginx 或 Apache）中包含下面配置。
这样做将允许 Web 服务器提供静态资产（如图像和样式表），并管理 SSL 证书终止。

在下面的 Nginx 配置示例中，Nginx 将向运行在端口 8000 上的 Octane 服务器提供站点的静态资产和代理请求：

```nginx
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server {
    listen 80;
    listen [::]:80;
    server_name domain.com;
    server_tokens off;
    root /home/forge/domain.com/public;

    index index.php;

    charset utf-8;

    location /index.php {
        try_files /not_exists @octane;
    }

    location / {
        try_files $uri $uri/ @octane;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/domain.com-error.log error;

    error_page 404 /index.php;

    location @octane {
        set $suffix "";

        if ($uri = /index.php) {
            set $suffix ?$query_string;
        }

        proxy_http_version 1.1;
        proxy_set_header Host $http_host;
        proxy_set_header Scheme $scheme;
        proxy_set_header SERVER_PORT $server_port;
        proxy_set_header REMOTE_ADDR $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;

        proxy_pass http://127.0.0.1:8000$suffix;
    }
}
```

### 监听文件更改

由于您的 Application 在 Octane 服务器启动时被加载到内存中一次，因此当您刷新浏览器时，对 App 文件的任何更改都不会反映出来。
例如，在重新启动服务器之前，添加到文件中的路由定义不会反映出来。为方便起见，您可以使用该标志指示 Octane 在应用程序内发生任何文件更改时自动重启服务器：`routes/web.php--watch`

```shell
php artisan octane:start --watch
```

### 指定 worker 计数

默认情况下，Octane 将为机器提供的每个 CPU 内核启动一个应用程序请求工作程序。然后，这些工作程序将用于在传入的 HTTP 请求进入您的应用程序时为其提供服务。您可以在调用命令时手动指定要开始使用该选项的 worker 数量：--workersoctane:start

```shell
php artisan octane:start --workers=4
```

您还可以指定多少个“任务工作者”您希望开始：

```shell
php artisan octane:start --workers=4 --task-workers=6
```

### 指定最大请求量

为了帮助防止杂散内存泄漏，Octane 会在处理完 500 个请求后正常重启任何 worker。要调整此数字，您可以使用以下选项：--max-requests

```shell
php artisan octane:start --max-requests=250
```

## 并发任务

您可以通过轻量级后台任务并发执行并发任务。使用 `Octane` 的 `concurrently` 方法完成此作。您可以将此方法与 PHP 数组解构结合使用，以检索每个作的结果 ：

```php
use App\Models\User;
use App\Models\Server;
use Laravel\Octane\Facades\Octane;

[$users, $servers] = Octane::concurrently([
    fn () => User::all(),
    fn () => Server::all(),
]);
```

Octane 处理的并发任务利用 `Swoole` 的“任务工作者”，并在与传入请求完全不同的进程中执行。可用于处理并发任务的工作线程数量由命令上的指令决定：`--task-workersoctane:start`

```shell
php artisan octane:start --workers=4 --task-workers=6
```

调用该方法时，由于 `Swoole` 任务系统施加的限制，您不应提供超过 1024 个任务。

## 定时器

`Octane` 提供了一个 `tick` 方法，该方法允许您注册一个回调，该回调在指定的秒数后执行一次。提供给方法的第一个参数应该是表示滚动条名称的字符串。第二个参数应该是将按指定间隔调用的可调用对象。

在此示例中，我们将注册一个每 10 秒调用一次的闭包。通常，应该在应用程序的某个服务提供商的`boot`方法中调用该方法：

```php
Octane::tick('simple-ticker', fn () => ray('Ticking...'))
    ->seconds(10);
```

使用 `immediate` 方法，您可以指示 `Octane` 在 `Octane` 服务器最初启动时立即调用 `tick` 回调，此后每 N 秒调用一次：

```php
Octane::tick('simple-ticker', fn () => ray('Ticking...'))
    ->seconds(10)
    ->immediate();
```

## 高性能缓存

您可以利用 Octane 缓存驱动程序，该驱动程序提供高达每秒 200 万次作的读写速度。因此，对于需要从缓存层获得极高读/写速度的应用程序，此缓存驱动程序是一个很好的选择。

此缓存驱动程序由[Swoole table](https://openswoole.com/docs/modules/swoole-table)提供，缓存中存储的所有数据都可供服务器上的所有工作程序使用。但是，当服务器重新启动时，缓存的数据将被刷新：

```php
Cache::store('octane')->put('framework', 'Laravel', 30);
```

### 缓存间隔

除了 Laravel 缓存系统提供的典型方法外，Octane 缓存驱动程序还具有基于定时器的缓存功能。这些缓存将按指定的时间自动刷新，你应该在应用程序的某个服务提供商的`boot`方法中注册使用。例如，以下缓存将每 5 秒刷新一次：

```php
use Illuminate\Support\Str;

Cache::store('octane')->interval('random', function () {
    return Str::random(10);
}, seconds: 5);
```

基于 `swoole` 你可以为你的应用程序提供更可靠高性能的服务，更多使用说明和示例请参阅 [Octane 文档](https://laravel.com/docs/12.x/octane)。
