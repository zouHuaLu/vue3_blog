<template>
    <el-container>
        <el-header height="80px" :class="$style.header">
            <div :class="$style.title">文章&说说发布系统</div>
        </el-header>
        <el-main :class="$style.main">
            <el-card class="box-card">
                <template #header>
                    <div :class="$style.card_header">
                        <span :class="$style.title">登录</span>
                        <el-button class="button" @click="signIn" type="text">注册</el-button>
                    </div>
                </template>
                <el-form :model="form" label-width="120px">
                    <el-form-item label="用户名" required>
                        <el-input
                            v-model="form.username"
                            placeholder="请输入用户名"
                            v-bind:disabled="form.disabled"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" required>
                        <el-input
                            placeholder="请输入密码"
                            type="password"
                            v-bind:disabled="form.disabled"
                            v-model="form.password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="访客">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                        <el-button>
                            <router-link to="/">去主页</router-link>
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-main>
    </el-container>
</template>
<script lang="ts" setup>
import { reactive, watchEffect } from 'vue';
import { login } from '../../api/regist'
import { ElMessage } from 'element-plus'
import { setItem } from '../../utils/sessionStorage'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

interface Form {
    username: String
    password: String
    // 是否访客
    delivery: Boolean
    disabled: Boolean

}

const form = reactive<Form>({
    username: '',
    password: '',
    delivery: false,
    disabled: false,

})

const onSubmit = async () => {
    const { username, password } = form
    const res = await login(username.toString(), password.toString())
    const data = res.data
    if (data.code === 0) {
        ElMessage.error(data.error)
    } else {
        ElMessage.success(data.data)
        const token = data.msg.token
        setItem('token', token)
        setItem('userName', data.msg.userName)
        setItem('userId', data.msg.userId)
        store.dispatch('setUser', data.msg)
        store.dispatch('setAuthenticated', true)
        router.push({
            path: '/release'
        })
    }

}

const signIn = ()=>{
    ElMessage.warning('暂不支持注册')
}

watchEffect(() => {
    if (form.delivery === true) {
        form.username = '测试号'
        form.password = '123456'
        form.disabled = true
    } else {
        form.username = ''
        form.password = ''
        form.disabled = false
    }
})
</script>
<style lang="scss" module>
.header {
    background-color: #fff;
    line-height: 80px;
    .title {
        font-size: 24px;
    }
}
.main {
    width: 500px;
    margin: 0 auto;
}

.card_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .title {
        font-size: 24px;
        font-weight: bold;
    }
}
</style>