import request from '@/utils/request'

export default class OperationLog {
// 查询操作日志列表
  static list(query) {
    return request({
      url: '/monitor/operlog/list',
      method: 'get',
      params: query
    })
  }

// 删除操作日志
  static delOperlog(operId) {
    return request({
      url: '/monitor/operlog/' + operId,
      method: 'delete'
    })
  }

// 清空操作日志
  static cleanOperlog() {
    return request({
      url: '/monitor/operlog/clean',
      method: 'delete'
    })
  }
}
