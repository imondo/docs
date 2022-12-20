# MySQL 基本操作

## 查看数据库

```bash
SHOW DATABASES;
```

## 创建数据库

```bash
CREATE DATABASE 数据库名;
```

## IF NOT EXISTS

如果本身不知道数据库是否存在

```bash
CREATE DATABASE IF NOT EXISTS 数据库名;
```

这条命令是如果指定的数据库不存在的话就创建它，否则什么都不做。

## 切换数据库

```bash
use 数据库名;
```

其实我们在新启动客户端连接服务器时就可以指定连接建立成功后客户端的当前数据库，只要把数据库名称写在启动客户
端的命令 `mysql -h 主机名 -u 用户名 -p密码` 后边就好。

```bash
mysql -h localhost -u root -p123456 my_test
```

## 删除数据库

```bash
drop database 数据库名;
```

## IF EXISTS

```bash
DROP DATABASE IF EXISTS 数据库名;
```

这条命令是如果指定的数据库存在的话就删除它，否则什么都不做。
