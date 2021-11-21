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
