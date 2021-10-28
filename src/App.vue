<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ElConfigProvider} from 'element-plus'
import { ref } from '@vue/runtime-core';
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale1 = ref<any>(zhCn)
</script>

<template>
  <el-config-provider :locale="locale1">
    <router-view></router-view>
  </el-config-provider>
</template>

<style>

</style>
