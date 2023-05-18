import request from '@/utils/request'

export default class TaskLog {
// 查询调度日志列表
  static listJobLog(query) {
    return request({
      url: '/monitor/jobLog/list',
      method: 'get',
      params: query
    })
  }

// 删除调度日志
  static delJobLog(jobLogId) {
    return request({
      url: '/monitor/jobLog/' + jobLogId,
      method: 'delete'
    })
  }

// 清空调度日志
  static cleanJobLog() {
    return request({
      url: '/monitor/jobLog/clean',
      method: 'delete'
    })
  }
}

