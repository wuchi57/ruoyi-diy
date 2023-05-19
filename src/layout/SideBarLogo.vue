<script setup>
import logo from 'assets/img/logo.png'
import { useSettingStore } from 'store'

const props = defineProps({
  collapse: {
    type: Boolean,
    default: true
  }
})

const title = ref('Logo标题')

const settingStore = useSettingStore()
const sideTheme = computed(() => settingStore.sideTheme)

const classContainer = ref({
  'is-collapse': props.collapse,
  'bg-menuBackground': sideTheme.value === 'theme-dark',
  'bg-menuBackgroundLight': sideTheme.value !== 'theme-dark',
})
const classTitle = ref({
  'text-logoTitleColor': sideTheme.value === 'theme-dark',
  'text-logoTitleColorLight': sideTheme.value !== 'theme-dark',
})

</script>

<template>
<div class="sidebar-logo-container relative w-full h-[50px] bg-[#2b2f3a] flex justify-center items-center" :class="classContainer">
  <transition name="sidebarLogoFade">
    <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
      <img v-if="logo" class="sidebar-logo inline-block w-8 h-8 mr-6" :src="logo" alt="sidebar-logo" />
      <h1 v-else class="inline-block text-white" :class="classTitle">{{title}}</h1>
    </router-link>
    <router-link v-else key="expand" class="sidebar-logo-link" to="/">
      <img v-if="logo" class="sidebar-logo inline-block w-8 h-8 mr-6" :src="logo" alt="sidebar-logo" />
      <h1 class="inline-block text-white" :class="classTitle">{{title}}</h1>
    </router-link>
  </transition>
</div>
</template>

<style scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}
.is-collapse .sidebar-logo {
  margin-right: 0;
}
</style>