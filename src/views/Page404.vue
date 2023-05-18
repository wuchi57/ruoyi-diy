<template>
  <div class="flex justify-center items-center pt-32">
    <div>
      <div>
        <img class="mb-8" :src="img_404" alt="404">
      </div>
      <div>
        <div>
          404错误!
        </div>
        <div>
          {{ message }}
        </div>
        <div class="pb-8">
          对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。
        </div>
        <router-link to="/index" class="border-2 border-gray-500 rounded p-2">返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import img_404 from 'assets/img/404.png'

let message = computed(() => {
  return '找不到网页！'
})
</script>
