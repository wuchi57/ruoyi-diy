<script setup>
import SideBarLogo from 'layout/SideBarLogo.vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { useAppStore, usePermissionStore, useSettingStore } from 'store'
import { useRoute } from 'vue-router'
import SideBarItem from 'layout/SideBarItem.vue'

const {theme} = resolveConfig(tailwindConfig)
const menuColor = theme.colors.menuColor
const menuColorLight = theme.colors.menuColorLight
const menuBackground = theme.backgroundColor.menuBackground
const menuBackgroundLight = theme.backgroundColor.menuBackgroundLight

const route = useRoute()
const settingStore = useSettingStore()
const appStore = useAppStore()
const permissionStore = usePermissionStore()

const sidebarRouters = computed(() => permissionStore.sidebarRouters)
const sideTheme = computed(() => settingStore.sideTheme)
const themeColor = computed(() => settingStore.themeColor)
const isCollapse = computed(() => appStore.sidebar.opened)
const activeMenu = computed(() => {
  const { meta, path } = route
  return meta.activeMenu ? meta.activeMenu : path
})

</script>

<template>
<div>
  <SideBarLogo class="w-1/12"/>
  <ElScrollbar>
    <ElMenu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
        :active-text-color="themeColor"
        :text-color="sideTheme === 'theme-dark' ? menuColor : menuColorLight"
        :background-color="sideTheme === 'theme-dark' ? menuBackground : menuBackgroundLight"
    >
      <SideBarItem
          v-for="(route, index) in sidebarRouters"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
      />
    </ElMenu>
  </ElScrollbar>
</div>
</template>