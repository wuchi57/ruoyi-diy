import request from '@/utils/request'

export default class Job {
// 查询岗位列表
  static listPost(query) {
    return request({
      url: '/system/post/list',
      method: 'get',
      params: query
    })
  }

// 查询岗位详细
  static getPost(postId) {
    return request({
      url: '/system/post/' + postId,
      method: 'get'
    })
  }

// 新增岗位
  static addPost(data) {
    return request({
      url: '/system/post',
      method: 'post',
      data: data
    })
  }

// 修改岗位
  static updatePost(data) {
    return request({
      url: '/system/post',
      method: 'put',
      data: data
    })
  }

// 删除岗位
  static delPost(postId) {
    return request({
      url: '/system/post/' + postId,
      method: 'delete'
    })
  }
}
