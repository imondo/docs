### 前言

一些前端工具的使用汇总。

### 错误汇总

* `npm install` 出现 `Unexpected end of JSON input while parsing near`的错误

我们可以先清除缓存 
```
npm cache clean --force
```
再次执行 `npm install`，如仍然出现原错误，可执行下句代码：
```
npm config set registry http://registry.cnpmjs.org
```

将`npm`代理重置。

