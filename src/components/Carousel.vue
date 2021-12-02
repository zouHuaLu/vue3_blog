<template>
    <el-container>
        <el-main>
            <el-row :gutter="20" :class="$style.mes_wrap">
                <el-col :span="24">
                    <el-carousel :interval="3000" height="500px">
                        <el-carousel-item :class="$style.carousel_item">
                            <img src="https://tse1-mm.cn.bing.net/th/id/OET.e24560fb06a7417a9cadc11c3679e290?w=272&h=135&c=7&rs=1&o=5&pid=1.9" />
                            <h3 class="medium">哈哈哈</h3>
                        </el-carousel-item>
                        <el-carousel-item :class="$style.carousel_item">
                            <img src="https://tse1-mm.cn.bing.net/th/id/OET.21119ceae7d24964ac7037895acd5ae3?w=272&h=135&c=7&rs=1&o=5&pid=1.9" />
                            <h3 class="medium">哈哈哈</h3>
                        </el-carousel-item>
                        <el-carousel-item :class="$style.carousel_item">
                            <img src="https://tse1-mm.cn.bing.net/th/id/OET.712e10c6f98442068faeaa678ad595dc?w=272&h=135&c=7&rs=1&o=5&pid=1.9" />
                            <h3 class="medium">哈哈哈</h3>
                        </el-carousel-item>
                        <el-carousel-item :class="$style.carousel_item">
                            <img src="https://tse1-mm.cn.bing.net/th/id/OET.a018c2fe54a0471bb030f5f7516cc2c5?w=135&h=135&c=7&rs=1&o=5&pid=1.9" />
                            <h3 class="medium">哈哈哈</h3>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
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