---
title: 部署
order: 3
---

当您准备好将 XinAdmin 应用程序部署到生产环境时，您可以采取一些重要措施来确保您的应用程序尽可能高效地运行。
在本文档中，我们将介绍一些很好的起点，以确保您的 XinAdmin 应用程序得到正确部署。
在前后端分离开发的模式下，我们建议你保持本地环境作为开发环境。
生产环境中建议使用稳定性强、便于部署的宝塔面板，这样可以为你省去一大堆配置问题，也可以避免不必要的异常。
本章中默认使用宝塔作为生产环境，如果你不知道宝塔面板怎么安装，请移步宝塔官网。

## 环境要求

为了使 XinAdmin 应用正常运行，请确保你的服务器安装了以下应用与扩展：

- Nginx
- Redis
- Mysql >= 5.7
- PHP >= 8.2
- Ctype PHP 扩展
- cURL PHP 扩展
- DOM PHP 扩展
- Fileinfo PHP 扩展
- Filter PHP 扩展
- Hash PHP 扩展
- Mbstring PHP 扩展
- OpenSSL PHP 扩展
- PCRE PHP 扩展
- PDO PHP 扩展
- Session PHP 扩展
- Tokenizer PHP 扩展
- XML PHP 扩展

## 站点创建

在创建站点之前，请确认你的域名已经解析到你的服务器中。
