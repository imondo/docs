# monorepo 项目管理

`monorepo` 是一种项目架构方式，**一个仓库内包含多个开发项目（模块，包）**，里面的模块可以单独发布。

## 新建

项目根目录下新建 `pnpm-workspace.yaml` 配置文件

```yaml
packages:
  # packages 目录 创建不同的子项目
  - 'packages/**'
  # 不包括在 test 文件夹下的 package
  - '!**/test/**'
```

在 packages 创建几个项目文件夹

![monorepo.png](/imgs/monorepo.png)

## 安装依赖

全局安装 `pnpm` 依赖

```bash
npm i pnpm -g
```

安装项目公共开发依赖 `typeScript`

```bash
pnpm i typescript -w -D
```

## 局部依赖安装

可以 cd 进入子目录安装

```bash
pnpm create vite
```

也根据 `pnpm` 文档提供根目录执行命令，需要先到指定子目录 `app1` 进行初始化

```bash
pnpm init
```

子目录命令通用为 `命名空间 + 项目名`，这里名称为 `@monorepo-test/app1`，必须命令，不然 `pnpm add -filter` 的时候找不到添加包的项目目录

```bash
pnpm add fd-cli --filter @monorepo-test/app1
```

## 项目内依赖安装

`app1` 需要依赖 `utils` 功能，为了让依赖实时更新最新版本，才用通配符更新版本

```bash
pnpm add @monorepo-test/utils@* --filter @monorepo-test/app1
```

![mono1.png](/imgs/mono1.png)

## 常用 monorepo pnpm 命令

列出包源码位置，被内部哪些项目引用

```bash
pnpm why -y
```

取消依赖安装

```bash
pnpm remove vue

pnpm remove vue --filter  @monorepo-test/app1
```

本地 link 文件

```bash
pnpm link --global
pnpm link --global <pkg>
```
