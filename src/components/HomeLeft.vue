<template>
    <div :class="$style.main">
        <el-tabs
            :class="$style.main_wrap"
            v-model="activeName"
            @tab-click="handleClick(activeName)"
        >
            <el-tab-pane label="最新博客" name="latestBlog">
                <Article></Article>
            </el-tab-pane>
            <el-tab-pane label="最新说说" name="latestTalk">
                <TalkVue></TalkVue>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script lang="ts" setup>
import Article from './Article.vue'
import TalkVue from './Talk.vue'
import { ref } from 'vue'

const activeName = ref<string>('latestBlog')

const handleClick = (tab: string) => {
    // console.log(tab)
}
</script>
<style lang="scss" module>
.main,
.avatar {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: -2px 2px 20px 0 rgb(18 141 244 / 8%);
}
.main_wrap {
    padding: 0 10px;
}
</style>