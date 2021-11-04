<template>
    <template v-for="(item,index) in articleList" :key="index">
        <div :class="$style.article_item">
            <div :class="$style.left">
                <img src="@/assets/lol1.jpeg" />
            </div>
            <div :class="$style.right">
                <div :class="$style.title_wrap">
                    <div :class="$style.tag">{{item.tag}}</div>
                    <div :class="$style.title">{{item.des}}</div>
                </div>
                <div :class="$style.tags_wrap">
                    <div :class="$style.tag">
                        <span>#</span>js
                    </div>
                    <div :class="$style.tag">
                        <span>#</span>DOM
                    </div>
                </div>
                <div :class="$style.produce_wrap">
                    <div :class="$style.produce">技能加点啦！</div>
                </div>
                <div :class="$style.mes_wrap">
                    <div :class="$style.mes">
                        <span>
                            <img src="@/assets/zan.svg" />
                        </span>6
                    </div>
                    <div :class="$style.mes">
                        <span>
                            <img src="@/assets/zuozhe.svg" />
                        </span>zouhualu
                    </div>
                    <div :class="$style.mes">
                        <span>
                            <img src="@/assets/shizhong.svg" />
                        </span>2021-5-21
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>
<script lang="ts" setup>
import {ref, onMounted } from 'vue'
import axios from 'axios'

interface article {
    readonly id:number,
    tag:string,
    author:string,
    createTime:string,
    des:string,
    imgurl:string,
    introduce:string,
    title:string
}


let articleList = ref<article[]>([])

const getList = () => {
    axios.get('/column/list').then(res => {
        let data = res.data
        if(data.code === 1){
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
    justify-content: space-around;
    &:hover img {
        transform: scale(1.1);
    }
    .left {
        width: 350px;
        height: 170px;
        overflow: hidden;
        border-radius: 5px;
        cursor: pointer;
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
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
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
