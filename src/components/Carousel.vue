<template>
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
                        <MusicPanel></MusicPanel>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
</template>
<script lang="ts" setup>
import MusicPanel from './MusicPanel.vue'
</script>
<style lang="scss" module>
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
</style>