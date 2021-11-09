<template>
    <el-container>
        <el-main>
            <el-timeline>
                <template v-for="(item, index) in shuoshuoList" :key="index">
                    <el-timeline-item :timestamp="item.timestamp" placement="top">
                        <el-card>
                            <h4>{{ item.content }}</h4>
                            <p>发布于 {{ item.timestamp }}</p>
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

interface Allshuoshuo {
    id: number,
    timestamp: string,
    content: string
}

let shuoshuoList = ref<Allshuoshuo[]>([])

const getAllShuoShuoList = () => {
    getAllShuoShuo().then(res => {
        if (res.status === 200) {
            shuoshuoList.value = res.data.list
        }
    })
}

onMounted(() => {
    getAllShuoShuoList()
})
</script>
<style lang="scss" module></style>