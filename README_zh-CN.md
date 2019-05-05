# fc-demo-service

阿里云函数计算 demo 服务。

## 介绍

- [阿里云函数计算介绍文档](https://help.aliyun.com/document_detail/52895.html)
- [阿里云函数计算控制台](https://fc.console.aliyun.com/service/cn-hangzhou)

## 安装

函数计算基于容器技术，所以我们如果要在本地模拟线上环境，需要安装 [docker](https://docs.docker.com/install)，**并且 fcli、fun 和 web ide 也基于 docker**。

安装阿里云函数计算命令行工具：[fcli](https://help.aliyun.com/document_detail/52995.html)。

安装阿里云函数计算开发部署工具：[fun](https://help.aliyun.com/document_detail/64204.html)。

安装阿里云函数计算 [Web IDE](https://help.aliyun.com/document_detail/99243.html)。

安装本工程依赖：

```shell
$ npm i
$ npm run bootstrap
```

## 使用 fcli

fcli 的覆盖了函数计算控制台的所有功能，比如创建、更新、删除服务和函数，以及执行函数等等。同时 fcli 支持生产环境的本地模拟，但是在模拟环境下不能很方便地执行函数。

**因此建议只使用 fcli 进行读取和线上函数执行的相关操作。至于创建、更新、部署和本地开发调试，推荐使用 fun。并推荐使用 web ide 查看线上函数运行结果，相比于 fcli 会更加直观清晰，不过 web ide 暂时还不支持本地开发调试。**

### 配置

**fcli 和 fun 使用的是相同的配置文件。**

```shell
$ fcli config
```

### 启动

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

### 发布

在 fcli shell 中：

- 用 `mks` 创建服务，`mkf` 创建函数
- 用 `ups` 更新服务，`upf` 更新函数

### 运行

在 fcli shell 中：

- 用 `invk` 运行函数

## 使用 fun

- [fun 使用文档](https://help.aliyun.com/document_detail/64204.html)
- 项目配置文件 - `template.yml`，包含了服务和函数的配置，用于部署
- 本地开发调试的 event 参数模拟 - `event.json`
- 部署时的文件忽略 - `.funignore`

### 配置

**fcli 和 fun 使用的是相同的配置文件。建议使用 fun 进行开发调试和部署**

```shell
$ fun config
```

### 本地开发调试

```shell
$ npm run dev
```

### 发布

```shell
$ npm run release
```

## 使用 Web IDE

**Web IDE 暂时不支持本地开发调试，建议用来做线上函数执行测试，需要 fcli 或者 fun 提前配置好配置数据**

- [Web IDE 访问地址](https://ide.fc.aliyun.com/cn-hangzhou)
- [Web IDE 安装使用教程](https://help.aliyun.com/document_detail/99243.html)

### 启动 IDE 本机服务

```shell
$ ide start
```

### 停止 IDE 本机服务

```shell
$ ide stop
```
