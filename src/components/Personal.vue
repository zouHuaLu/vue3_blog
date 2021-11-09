<template>
    <div :class="$style.personal_wrap">
        <el-carousel indicator-position="outside">
            <el-carousel-item>
                <div :class="$style.personal_item">
                    <div :class="$style.avator_pic">
                        <el-avatar :size="100">
                            <img src="@/assets/user1.png" alt="头像" />
                        </el-avatar>
                    </div>
                    <div :class="$style.nick_name">走花鹿</div>
                    <div :class="[$style.hometown, $style.personal_mes]">
                        <img src="@/assets/dizhi.svg" alt="地址" />
                        江苏-常州-溧阳天目湖
                    </div>
                    <div :class="[$style.work, $style.personal_mes]">
                        <img src="@/assets/zhiye.svg" alt="职业" />
                        前端开发
                    </div>
                    <div :class="[$style.motto, $style.personal_mes]">
                        <img src="@/assets/shuoshuo.svg" alt="说说" />
                        我梦想中的生活一笔一笔勾勒
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <el-card :class="$style.box_card">
                    <template #header>
                        <div :class="$style.header">
                            <span>我的简书</span>
                        </div>
                    </template>
                    <a
                        :class="$style.account"
                        href="https://www.jianshu.com/u/63b43f7fdff3"
                        target="_blank"
                    >
                        <div :class="$style.avator_pic">
                            <el-avatar :size="100">
                                <img src="@/assets/jianshu.jpg" alt="简书" />
                            </el-avatar>
                        </div>
                        <div :class="$style.words">随便写写</div>
                    </a>
                </el-card>
            </el-carousel-item>
            <el-carousel-item>
                <el-card :class="$style.box_card">
                    <template #header>
                        <div :class="$style.header">
                            <span>我的B站</span>
                        </div>
                    </template>
                    <a
                        :class="$style.account"
                        href="https://space.bilibili.com/10841979"
                        target="_blank"
                    >
                        <div :class="$style.avator_pic">
                            <el-avatar :size="100">
                                <img src="@/assets/bilibili-on.svg" alt="B站" />
                            </el-avatar>
                        </div>
                        <div :class="$style.words">编程视频资源很多，偶尔直播打游戏</div>
                    </a>
                </el-card>
            </el-carousel-item>
            <el-carousel-item>
                <el-card :class="$style.box_card">
                    <template #header>
                        <div :class="$style.header">
                            <span>我的GitHub</span>
                        </div>
                    </template>
                    <a :class="$style.account" href="https://github.com/zouHuaLu" target="_blank">
                        <div :class="$style.avator_pic">
                            <el-avatar :size="100">
                                <img src="@/assets/Github.svg" alt="Github" />
                            </el-avatar>
                        </div>

                        <div :class="$style.words">我的项目学习仓库，欢迎点star</div>
                    </a>
                </el-card>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
    .personal_wrap {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: -2px 2px 20px 0 rgb(18 141 244 / 8%);
        text-align: center;
        .personal_item {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .personal_mes {
                display: flex;
                align-items: center;
                img {
                    width: 24px;
                    height: 24px;
                    margin-right: 5px;
                }
            }
        }
        .box_card {
            height: 100%;
            .header {
                span {
                    font-size: 14px;
                    font-weight: 500;
                }
            }
            .avator_pic {
                margin-bottom: 50px;
            }
            .words {
                font-size: 1.5rem;
            }
        }
    }
</style>