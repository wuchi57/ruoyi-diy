import request from '@/utils/request'

export default class LoginInfo {
// 查询登录日志列表
  static list(query) {
    return request({
      url: '/monitor/logininfor/list',
      method: 'get',
      params: query
    })
  }

// 删除登录日志
  static delLogininfor(infoId) {
    return request({
      url: '/monitor/logininfor/' + infoId,
      method: 'delete'
    })
  }

// 解锁用户登录状态
  static unlockLogininfor(userName) {
    return request({
      url: '/monitor/logininfor/unlock/' + userName,
      method: 'get'
    })
  }

// 清空登录日志
  static cleanLogininfor() {
    return request({
      url: '/monitor/logininfor/clean',
      method: 'delete'
    })
  }
}
