import request from '@/utils/request'

export default class Tool {
// 查询生成表数据
  static listTable(query) {
    return request({
      url: '/tool/gen/list',
      method: 'get',
      params: query
    })
  }
// 查询db数据库列表
  static listDbTable(query) {
    return request({
      url: '/tool/gen/db/list',
      method: 'get',
      params: query
    })
  }

// 查询表详细信息
  static getGenTable(tableId) {
    return request({
      url: '/tool/gen/' + tableId,
      method: 'get'
    })
  }

// 修改代码生成信息
  static updateGenTable(data) {
    return request({
      url: '/tool/gen',
      method: 'put',
      data: data
    })
  }

// 导入表
  static importTable(data) {
    return request({
      url: '/tool/gen/importTable',
      method: 'post',
      params: data
    })
  }

// 预览生成代码
  static previewTable(tableId) {
    return request({
      url: '/tool/gen/preview/' + tableId,
      method: 'get'
    })
  }

// 删除表数据
  static delTable(tableId) {
    return request({
      url: '/tool/gen/' + tableId,
      method: 'delete'
    })
  }

// 生成代码（自定义路径）
  static genCode(tableName) {
    return request({
      url: '/tool/gen/genCode/' + tableName,
      method: 'get'
    })
  }

// 同步数据库
  static synchDb(tableName) {
    return request({
      url: '/tool/gen/synchDb/' + tableName,
      method: 'get'
    })
  }
}
