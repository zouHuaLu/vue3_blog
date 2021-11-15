<template>
    <div :class="$style.bigscreen_panel">
        <div :class="$style.message_panel">
            <div :class="$style.blog_name">走花鹿的个人博客</div>
            <div :class="$style.blog_msg">
                <div>本博客技术栈(学习交流)</div>
                <div>前端：Vite+Vue3+Typescript+Scss</div>
                <div>后端：NodeJs+Express+MySQL</div>
            </div>
            <div :class="$style.to_home">
                <router-link to="/home">
                    <el-button type="success" round>去主页</el-button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" module>
.bigscreen_panel {
    width: 100vw;
    height: 100vh;
    background-image: url("@/assets/bigscreen.jpg");
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .message_panel {
        .blog_name {
            color: #fff;
            font-weight: 700;
            font-size: 50px;
            text-shadow: 0 3px 6px rgb(0 0 0 / 30%);
        }
        .blog_msg {
            color: #fff;
            margin-top: 10px;
            position: absolute;
            bottom: 10px;
            left: 10px;
        }
        .to_home {
            margin-top: 50px;
            text-align: center;
        }
    }
}
</style>