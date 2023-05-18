import request from '@/utils/request'

export default class Login {
// 登录方法
  static login(username, password, code, uuid) {
    const data = {
      username,
      password,
      code,
      uuid
    }
    return request({
      url: '/login',
      headers: {
        isToken: false
      },
      method: 'post',
      data: data
    })
  }

// 注册方法
  static register(data) {
    return request({
      url: '/register',
      headers: {
        isToken: false
      },
      method: 'post',
      data: data
    })
  }

// 获取用户详细信息
  static getInfo() {
    return request({
      url: '/getInfo',
      method: 'get'
    })
  }

// 退出方法
  static logout() {
    return request({
      url: '/logout',
      method: 'post'
    })
  }

// 获取验证码
  static getCodeImg() {
    return request({
      url: '/captchaImage',
      headers: {
        isToken: false
      },
      method: 'get',
      timeout: 20000
    })
  }
}
