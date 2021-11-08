<template>
    <el-card :class="$style.box_card">
        <template #header>
            <div class="card-header">
                <span>云音乐</span>
            </div>
        </template>
        <div :class="$style.music_wrap">
            <div>
                <audio ref="musicPanel" :src="urlList[playNow]" autoplay controls="true"></audio>
            </div>
            <div :class="$style.words">音乐来自我的网易云歌单《周杰伦(1)》</div>
            <el-button round @click="toMusic">去看看</el-button>
            <div :class="$style.btn_panel">
                <el-button round @click="forwardSong">上一首</el-button>
                <el-button round @click="toggleAct">{{ toggleAction }}</el-button>
                <el-button round @click="nextSong">下一首</el-button>
            </div>
        </div>
    </el-card>
</template>
<script lang="ts" setup>
import md5 from 'js-md5'
import axios from 'axios'
import { ref, onMounted } from 'vue'
let urlList = ref<any[]>([])
let playNow = ref(1)
let toggleAction = ref<string>('播放')
let musicPanel = ref<any>(null)

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
    let songUrl: any = await getSong(data)
    let songUrlList = []
    for (const item of songUrl.data) {
        songUrlList.push(item.url)
    }
    urlList.value = songUrlList
}

const forwardSong = () => {
    let length = urlList.value.length
    playNow.value < 0 ? playNow.value = length : playNow.value--
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
    playNow.value > length ? playNow.value = 0 : playNow.value++
}

const toMusic = () => {
    window.open('https://music.163.com/#/playlist?id=6985784482', '_blank');
}

onMounted(() => {
    startGetMusic()
})
</script>
<style lang="scss" module>
.box_card {
    height: 100%;
    text-align: center;
}
.music_wrap {
    .words {
        margin: 50px 0;
    }
    .btn_panel {
        position: relative;
        top: 150px;
    }
}
</style>