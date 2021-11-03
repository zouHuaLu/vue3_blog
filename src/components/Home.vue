<template>
    <!-- 这里是轮播图 -->
    <el-container>
        <el-main>
            <el-row :gutter="20" :class="$style.mes_wrap">
                <el-col :span="16" :lg="16" :md="16" :sm="16" :xs="24">
                    <el-carousel :interval="3000" height="500px">
                        <el-carousel-item :class="$style.carousel_item">
                            <img src="@/assets/lol1.jpeg" />
                            <h3 class="medium">哈哈哈</h3>
                        </el-carousel-item>
                        <el-carousel-item :class="$style.carousel_item">
                            <img src="@/assets/lol2.jpeg" />
                            <h3 class="medium">哈哈哈</h3>
                        </el-carousel-item>
                        <el-carousel-item :class="$style.carousel_item">
                            <img src="@/assets/lol3.jpeg" />
                            <h3 class="medium">哈哈哈</h3>
                        </el-carousel-item>
                        <el-carousel-item :class="$style.carousel_item">
                            <img src="@/assets/lol4.jpeg" />
                            <h3 class="medium">哈哈哈</h3>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
                <el-col :span="8" :lg="8" :md="8" :sm="8" :xs="0">
                    <div :class="$style.announcement">
                        <div>
                            <img src="@/assets/lol1.jpeg" />
                        </div>
                        <div>
                            <img src="@/assets/lol2.jpeg" />
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
    <!-- 这里是信息页 -->
    <el-container :class="$style.el_body">
        <el-main>
            <el-row :gutter="20">
                <el-col :span="16" :lg="16" :md="16" :sm="16" :xs="24">
                    <div :class="$style.main">
                        <el-tabs
                            :class="$style.main_wrap"
                            v-model="activeName"
                            @tab-click="handleClick(activeName)"
                        >
                            <el-tab-pane label="最新博客" name="latestBlog">
                                <Article></Article>
                            </el-tab-pane>
                            <el-tab-pane label="最新说说" name="latestTalk">最新说说</el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>
                <el-col :span="8" :lg="8" :md="8" :sm="8" :xs="0">
                    <div :class="$style.avatar">
                        <el-avatar :size="100">
                            <img src="@/assets/user1.png" alt="头像" />
                        </el-avatar>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script lang='ts' setup>
import Article from './articles/Article.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
const activeName = ref<string>('latestBlog')

const handleClick = (tab: string) => {
    console.log(tab)
}

const getList = () => {
    axios.get('/column/list').then(res => {
        console.log(res)
    })
}

onMounted(() => {
    getList()
})
</script>
<style lang='scss' module>
.mes_wrap {
    height: 500px;
    overflow: hidden;
    .carousel_item {
        img {
            object-fit: fill;
            width: 100%;
            height: 100%;
        }
        h3 {
            position: relative;
            z-index: 999;
            bottom: 50px;
            color: #fff;
        }
    }
    .announcement {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        div {
            height: 49%;
            width: 100%;
            border-radius: 10px;
            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }
    }
}

.el_body {
    margin-top: 10px;
    padding: 0px 10px;
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
    .avatar {
        background-color: #2f4154;
        text-align: center;
    }
}
</style>