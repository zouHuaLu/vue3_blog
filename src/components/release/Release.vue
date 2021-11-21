<template>
    <el-card :class="$style.box_card">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="发布说说" name="shuoshuo">
                <Shuo></Shuo>
            </el-tab-pane>
            <el-tab-pane label="发布文章" name="article">文章</el-tab-pane>
        </el-tabs>
    </el-card>
</template>
<script lang="ts" setup>
import Shuo from './Shuo.vue'
const activeName = 'shuoshuo'
const handleClick = (tab: string) => {
    // console.log(tab)
}

</script>
<style lang="scss" module>
.box_card {
    height: 100vh;
}
</style>
