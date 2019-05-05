# fc-demo-service

Aliyun function compute demo service.

## Introduction

- What is aliyun function compute: [documentation](https://help.aliyun.com/document_detail/52895.html)
- Get played with [aliyun function compute console](https://fc.console.aliyun.com/service/cn-hangzhou)

## Install

Function compute is actually based on container technology, and if we want to simulate production environment, we need to install [docker](https://docs.docker.com/install) locally, **fcli、fun & web ide also depends on docker**.

Use your own [aliyun docker registry](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors) to speed up image installation.

Install aliyun function compute command line tool: [fcli](https://help.aliyun.com/document_detail/52995.html).

Install aliyun function compute deploy and locally running tool: [fun](https://help.aliyun.com/document_detail/64204.html)

Install aliyun function compute web ide: [Web IDE](https://help.aliyun.com/document_detail/99243.html)

And install project dependencies:

```shell
$ npm i
$ npm run bootstrap
```

## Play with fcli

In fcli shell, we can do the same thing as on web console, e.g. create, update, delete services and functions, invoke functions... We can also simulate production environment locally, but can not test run functions locally.

**We suggest use fcli to read and invoke. For creation, deploy and local test running, it's better to use fun. And web ide has better ui interface for function invoke, which does not support local test running yet.**

### Config

**fcli & fun use the same config file.**

```shell
$ fcli config
```

### Start

```shell
$ npm start
```

Now we entered into fcli shell environment, here's the [documentation](https://help.aliyun.com/document_detail/52995.html) of how to play.

Simulate production environment:

```shell
# In fcli shell
$ sbox -d ${YourFunctionDirectory} -t nodejs8

# e.g. hello-world function
$ sbox -d hello-world -t nodejs8
```

### Publish

In fcli shell:

- Use `mks` command to create service, use `mkf` command to create function
- Use `ups` command to update service, use `upf` command to update function

### Run

In fcli shell:

- Use `invk` command to run function

## Play with fun

- [How to use fun](https://help.aliyun.com/document_detail/64204.html)
- `template.yml` is the config of services and functions this project includes, which will be used by fun
- `event.json` is the test event data for local running
- `.funignore` indicates which files should be ignored while deploying

### Config

**fcli & fun use the same config file. We suggest use fun to develop & deploy.**

```shell
$ fun config
```

### Run locally

```shell
$ npm run dev
```

### Publish

```shell
$ npm run release
```

## Play with web ide

**Web ide does not support local running yet. We suggest use it to run on-line functions. Also config by fcli or fun is required.**

- [Click here to access web ide](https://ide.fc.aliyun.com/cn-hangzhou)
- [How to install and use web ide](https://help.aliyun.com/document_detail/99243.html)

### Start local host for IDE

```shell
$ ide start
```

### Stop local host

```shell
$ ide stop
```
