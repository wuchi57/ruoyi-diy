import request from '@/utils/request'

export default class Department {
// 查询部门列表
  static listDept(query) {
    return request({
      url: '/system/dept/list',
      method: 'get',
      params: query
    })
  }

// 查询部门列表（排除节点）
  static listDeptExcludeChild(deptId) {
    return request({
      url: '/system/dept/list/exclude/' + deptId,
      method: 'get'
    })
  }

// 查询部门详细
  static getDept(deptId) {
    return request({
      url: '/system/dept/' + deptId,
      method: 'get'
    })
  }

// 新增部门
  static addDept(data) {
    return request({
      url: '/system/dept',
      method: 'post',
      data: data
    })
  }

// 修改部门
  static updateDept(data) {
    return request({
      url: '/system/dept',
      method: 'put',
      data: data
    })
  }

// 删除部门
  static delDept(deptId) {
    return request({
      url: '/system/dept/' + deptId,
      method: 'delete'
    })
  }
}