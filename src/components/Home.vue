<template>
    <!-- 这里是信息页 -->
    <el-container>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="16">
                    <HomeLeft></HomeLeft>
                </el-col>
                <el-col :span="8">
                    <Personal></Personal>
                    <div :class="$style.github_panel">
                        <GitHubPanel></GitHubPanel>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script lang='ts' setup>

import Personal from './Personal.vue'
import HomeLeft from './HomeLeft.vue';
import GitHubPanel from './GitHubPanel.vue';

</script>
<style lang='scss' module>
.github_panel{
    margin-top: 10px;
}
</style>