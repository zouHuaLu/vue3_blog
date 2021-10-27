<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ElConfigProvider} from 'element-plus'
import { ref } from '@vue/runtime-core';
import HelloWorld from './components/HelloWorld.vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale1 = ref<any>(zhCn)
</script>

<template>
  <el-config-provider :locale="locale1">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">默认</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </el-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
