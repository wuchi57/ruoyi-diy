import request from '@/utils/request'

export default class Server {
// 获取服务信息
  static getServer() {
    return request({
      url: '/monitor/server',
      method: 'get'
    })
  }
}
