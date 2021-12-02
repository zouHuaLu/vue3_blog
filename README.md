# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

---

1. cd vue3_blog
2. npm install
3. npm run dev

推荐安装 vscode 插件 volar

---

## 开发记录

首先一定要确定好开发框架版本
vue: >3.0
vue-router: >4.0
这样才能用最新的组合式 api

---

### 2021/11/20

使用 vite 时，vuex 一定要是 vuex4 版本，否则会安装报错

### 2021/11/21

今天完成了说说发布页及功能

待完成：

1. 数据没有进行校验

2. 退出并清空 session 和 vuex 功能

3. 用户权限方面逻辑优化

4. 我觉得页面好丑

### 2021/12/01

[手机端与pc端自适应解决方案](https://juejin.cn/post/6919757661030318093)

经查：移动端才会去采用rem布局方案，pc端自适应采用浮动布局等等来实现

为了实现移动端适配，需要如下配置

配置postcss-pxtorem

1. `npm i postcss-pxtorem -D`

2. 与`package.json`同级目录创建`postcss.config.js`文件

    ```js
    module.exports = {
        plugins: {
            autoprefixer: {
                overrideBrowserslist: [
                    "Android 4.1",
                    "iOS 7.1",
                    "Chrome > 31",
                    "ff > 31",
                    "ie >= 8",
                    "last 10 versions", // 所有主流浏览器最近10版本用
                ],
                grid: true,
            },
            'postcss-pxtorem': {
                rootValue: 37.5,
                propList: ['*'],
                unitPrecision: 5
            }
        }
    }
    ```

    这样就实现了px转rem

3. 配置`amfe-flexible`，给页面根目录设置`font-size`

    `lib-flexible`方案已经被弃用

    3.1 `npm i amfe-flexible -D`

    3.2 在main.ts文件中`import 'amfe-flexible/index.js'`

    `amfe-flexible`适用于移动端自适应，所以暂时不用了

4. 再安装autoprefixer

    执行`npm i autoprefixer`
