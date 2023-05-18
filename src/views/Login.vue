<script setup>
import { Login } from 'api'
import Cookies from 'js-cookie'
import { decrypt, encrypt } from 'utils/jsencrypt.js'
import { useUserStore } from 'store'
import { useRouter } from 'vue-router'

const formRef = ref(null)
const formData = reactive({
  form: {
    username: "admin",
    password: "admin123",
    code: "",
    uuid: ""
  },
  rules: {
    username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
    password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
    code: [{ required: true, trigger: "change", message: "请输入验证码" }]
  },
  info: {
    rememberMe: false,
    captchaEnabled: true, // 前端captcha开关
    codeUrl: null,
    loading: false,
    register: false, // 是否显示注册按钮
  }
})

const userStore = useUserStore()
const router = useRouter()
function handleLogin() {
  formRef.value.validate(valid => {
    if (valid) {
      formData.info.loading = true;
      // 勾选了需要记住密码设置在 cookie 中设置记住用户名和密码
      if (formData.info.rememberMe) {
        Cookies.set("username", formData.form.username, { expires: 30 });
        Cookies.set("password", encrypt(formData.form.password), { expires: 30 });
        Cookies.set("rememberMe", formData.info.rememberMe, { expires: 30 });
      } else {
        // 否则移除
        Cookies.remove("username");
        Cookies.remove("password");
        Cookies.remove("rememberMe");
      }
      // 调用action的登录方法
      userStore.login(formData.form).then(() => {
        router.push({ path: "/" });
      }).catch(() => {
        formData.info.loading = false;
        // 重新获取验证码
        if (formData.info.captchaEnabled) {
          getCode();
        }
      });
    }
  });
}
function getCode() {
  Login.getCodeImg().then(res => {
    formData.info.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
    if (formData.info.captchaEnabled) {
      formData.info.codeUrl = "data:image/gif;base64," + res.img;
      formData.form.uuid = res.uuid;
    }
  });
}

function getCookie() {
  const username = Cookies.get("username");
  const password = Cookies.get("password");
  const rememberMe = Cookies.get("rememberMe");
  formData.form.username = username === undefined ? formData.form.username : username
  formData.form.password = password === undefined ? formData.form.password : decrypt(password)
  formData.info.rememberMe = rememberMe === undefined ? formData.info.rememberMe : Boolean(rememberMe)
}

getCode()
getCookie()

</script>

<template>
  <div class="flex justify-center items-center h-full">
    <el-form ref="formRef" :model="formData.form" :rules="formData.rules">
      <h3 class="text-2xl font-medium pb-6">XXX管理系统</h3>
      <el-form-item prop="username">
        <el-input
            v-model="formData.form.username"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
            v-model="formData.form.password"
            type="password"
            size="large"
            auto-complete="off"
            placeholder="密码"
            @keyup.enter="handleLogin"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code" v-if="formData.info.captchaEnabled">
        <el-input
            v-model="formData.form.code"
            size="large"
            auto-complete="off"
            placeholder="验证码"
            style="width: 63%"
            @keyup.enter="handleLogin"
        ></el-input>
        <div class="w-1/3 ml-auto">
          <img :src="formData.info.codeUrl" @click="getCode"/>
        </div>
      </el-form-item>
      <el-checkbox v-model="formData.info.rememberMe" style="margin:0 0 25px 0;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
            :loading="formData.info.loading"
            size="large"
            type="primary"
            style="width:100%;"
            @click.prevent="handleLogin"
        >
          <span v-if="!formData.info.loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
        <div style="float: right;" v-if="formData.info.register">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>