<template>
  <div class="p-32">
    <el-button :icon="ArrowLeft" @click="back" class="mb-8">返回</el-button>
    <el-row>
      <el-col :span="12">
        <h1>
          401错误!
        </h1>
        <h2>您没有访问权限！</h2>
        <h6>对不起，您没有访问权限，请不要进行非法操作！您可以返回主页面</h6>
        <ul>
          <li class="pt-8">
            <router-link to="/" class="border-2 border-gray-500 rounded p-2">
              回首页
            </router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import errImage from 'assets/img/401.gif'
import { ArrowLeft } from '@element-plus/icons-vue'

let { proxy } = getCurrentInstance();

const errGif = ref(errImage + "?" + +new Date());

function back() {
  if (proxy.$route.query.noGoBack) {
    proxy.$router.push({ path: "/" });
  } else {
    proxy.$router.go(-1);
  }
}
</script>