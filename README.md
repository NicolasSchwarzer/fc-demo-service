# fc-demo-service

Aliyun function compute demo service.

## Introduction

- What is aliyun function compute: [documentation](https://help.aliyun.com/document_detail/52895.html)
- Get played with [aliyun function compute console](https://fc.console.aliyun.com/service/cn-hangzhou)

## Install

Function compute is actually based on container technology, and if we want to simulate production environment, we need to install [docker](https://docs.docker.com/install) locally, **fcli also depends on docker**.

Install aliyun function compute command line tool: [fcli](https://help.aliyun.com/document_detail/52995.html).

And install project dependencies:

```shell
$ npm i
$ npm run bootstrap
```

## Start

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

## Publish

In fcli shell:

- Use `mks` command to create service, use `mkf` command to create function
- Use `ups` command to update service, use `upf` command to update function

## Run

In fcli shell:

- Use `invk` command to run function
