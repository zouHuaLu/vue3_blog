<template>
    <template v-for="(item,index) in articleList" :key="index">
        <div :class="$style.article_item">
            <div :class="$style.left">
                <img :src="item.imgUrl" title="文章首图" />
            </div>
            <div :class="$style.right">
                <div :class="$style.title_wrap">
                    <div :class="$style.tag">{{ item.tags }}</div>
                    <div :class="$style.title">{{ item.title }}</div>
                </div>
                <div :class="$style.tags_wrap">
                    <div :class="$style.tag">
                        <span>#</span>
                        {{ item.tags }}
                    </div>
                    <div :class="$style.tag">
                        <span>#</span>DOM
                    </div>
                </div>
                <div :class="$style.produce_wrap">
                    <div :class="$style.produce">{{ item.introduce }}</div>
                </div>
                <div :class="$style.mes_wrap">
                    <div :class="$style.mes">
                        <span>
                            <img src="@/assets/zan.svg" />
                        </span>
                        {{ item.zan }}
                    </div>
                    <div :class="$style.mes">
                        <span>
                            <img src="@/assets/zuozhe.svg" />
                        </span>
                        {{ item.author }}
                    </div>
                    <div :class="$style.mes">
                        <span>
                            <img src="@/assets/shizhong.svg" />
                        </span>
                        {{ item.createTime }}
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface article {
    readonly id: number,
    tags: string,
    author: string,
    createTime: string,
    imgUrl: string,
    introduce: string,
    title: string,
    zan: number
}

let articleList = ref<article[]>([])

const getList = () => {
    axios.get('http://127.0.0.1:8082/blog/api/column/list').then(res => {
        let data = res.data
        if (data.code === 1) {
            articleList.value = data.list
        }
    })
}

onMounted(() => {
    getList()
})
</script>
<style lang="scss" module>
.article_item {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: flex-start;
    &:hover img {
        transform: scale(1.1);
    }
    .left {
        min-width: 350px;
        height: 170px;
        overflow: hidden;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 30px;
        img {
            transition: all 0.5s;
            width: 100%;
            height: 100%;
        }
    }
    .right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 500px;
        .title_wrap {
            display: flex;
            align-items: center;
            .tag {
                font-size: 0.5rem;
                display: inline-block;
                padding: 0 4px;
                border-radius: 2px;
                background: transparent;
                line-height: 21px;
                margin-right: 10px;
                font-weight: normal;
                border: 1px solid #1890ff;
                color: #1890ff;
            }
            .title {
                font-size: 1.5rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                &:hover {
                    color: #1890ff;
                }
            }
        }
        .tags_wrap {
            display: flex;
            flex-direction: row;
            .tag {
                display: inline-block;
                padding: 0 8px;
                background: #f5f7fa;
                border-radius: 3px;
                border: 1px solid #f2f2f2;
                color: rgb(80, 79, 79);
                cursor: pointer;
                transition: all 0.3s;
                margin-right: 15px;
                line-height: 24px;
                span {
                    color: #1890ff;
                    display: inline-block;
                    margin-right: 5px;
                }
            }
        }
        .produce_wrap {
            .produce {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #777;
                font-size: 1rem;
            }
        }
        .mes_wrap {
            color: #aaa;
            display: flex;
            .mes {
                color: #afb0b4;
                margin-right: 10px;
                display: flex;
                align-items: center;
                img {
                    width: 1.5rem;
                    height: 1.5rem;
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>
