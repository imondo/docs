# VSCode 同步配置

由于使用`VSCode`来编辑代码，每次换取电脑都要重新来配置自己的编辑器，所以使用`Settings Sync`插件来同步我们的编辑器配置。

## VSCode 同步方案

VSCode 的插件 Setting Sync 提供了通过 github 的 Gist 完成配置同步的功能。但是由于它的教程不完整，导致同步起来会产生省问题。最常见的问题是无法下载配置，提示信息为：

Sync : Invalid / Expired GitHub Token. Please generate new token with scopes mentioned in readme. Exception Logged in Console.

Gist 可以保存上传的配置文件。拉取配置文件需要配置两个 id，一个是 Gist Id，一个是 Token Id。这两个 Id 前者标识配置文件，后者用于身份验证。我们无法下载的原因就是我们使用单单在 Sync:Download Settings 命令中使用了 Gist id，所以错误提示才是无效的 token。

所以，其实关键点就是两个：

* 进行身份验证,设置（新建）token（重点）

* 设置gist id（这个基本不用改，就是用之前的那个gist id就行）

> 进行身份验证,设置（新建）token
 

还是在 VSCode 中输入命令：`Sync:Advanced Options`，然后选择 `Sync:Edit Extension Local Settings`，编辑 `syncLocalSettings.json` 这个配置文件。这个文件中有一项 token 没有设置（或者是配置的就是以前的过期的token），这里就需要设置为 Token Id。你可以用之前上传配置文件时设置的 Token，也可以再新建一个 Token。创建步骤如下：

**[GitHub](github.com/settings/tokens)**重新创建一个 `Token`

<!-- <img src="_img/editor/1.png">
<img src="_img/editor/2.png">
<img src="_img/editor/3.png"> -->
[![1h3adK.md.png](https://s2.ax1x.com/2020/02/09/1h3adK.md.png)](https://imgchr.com/i/1h3adK)
[![1h3dIO.md.png](https://s2.ax1x.com/2020/02/09/1h3dIO.md.png)](https://imgchr.com/i/1h3dIO)
[![1h3UZ6.md.png](https://s2.ax1x.com/2020/02/09/1h3UZ6.md.png)](https://imgchr.com/i/1h3UZ6)

**注意：**这里重新生成之后，有关此gist id引用到的地方的token也需要同步更新，否则没办法使用。

## 快捷键

1. ### 重复的行

`Shift + Alt + 向下箭头` (`Mac: command + Shift + 向下箭头`)

2. ### 移至文件的开头/结尾

要使光标移到文件的第一行或最后一行，最快的方法是按`Ctrl + Home` (`Mac: command + Home`)键开头，然后按`Ctrl + End` (`Mac: command + End`)键结尾。

3. ### 批量替换当前文件中所有匹配的文本

`Ctrl + F2` (`Mac: command + F2`)

4. ### 向上/向下移动一行

按`Alt + 向上箭头`(`Mac: option+ 向上箭头`)当前行向上移动，按`Alt + 向下箭头`(`Mac: option+ 向下箭头`))当前行向下移动。

5. ### 删除一行

使用`Ctrl + X`剪切命令(`Mac：command + X`)来删除一行

或者使用 `Ctrl + Shift + K` (`Mac: command + Shift + K`)命令。

6. ### 将编辑器向左或向右移动

`Ctrl + Shift + PgUp/PgDown`(`command + Shift + PgUp/PgDown`)向左/向右移动编辑器

7. ### 复制光标向上或者向上批量添加内容

按`Ctrl + Alt +向上箭头`(`Mac: command + Option +向上箭头`)将光标添加到上面，按`Ctrl + Alt +向下箭头`(`Mac: command + Option + 向下箭头`)将光标添加到下面。

8. ### 一次搜索所有文件的文本

`Ctrl + Shift + F`打开视图

9. ### 全部折叠/打开代码

`Ctrl + Shift + Alt + [`折叠代码，`Ctrl + Shift + Alt + ]`打开代码

10. ### 切换编辑器Tab

`Ctrl + PgUp/PgDown`切换上下编辑器
