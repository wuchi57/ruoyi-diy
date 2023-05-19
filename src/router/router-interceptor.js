// import { useUserStore } from 'store'

import { getToken } from 'utils/auth.js'

const whiteList = ['/login', 'register']

export default function interceptor (to, from, next) {

  /**
  const userStore = useUserStore()
  if (userStore.token) {
    // 携带token
    // 可以在这里设置标题：Get title from route info
    // 获取用户路由表，渲染菜单, 出错就跳转登录，打印信息
    next()
  } else {
    // 没有token
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next()
      // next(`/login?redirect=${to.fullPath}`)
    }
  }
  **/
  if (getToken()) {
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录名单内，直接进入
      next()
    } else {

    }
    next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
  }
}
