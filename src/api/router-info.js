import request from '@/utils/request'

export default class RouterInfo {
// 获取路由
  static getRouters () {
    return request({
      url: '/getRouters',
      method: 'get'
    })
  }
}