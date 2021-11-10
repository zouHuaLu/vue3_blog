<template>
    <el-card :class="$style.card_wrap">
        <template #header>
            <div class="card-header" :class="$style.title">
                <span>GItHub提交记录日历图</span>
            </div>
        </template>
        <div :class="$style.img_panel">
            <img src="https://ghchart.rshah.org/zouHuaLu" />
        </div>
    </el-card>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
.card_wrap {
    border-radius: 10px;
    box-shadow: -2px 2px 20px 0 rgb(18 141 244 / 8%);
}
.title {
    text-align: center;
}
.img_panel {
    img {
        width: 100%;
    }
}
</style>