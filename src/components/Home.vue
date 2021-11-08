<template>
    <div :class="$style.home_wrap">
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
                        <div>
                            <audio :src='urlList[playNow]' autoplay="true" controls='true'>
                            </audio>
                        </div>
                        <div>                                
                            <el-button type="info"  circle  @click="forwardSong">上一首</el-button>
                            <el-button type="warning" circle @click="stopSong">暂停</el-button>
                            <el-button type="danger"  circle @click="nextSong">下一首</el-button>
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
                                        <a
                                            :class="$style.account"
                                            href="https://github.com/zouHuaLu"
                                            target="_blank"
                                        >
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
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script lang='ts' setup>
import Article from './Article.vue'
import { ref, onMounted } from 'vue'
import md5 from 'js-md5'
import axios from 'axios'
const activeName = ref<string>('latestBlog')
let urlList = ref<any[]>([])
let playNow = ref(27)

let userName = encodeURIComponent('13771018499')
let password = md5('huangjie8499')
let userId: number
let cookie = ''
let jayPlayListId: number
// 获取用户信息
const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        axios.get(`http://127.0.0.1:3000/login/cellphone?phone=${userName}&password=xxx&md5_password=${password}`).then(res => {
            if (res.data.loginType === 1) {
                userId = res.data.account.id
                cookie = res.data.cookie
                resolve(userId)
            } else {
                reject('登陆失败')
            }
        })
    })
}

// const getCloudMusic=(cookie:string)=>{
//     axios.get(`http://127.0.0.1:3000/user/cloud?cookie=${cookie}`).then(res => {
//         console.log(res)
//     })
// }

// 获取歌单id
const getMusicPag = (id: number) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://127.0.0.1:3000/user/playlist?uid=${id}`).then(res => {
            let musicList = res.data.playlist
            for (const item of musicList) {
                if (item.name === '周杰伦（1）') {
                    jayPlayListId = item.id
                    resolve(jayPlayListId)
                }
            }
        })
    })
}

// 根据歌单id获取歌单详情
const getPagMusic = (id: number) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://127.0.0.1:3000/playlist/detail?id=${id}&cookie=${cookie}`).then(res => {
            let idList = res.data.playlist.trackIds
            let targetIdList = []
            for (const item of idList) {
                targetIdList.push(item.id)
            }
            resolve(targetIdList)
        })
    })
}

// 根据歌曲id获取歌曲url
const getSong = (songIdList: ([number])) => {
    return new Promise((resolve, reject) => {
        let targetIdList = songIdList.join()
        axios.get(`http://127.0.0.1:3000/song/url?id=${targetIdList}&cookie=${cookie}`).then(res => {
            resolve(res.data)
        })
    })
}

// 获取歌曲url
const startGetMusic = async () => {
    let userId: any = await getUserInfo()
    let playListId: any = await getMusicPag(userId)
    let data: any = await getPagMusic(playListId)
    let songUrl:any = await getSong(data)
    let songUrlList = []
    for (const item of songUrl.data) {
        songUrlList.push(item.url)
    }
    console.log(songUrlList)
    urlList.value = songUrlList
}

const forwardSong = () => {
    let length = urlList.value.length
    playNow.value < 0 ? playNow.value = length :playNow.value--
}

const stopSong = ()=>{

}

const nextSong = () => {
    let length = urlList.value.length
    playNow.value > length ? playNow.value = 0 :playNow.value++
}

const handleClick = (tab: string) => {
    console.log(tab)
}

onMounted(() => {
    startGetMusic()
})
</script>
<style lang='scss' module>
.home_wrap {
    width: 1500px;
    margin: 0 auto;
}
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
}
</style>