<template>
    <el-container>
        <el-main>
            <el-timeline>
                <template v-for="(item, index) in shuoshuoList" :key="index">
                    <el-timeline-item :timestamp="item.timestamp" placement="top">
                        <el-card>
                            <h4>{{ item.content }}</h4>
                            <p>发布于 {{ item.editor }}</p>
                        </el-card>
                    </el-timeline-item>
                </template>
            </el-timeline>
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
import { getAllShuoShuo } from '../api/api';
import { onMounted, ref } from 'vue';
import moment from 'moment'

interface Allshuoshuo {
    id: number,
    timestamp: string,
    content: string,
    editor: string
}

let shuoshuoList = ref<Allshuoshuo[]>([])

const getAllShuoShuoList = () => {
    getAllShuoShuo().then(res => {
        if (res.status === 200) {
            for (const i of res.data.list) {
                i.timestamp = moment(i.timestamp.toString()).format('YYYY-MM-DD hh:mm:ss')
            }
            shuoshuoList.value = res.data.list
        }
    })
}

onMounted(() => {
    getAllShuoShuoList()
})
</script>
<style lang="scss" module></style>