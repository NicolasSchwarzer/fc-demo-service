# fc-demo-service

阿里云函数计算 demo 服务。

## 介绍

- [阿里云函数计算介绍文档](https://help.aliyun.com/document_detail/52895.html)
- [阿里云函数计算控制台](https://fc.console.aliyun.com/service/cn-hangzhou)

## 安装

函数计算基于容器技术，所以我们如果要在本地模拟线上环境，需要安装 [docker](https://docs.docker.com/install)，**并且 fcli 也基于 docker**。

安装阿里云函数计算命令行工具：[fcli](https://help.aliyun.com/document_detail/52995.html)。

安装本工程依赖：

```shell
$ npm i
$ npm run bootstrap
```

## 启动

```shell
$ npm start
```

启动后会进入 fcli shell，[fcli shell 详细操作文档](https://help.aliyun.com/document_detail/52995.html)。

本地模拟线上环境：

```shell
# In fcli shell
$ sbox -d ${YourFunctionDirectory} -t nodejs8

# e.g. hello-world function
$ sbox -d hello-world -t nodejs8
```

## 发布

在 fcli shell 中：

- 用 `mks` 创建服务，`mkf` 创建函数
- 用 `ups` 更新服务，`upf` 更新函数

## 运行

在 fcli shell 中：

- 用 `invk` 运行函数
