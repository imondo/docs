# webpack 与 ESLint 结合

使用 `eslint-loader` 和 `eslint-config-airbnb`

* eslint-config-airbnb 是 `airbnb`团队使用的代码规则

```js
npm i eslint-loader babel-eslint eslint-config-airbnb -D
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            }
        ]
    }
}
// .eslintrc.js
module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb', // 依赖airbnb规则
    env: {
      	browser: true,
        node: true
    },
    rules: {
        semi: 'error'
    }
}
```

