<template>
    <el-container>
        <!-- 头部信息 -->
        <el-header :class="$style.elHeader">
            <div>
                <el-row>
                    <el-col :span="4">
                        <router-link to='/home' :class="$style.sign">LOVE&SHARE</router-link>
                    </el-col>
                    <el-col :span="20">
                        <div :class="$style.nav_list">
                            <router-link to='/home'>主页</router-link>
                            <router-link to='/archive'>归档</router-link>
                            <router-link to='/'>分类</router-link>
                            <router-link to='/'>标签</router-link>
                            <router-link to='/aboutme'>关于我</router-link>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-header>
        <!-- 这里是轮播图 -->
        <el-container>
            <el-main>
                <el-row>
                    <el-col :span="24">
                        <el-carousel :interval="3000" type="card" height="300px">
                            <el-carousel-item :class="$style.carousel_item">
                                <img src="@/assets/lol1.jpeg" alt="" srcset="">
                                <h3 class="medium">哈哈哈</h3>
                            </el-carousel-item>
                            <el-carousel-item :class="$style.carousel_item">
                                <img src="@/assets/lol2.jpeg" alt="" srcset="">
                                <h3 class="medium">哈哈哈</h3>
                            </el-carousel-item>
                            <el-carousel-item :class="$style.carousel_item">
                                <img src="@/assets/lol3.jpeg" alt="" srcset="">
                                <h3 class="medium">哈哈哈</h3>
                            </el-carousel-item>
                            <el-carousel-item :class="$style.carousel_item">
                                <img src="@/assets/lol4.jpeg" alt="" srcset="">
                                <h3 class="medium">哈哈哈</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <el-container :class="$style.el_body">
            <!-- 这里是中间左侧个人信息栏 -->
            <el-aside :class="$style.el_aside" width="300px">
                <div :class="$style.avatar">
                    <el-avatar :size='100' src="@/assets/weibo.svg"></el-avatar>
                </div>
            </el-aside>
            <!-- 这里是中间右侧显示的信息栏 -->
            <el-main>
                <router-view name='main'></router-view>
            </el-main>
        </el-container>
        <!-- 这里是底部信息栏 -->
        <el-footer>
            <div :class="$style.footer">
                <a href="">LOVE</a>
                <img src="@/assets/aixin.svg">
                <a href="">SHARE</a>
            </div>
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
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
    .elHeader{
        background-color: #2f4154;
        line-height: 3.75rem;
        .sign{
            color:#fff;
            font-size: 1.25rem;
        }
        .nav_list{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            a{
                color:#fff;
                margin-left: 20px;
            }
        }
    }

    .carousel_item{
        img{
            width: 480px;
            height: 295px;
        }
        h3{
            position: relative;
            z-index: 999;
            bottom: 50px;
            color: #fff;
        }
    }

    .el_body{
        margin-top: 10px;
        min-height: 25rem;
        .el_aside{
            background-color: #2f4154;
            .avatar{
                text-align: center;
            }
        }
    }

    .footer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img{
            width: 3rem;
        }
    }
</style>