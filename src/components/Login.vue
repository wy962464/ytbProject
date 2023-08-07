<script setup>
import { AuthStore } from '@/store/modules/auth.js';
import { UserStore } from '@/store/modules/user.js';
import { ref, nextTick, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { initRouter } from '@/routers/initRouter.js';
import { showLoading, hideLoading } from '@/utils/loading.js';
import { getEnterpriseInfo } from '@/api/modules/ccc.js';

const authStore = AuthStore();
const userStore = UserStore();
let router = useRouter();
let code = ref('获取验证码');
let isDisabled = ref(false);
let timer = null;
let disabledForm = ref(false);
const ruleForm = reactive({
    userName: '',
    password: '',
    captcha: '',
});
const rules = reactive({
    userName: [
        {
            required: true,
            message: '请输入用户名',
            trigger: ['change', 'blur'],
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: ['change', 'blur'],
        },
    ],
    captcha: [
        {
            required: true,
            message: '请输入验证码',
            trigger: ['change', 'blur'],
        },
    ],
});
const ruleFormRef = ref();
function handlerClick(ruleForm) {
    if (!ruleForm) return;
    ruleForm.validate(async valid => {
        if (valid) {
            disabledForm.value = true;
            try {
                // const { data } = await getEnterpriseInfo({ district: '深圳市' });
                userStore.$patch({
                    token: '21321',
                    tokenHead: '555555',
                });
                await initRouter();
                router.replace('/Home');
                ElMessage({
                    type: 'success',
                    showClose: false,
                    message: '登陆成功',
                });
            } catch (error) {
            } finally {
            }
        }
    });
}
function isCode() {
    isDisabled.value = true;
    clearInterval(timer);
    code.value = `重新发送(${userStore.num})`;
    timer = setInterval(function () {
        userStore.$patch({ num: parseInt((userStore.code - new Date().getTime()) / 1000) });
        code.value = `重新发送(${userStore.num})`;
        if (userStore.num == 0) {
            code.value = '获取验证码';
            userStore.$patch(state => {
                state.num = 15;
            });
            isDisabled.value = false;
            clearInterval(timer);
        }
    }, 1000);
}
function sendMsg() {
    userStore.setCode();
    isCode();
}
onMounted(() => {
    if (userStore.code && new Date().getTime() < userStore.code) {
        isCode();
    }
});
</script>

<template>
    <div class="login">
        <!-- <div class="ppp">
            <el-button type="primary" @click="sendMsg" :disabled="isDisabled">
                {{ code }}
            </el-button>
        </div> -->
        <div class="loginImg">
            <div class="buildName">盐田北综合车场运营管控系统</div>
        </div>
        <div class="loginInput">
            <el-form :model="ruleForm" ref="ruleFormRef" :rules="rules" size="large">
                <p>系统登录</p>
                <el-form-item prop="userName">
                    <el-input
                        v-model="ruleForm.userName"
                        :disabled="disabledForm"
                        placeholder="请输入用户名"
                    />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="ruleForm.password"
                        :disabled="disabledForm"
                        type="password"
                        show-password
                        placeholder="请输入密码"
                    />
                </el-form-item>
                <el-form-item prop="captcha">
                    <el-row :gutter="15" class="flexAlignCenter">
                        <el-col :span="15">
                            <el-input
                                v-model="ruleForm.captcha"
                                :disabled="disabledForm"
                                placeholder="请输入验证码"
                            />
                        </el-col>
                        <el-col :span="9" class="flexAlignCenter">
                            <img src="@/assets/images/loginImages/code.jpg" alt="" />
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-button
                    style="width: 100%"
                    color="#10ac60"
                    :loading="disabledForm"
                    @click="handlerClick(ruleFormRef)"
                >
                    登录
                </el-button>
            </el-form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    .loginImg {
        width: calc(100% - 602px);
        height: 100%;
        background: url('@/assets/images/loginImages/buildImg.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        .buildName {
            width: 519px;
            position: absolute;
            left: 93px;
            top: 100px;
            color: #ffffff;
            font-size: 60px;
            font-weight: 500;
            font-family: PingFang SC;
            text-align: left;
            letter-spacing: 10px;
        }
    }
    .loginInput {
        width: 602px;
        height: 100%;
        background-color: #010d17;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        p {
            font-weight: 700;
            font-size: 36px;
            text-align: center;
            color: #ffffff;
            margin-bottom: 60px;
        }
    }
}
.flexAlignCenter {
    display: flex;
    align-items: center;
}
:deep(.el-input__wrapper) {
    background-color: rgba(38, 221, 132, 0.2);
    border: 1px solid rgba(38, 221, 132, 0.3);
    box-shadow: 0 0 0 0;
    border-radius: 0px;
    .el-input__inner {
        color: #ffffff;
    }
    .el-input__inner::placeholder {
        font-weight: 500;
        font-size: 14px;
        text-align: left;
        color: #cccccc;
    }
}
</style>
