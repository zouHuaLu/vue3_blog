<template>
    <!-- 这里是信息页 -->
    <el-container>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="16" :lg="16" :md="16" :sm="16" :xs="24">
                    <HomeLeft></HomeLeft>
                </el-col>
                <el-col :span="8" :lg="8" :md="8" :sm="8" :xs="0">
                    <Personal></Personal>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script lang='ts' setup>

import Personal from './Personal.vue'
import HomeLeft from './HomeLeft.vue';

</script>
<style lang='scss' module>
</style>