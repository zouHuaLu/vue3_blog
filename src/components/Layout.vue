<template>
    <el-container>
        <!-- 头部信息 -->
        <el-header :class="$style.elHeader">
            <div>
                <el-row justify="space-between">
                    <el-col :span="4">
                        <router-link to="/home" :class="$style.sign">LOVE&SHARE</router-link>
                    </el-col>
                    <el-col :span="20" :lg="6" :md="10" :sm="10" :xs="12">
                        <el-row :class="$style.nav_list" justify="space-between" :span="24">
                            <el-col :span="4" :xs="6">
                                <router-link to="/home">主页</router-link>
                            </el-col>
                            <el-col :span="4" :xs="6">
                                <router-link to="/archive">归档</router-link>
                            </el-col>
                            <el-col :span="4" :xs="6">
                                <router-link to="/">分类</router-link>
                            </el-col>
                            <el-col :span="4" :xs="6">
                                <router-link to="/">标签</router-link>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </el-header>

        <router-view  name="main"></router-view>
        
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
.elHeader {
    background-color: #2f4154;
    line-height: 3.75rem;
    .sign {
        color: #fff;
        font-size: 1.25rem;
    }
    .nav_list {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        a {
            color: #fff;
            // margin-left: 20px;
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