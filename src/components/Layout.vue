<template>
    <el-container>
        <!-- 头部信息 -->
        <el-header :class="$style.elHeader">
            <div>
                <el-row justify="space-between">
                    <el-col :span="4">
                        <router-link to="/home" :class="$style.sign">
                            <img src="@/assets/logo.png" alt="走花鹿" title="走花鹿" />
                        </router-link>
                    </el-col>
                    <el-col :lg="12" :xs='0' :sm='0'>
                        <MusicPanel></MusicPanel>
                    </el-col>
                    <el-col :span="8">
                        <div :class="$style.nav_list">
                            <router-link to="main">首页</router-link>

                            <router-link to="allArticles">文章</router-link>

                            <router-link to="allShuoShuo">说说</router-link>

                            <router-link to="amazing">奇怪</router-link>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-header>
        <div :class="$style.main_content">
            <!-- 这里是轮播图
            <Carousel></Carousel> -->
            <router-view></router-view>
        </div>

        <!-- 这里是底部信息栏 -->
        <el-footer>
            <div :class="$style.footer">
                <a href="http://music.163.com/song?id=1848204642&userid=34198090" target="_blank">LOVE</a>
                <img src="@/assets/aixin.svg" />
                <a href="http://music.163.com/song?id=1856319483&userid=34198090" target="_blank">SHARE</a>
            </div>
            <div :class="$style.copy_right_wrap">
                <div :class="$style.item">本站所有资源均来源于网络，仅供学习参考，如有侵权，非常抱歉，请立即联系作者删除</div>
                <div>2021 走花鹿-网站已备案 | 沪ICP备2021032494号-1</div>
            </div>
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
import Carousel from './Carousel.vue'
import MusicPanel from './MusicPanel.vue'
</script>

<style lang="scss" module>
.main_content {
    width: 90vw;
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
    width: 100%;
    background-color: #58616b;
    .sign {
        color: #fff;
        font-size: 16px;
    }
    .nav_list {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        line-height: 60px;
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
.copy_right_wrap {
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    .item {
        margin: 5px 0;
    }
}
</style>