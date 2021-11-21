<template>
    <template v-if="shuoshuoList.length != 0">
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
    </template>
    <template v-else>
        <el-empty description="暂无数据"></el-empty>
    </template>
</template>
<script lang="ts" setup>
import { getShuoShuo } from '../api/api';
import { onMounted, ref } from 'vue';
import moment from 'moment'
interface shuoshuo {
    id: number,
    timestamp: string,
    content: string
    editor: string
}

let shuoshuoList = ref<shuoshuo[]>([])

const getShuoShuoList = () => {
    getShuoShuo().then(res => {
        if (res.status === 200) {
            for (const i of res.data.list) {
                i.timestamp = moment(i.timestamp.toString()).format('YYYY-MM-DD hh:mm:ss')
            }
            shuoshuoList.value = res.data.list
        }
    })
}

onMounted(() => {
    getShuoShuoList()
})
</script>
<style lang="scss" module></style>