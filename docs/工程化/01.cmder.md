# cmder

`cmder`是**windows环境**下cmd的利器，比cmd更好的界面操作。

## 安装

cmder官网： [http://cmder.net/](http://cmder.net/)
Github：[https://github.com/cmderdev/cmder](https://github.com/cmderdev/cmder)

直接下载mini版本。

* 将下载的压缩包解压到你想放置的目录。
* 点击Cmder.exe即可运行。

## 添加右键启动

* 为cmder.exe添加环境变量

将`cmder.exe`所在的目录添加系统环境变量。完成后可以使用`win + R`输入`cmder`即可运行`Cmder`。

打开`我的电脑-->属性`后，照图片配置：

<!-- <img src="_img/editor/cmder.png"> -->
[![1h3yQA.md.png](https://s2.ax1x.com/2020/02/09/1h3yQA.md.png)](https://imgchr.com/i/1h3yQA)

* 添加Cmder右键菜单启动

以系统管理员权限打开`cmd`后，输入下面指令

```
Cmder.exe /REGISTER ALL
```

尝试在**任意目录**下右键鼠标，可看到cmder启动命令。

## 常用快捷键

* Tab：自动路径补全

* ctrl + T: 建立新页签

* ctrl + W：关闭页签

* ctrl + tab：切换页签

* ctrl + 1: 快速切换到第一个页签

* ctrl + N: 快速切换到第n个页签

* ctrl + R: 历史命令搜索

* alt + F4: 关闭所有页签

* alt + shift + 1: 开启cmd.exe

* alt + shift + 2: 开启powershell.exe

* alt + shift + 3: 开启powershell.exe（系统管理员权限）

* alt + enter: 切换到全屏状态



