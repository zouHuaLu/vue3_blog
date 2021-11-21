<template>
    <div :class="$style.shuo_wrap">
        <el-form :model="form" label-width="120px" :rules="rules">
            <el-form-item label="发布者">
                <el-input v-model="form.author" disabled></el-input>
            </el-form-item>
            <el-form-item label="发布时间" required>
                <el-col :span="11">
                    <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                    ></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="发布内容" required>
                <el-input
                    v-model="form.desc"
                    autosize
                    type="textarea"
                    :autosize="{ minRows: 3, maxRows: 6 }"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发表</el-button>
                <el-button @click="clearForm">清空</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { releaseShuoShuo } from '../../api/api'
import moment from 'moment'
import { ElMessage } from "element-plus";

const store = useStore()

interface Form {
    // 作者
    author: String
    authorId: Number
    // 发布日期
    date1: Date | String
    // 发布时间
    date2: Date | String
    // 发布内容
    desc: String
    // 发布图片
    img: String
}

const timeStamp = computed(() => {
    // 这里是对时间格式进行处理，用到了moment.js，要不然数据无法入库
    const date1 = moment(form.date1.toString()).format('YYYY-MM-DD')
    const date2 = moment(form.date2.toString()).format('hh:mm:ss')
    return date1 + ' ' + date2
})

const form = reactive<Form>({
    author: '',
    authorId: 0,
    date1: '',
    date2: '',
    desc: '',
    img: ''
})

const rules = {

    date1: [
        {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change',
        },
    ],
    desc: [
        {
            required: true,
            message: '请输入内容',
            trigger: 'change',
        },
    ]
}

// 提交
const onSubmit = () => {
    let reqData = {
        ...form,
        timestamp: timeStamp.value
    }
    releaseShuoShuo(reqData).then(res => {
        if (res.status === 200) {
            ElMessage.success(res.data.data)
            clearForm()
        }
    })
}

// 清空
const clearForm = () => {
    form.date1 = ''
    form.date2 = ''
    form.desc = ''
    form.img = ''
}

const getUserName = () => {
    form.author = store.getters.userName
    form.authorId = store.getters.userId
}

onMounted(() => {
    getUserName()
})
</script>
<style lang="scss" module>
.shuo_wrap {
    margin: 0 auto;
    width: 500px;
}
</style>