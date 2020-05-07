(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{366:function(a,t,v){"use strict";v.r(t);var s=v(18),_=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"构建配置包设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构建配置包设计"}},[a._v("#")]),a._v(" 构建配置包设计")]),a._v(" "),v("h2",{attrs:{id:"构建配置抽离成-npm-包的意义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构建配置抽离成-npm-包的意义"}},[a._v("#")]),a._v(" 构建配置抽离成 npm 包的意义")]),a._v(" "),v("ul",[v("li",[a._v("通用性\n"),v("ul",[v("li",[a._v("业务开发者无需关注构建配置，提升开发效率")]),a._v(" "),v("li",[a._v("统一团队构建脚本")])])]),a._v(" "),v("li",[a._v("可维护性\n"),v("ul",[v("li",[a._v("构建配置合理的拆分")]),a._v(" "),v("li",[a._v("文档，REARME文档，ChangeLog文档")])])]),a._v(" "),v("li",[a._v("质量\n"),v("ul",[v("li",[a._v("冒烟测试，单元测试，测试覆盖率")]),a._v(" "),v("li",[a._v("持续集成")])])])]),a._v(" "),v("h2",{attrs:{id:"可选方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可选方案"}},[a._v("#")]),a._v(" 可选方案")]),a._v(" "),v("ul",[v("li",[a._v("通过多个配置文件管理不同环境的构建，webpack --config 参数进行控制")]),a._v(" "),v("li",[a._v("将构建配置设计成一个库，比如：hjs-webpack")]),a._v(" "),v("li",[a._v("抽成一个工具进行管理，比如：create-react-app")]),a._v(" "),v("li",[a._v("将所有的配置放在一个文件，通过 --env 参数控制分支选择")])]),a._v(" "),v("h2",{attrs:{id:"设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计"}},[a._v("#")]),a._v(" 设计")]),a._v(" "),v("p",[a._v("通过多个配置文件管理不同环境配置")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("基础配置：webpack.base.js")])]),a._v(" "),v("li",[v("p",[a._v("开发环境：webpack.dev.js")])]),a._v(" "),v("li",[v("p",[a._v("生成环境：webpack.prod.js")]),a._v(" "),v("p",[a._v("...")])])]),a._v(" "),v("p",[a._v("抽离成一个 npm 包统一管理")]),a._v(" "),v("ul",[v("li",[a._v("规范：git commit 日志，README，ESLint 规范，Semver规范")]),a._v(" "),v("li",[a._v("质量：冒烟测试，单元测试，测试覆盖率和 CI")])]),a._v(" "),v("h2",{attrs:{id:"webpack-merge-组合配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webpack-merge-组合配置"}},[a._v("#")]),a._v(" webpack-merge 组合配置")]),a._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[a._v("module"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("merge")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("baseConfig"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" devConfig"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[a._v("1")]),v("br")])]),v("h2",{attrs:{id:"冒烟测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#冒烟测试"}},[a._v("#")]),a._v(" 冒烟测试")]),a._v(" "),v("p",[a._v("冒烟测试是指提交测试的软件在进行详细深入的测试之前而进行的预测试")]),a._v(" "),v("p",[a._v("主要目的")]),a._v(" "),v("ul",[v("li",[a._v("暴露导致软件需要重新发布的基本功能失效等严重问题")])]),a._v(" "),v("h3",{attrs:{id:"冒烟测试执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#冒烟测试执行"}},[a._v("#")]),a._v(" 冒烟测试执行")]),a._v(" "),v("ul",[v("li",[a._v("构建是否成功")]),a._v(" "),v("li",[a._v("每次构建完成 build 目录是否有内容输出\n"),v("ul",[v("li",[a._v("是否有 JS、CSS 等静态文件")]),a._v(" "),v("li",[a._v("是否有 HTML 文件")])])])]),a._v(" "),v("h2",{attrs:{id:"持续集成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#持续集成"}},[a._v("#")]),a._v(" 持续集成")]),a._v(" "),v("p",[a._v("优点")]),a._v(" "),v("ul",[v("li",[a._v("快速发现错误")]),a._v(" "),v("li",[a._v("防止分支大幅度偏离主干")])]),a._v(" "),v("p",[a._v("代码集成到主干之前，必须通过自动化测试。只要有一个测试用例失败，就不能集成")]),a._v(" "),v("p",[v("a",{attrs:{href:""}},[a._v("代码参考")])])])}),[],!1,null,null,null);t.default=_.exports}}]);