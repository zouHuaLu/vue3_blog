<template>
    <div :class="$style.box_card">
        <div :class="$style.music_wrap">
            <div :class="$style.audio_wrap">
                <audio ref="musicPanel" :src="urlList[playNow]" @ended="nextSong" autoplay controls="true"></audio>
            </div>
            <div :class="$style.btn_panel">
                <el-button round type='info' @click="toMusic">去看看</el-button>
                <el-button round type='info' @click="forwardSong">上一首</el-button>
                <el-button round type='info' @click="toggleAct">{{ toggleAction }}</el-button>
                <el-button round type='info' @click="nextSong">下一首</el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import md5 from 'js-md5'
import axios from 'axios'
import { ref, onMounted } from 'vue'
let urlList = ref<any[]>([])
let playNow = ref(3)
let toggleAction = ref<string>('暂停')
let musicPanel = ref<any>(null)
let userName = encodeURIComponent('13771018499')
let password = md5('huangjie8499')
let userId: number
let cookie = ''
let jayPlayListId: number


let baseURL: string = ''
if (process.env.NODE_ENV == 'production') {
    // 线上
    baseURL = 'http://139.224.190.142:3000'
} else if (process.env.NODE_ENV == 'development') {
    // 本地
    baseURL = 'http://127.0.0.1:3000'
}
// 获取用户信息
const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/login/cellphone?phone=${userName}&password=xxx&md5_password=${password}`).then(res => {
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

// 获取歌单id
const getMusicPag = (id: number) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/user/playlist?uid=${id}`).then(res => {
            let musicList = res.data.playlist
            for (const item of musicList) {
                if (item.name === '周杰伦') {
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
        axios.get(`${baseURL}/playlist/detail?id=${id}&cookie=${cookie}`).then(res => {
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
        axios.get(`${baseURL}/song/url?id=${targetIdList}&cookie=${cookie}`).then(res => {
            resolve(res.data)
        })
    })
}

// 获取歌曲url
const startGetMusic = async () => {
    let userId: any = await getUserInfo()
    let playListId: any = await getMusicPag(userId)
    let data: any = await getPagMusic(playListId)
    let songUrl: any = await getSong(data)
    let songUrlList = []
    for (const item of songUrl.data) {
        songUrlList.push(item.url)
    }
    urlList.value = songUrlList
}

const forwardSong = () => {
    let length = urlList.value.length
    playNow.value <= 0 ? playNow.value = length - 1 : playNow.value--
}

const toggleAct = () => {
    if (toggleAction.value === '播放') {
        toggleAction.value = '暂停'
        musicPanel.value.play()
    } else {
        toggleAction.value = '播放'
        musicPanel.value.pause()
    }
}

const nextSong = () => {
    let length = urlList.value.length
    playNow.value >= length ? playNow.value = 0 : playNow.value++
}

const toMusic = () => {
    window.open('https://music.163.com/#/playlist?id=6985784482', '_blank');
}

onMounted(() => {
    startGetMusic()
})
</script>
<style lang="scss" module>
.music_wrap {
    display: flex;
    .words {
        margin: 50px 0;
    }
}

.btn_panel{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.audio_wrap{
    vertical-align: middle;
}
</style>