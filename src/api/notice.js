import request from '@/utils/request'

export default class Notice {
// 查询公告列表
  static listNotice(query) {
    return request({
      url: '/system/notice/list',
      method: 'get',
      params: query
    })
  }

// 查询公告详细
  static getNotice(noticeId) {
    return request({
      url: '/system/notice/' + noticeId,
      method: 'get'
    })
  }

// 新增公告
  static addNotice(data) {
    return request({
      url: '/system/notice',
      method: 'post',
      data: data
    })
  }

// 修改公告
  static updateNotice(data) {
    return request({
      url: '/system/notice',
      method: 'put',
      data: data
    })
  }

// 删除公告
  static delNotice(noticeId) {
    return request({
      url: '/system/notice/' + noticeId,
      method: 'delete'
    })
  }
}