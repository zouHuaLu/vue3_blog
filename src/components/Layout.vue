<template>
    <el-container>
        <!-- 头部信息 -->
        <el-header :class="$style.elHeader">
            <div>
                <el-row justify="space-between">
                    <el-col :span="4">
                        <router-link to="/home" :class="$style.sign">
                        <img src="@/assets/logo.png" alt="走花鹿" title="走花鹿">
                        </router-link>
                    </el-col>
                    <el-col :span="4">
                        <div :class="$style.nav_list">
                            <router-link to="/home">首页</router-link>

                            <router-link to="/allArticles">文章</router-link>

                            <router-link to="/allShuoShuo">说说</router-link>

                            <router-link to="/amazing">奇怪</router-link>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-header>
        <div :class="$style.main_content">
            <!-- 这里是轮播图 -->
            <Carousel></Carousel>
            <router-view name="main"></router-view>
        </div>

        <!-- 这里是底部信息栏 -->
        <el-footer>
            <div :class="$style.footer">
                <a href="https://music.163.com/#/song?id=441491828">LOVE</a>
                <img src="@/assets/aixin.svg" />
                <a href="https://music.163.com/#/song?id=186145&userid=34198090">SHARE</a>
            </div>
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
import Carousel from './Carousel.vue'
</script>

<style lang="scss" module>
.main_content {
    width: 1500px;
    margin: 0 auto;
}
a {
    text-decoration: none;
    color: black;
}
a:visited {
    text-decoration: none;
}
.router-link-active {
    text-decoration: none;
}
.elHeader {
    background-color: #58616b;
    line-height: 3.75rem;
    .sign {
        color: #fff;
        font-size: 1.25rem;
    }
    .nav_list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        a {
            color: #fff;
        }
    }
}
.footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 3rem;
    }
}
</style>