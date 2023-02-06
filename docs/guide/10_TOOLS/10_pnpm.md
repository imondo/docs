# pnpm 包管理

> 官网:https://pnpm.io/zh/installation

它是区别于 `npm` 和 `yarn` 的包管理工具

由于 `npm` 和 `yarn` 存在依赖嵌套问题，同样的依赖会复制很多次，占据比较大的磁盘空间。

## 幽灵依赖

当你没有声明在 `dependencies` 里的依赖，但在代码里却可以 `require` 进来。

但是这样存在隐患，由于没有显式依赖，如果有一天别的包不依赖这个包，那么项目代码也就不能跑了，因为你依赖这个包，但是现在不会被安装了。这就是幽灵依赖的问题。

还有一个问题，依赖包有多个版本时，只会提升一个，其余版本的包还是复制多次，依然有浪费磁盘空间的问题。

## pnpm

软硬连接：操作系统机制，硬连接就是同一个文件的不同引用，而软链接是新建一个文件，文件内容指向另一个路径。

通过 `link` 软硬连接。全局仓库保存一份 `npm` 包内容，使用的时候都是通过 `link` 连接。

## 使用

通过 `npm` 安装

```bash
npm install -g pnpm
```

常用命令

|`npm` 	|`pnpm` |
|  ----  | ----  |
|`npm install`	| `pnpm install`	|
|`npm i <pkg>`	| `pnpm add <pkg>`	|
|`npm uninstall <cmd>`	|`pnpm rm <cmd>`	|
|`npm run <cmd>`	|`pnpm <cmd>`	|

其他详细配置可查看[官网](https://pnpm.io/zh/installation)