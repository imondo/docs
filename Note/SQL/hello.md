#### 简单的增改删查 {docsify-ignore}

> 新增记录

在数据库中新增一条记录所用到的关键词是 `insert into`

```
insert into table_name (ID, NAME) values(1, 'Mondo')
```

> 查询记录

在数据库中查询一条记录所用到的关键词是 `select from`

```
select * from table_name
```
查询出`table_name`表中所有数据，可以带查询条件，关键字 `where`，例如：查询名字为`Mondo`的数据

```
select * from table_name where name='Mondo'
```

> 更新记录

在数据库中查询一条记录所用到的关键词是 `update`

```
update table_name set name='iMondo' where id='1';
```
更新了`table_name`表中`id=1`数据的`name`

> 删除记录

在数据库中查询一条记录所用到的关键词是 `delete`

```
delete from table_name where id=1
```
删除`id=1`的数据



