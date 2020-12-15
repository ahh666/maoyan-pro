# maoyan-pro

**代码起始于2019年，使用：vue2.6 + vue/cli4.x + axios + typescript + tsx**

没有自己的数据库，所有接口都使用webpack提供的代理，仅本地运行

> 本地运行：
>
> ```bash
> # 安装依赖
> yarn 
> # 启动本地服务
> yarn serve
> ```
>
> 打开首页 `127.0.0.1:8080/#/home`



## BetterScroll 实现侧边字母索引列表

- 用于选择定位页面



## 公共组件封装

> 滚动加载、自定义弹窗等...

-  `src\components\common` 下，使用 tsx 语法
-  `src\components\oldcommon` 下，vue 模板定义



## 自动化注册全局组件

省去每封装一个组件就要进行【引入--全局注册】的步骤，使全局注册不再繁琐



## Scss 样式封装



## Font-icon 封装



## Axios请求封装

基于当前数据请求的简单封装，更多可参考 [ahh666/vue-base-templet: vue项目模板 (github.com)](https://github.com/ahh666/vue-base-templet)



## Vue + Typescript 语法

`*.vue` 文件使用 Typescript 语法



## Vuex + Typescript 

全局数据管理和命名空间



后续有空再更...