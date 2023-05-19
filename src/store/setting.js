import { defineStore } from 'pinia'

// 使用localStorage存储设置，需要重置时就删除localStorage即可
const storageSetting = JSON.parse(localStorage.getItem('layout-setting')) || ''

export const useSettingStore = defineStore('setting', {
  state: () => ({
    // 网页标题
    title: '',
    staticTitle: 'XXX管理系统',
    // 侧边栏主题 深色主题theme-dark，浅色主题theme-light
    sideTheme: storageSetting.sideTheme || 'theme-dark',
    // 是否系统布局配置
    showSettings: false,
    // 是否显示顶部导航，默认不显示
    topNav: storageSetting.topNav === undefined ? false : storageSetting.topNav,
    // 是否显示 tagsView，默认显示
    tagsView: storageSetting.tagsView === undefined ? true : storageSetting.tagsView,
    // 是否固定头部，默认不固定
    fixedHeader: storageSetting.fixedHeader === undefined ? false : storageSetting.fixedHeader,
    // 是否显示logo，默认显示
    sidebarLogo: storageSetting.sidebarLogo === undefined ? true : storageSetting.sidebarLogo,
    // 是否显示动态标题，默认静态标题
    dynamicTitle: storageSetting.dynamicTitle === undefined ? false : storageSetting.dynamicTitle,
    // 基本主题色
    themeColor: storageSetting.theme || '#409EFF',
  }),
  actions: {
    // 修改布局设置
    changeSetting(data) {
      const { key, value } = data
      if (this.hasOwnProperty(key)) {
        this[key] = value
      }
    },
    // 设置网页标题
    setTitle(title) {
      this.title = title
      if (this.dynamicTitle) {
        document.title = this.title + ' - ' + this.staticTitle
      } else {
        document.title = this.title;
      }
    },
  }
})