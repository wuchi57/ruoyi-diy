import request from '@/utils/request'

export default class Online {
// 查询在线用户列表
  static list(query) {
    return request({
      url: '/monitor/online/list',
      method: 'get',
      params: query
    })
  }

// 强退用户
  static forceLogout(tokenId) {
    return request({
      url: '/monitor/online/' + tokenId,
      method: 'delete'
    })
  }
}

