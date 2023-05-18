import request from '@/utils/request'

export default class DictionaryData {
// 查询字典数据列表
  static listData(query) {
    return request({
      url: '/system/dict/data/list',
      method: 'get',
      params: query
    })
  }

// 查询字典数据详细
  static getData(dictCode) {
    return request({
      url: '/system/dict/data/' + dictCode,
      method: 'get'
    })
  }

// 根据字典类型查询字典数据信息
  static getDicts(dictType) {
    return request({
      url: '/system/dict/data/type/' + dictType,
      method: 'get'
    })
  }

// 新增字典数据
  static addData(data) {
    return request({
      url: '/system/dict/data',
      method: 'post',
      data: data
    })
  }

// 修改字典数据
  static updateData(data) {
    return request({
      url: '/system/dict/data',
      method: 'put',
      data: data
    })
  }

// 删除字典数据
  static delData(dictCode) {
    return request({
      url: '/system/dict/data/' + dictCode,
      method: 'delete'
    })
  }
}
