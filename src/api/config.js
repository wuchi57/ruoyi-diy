import request from '@/utils/request'

export default class Config {
// 查询参数列表
  static listConfig(query) {
    return request({
      url: '/system/config/list',
      method: 'get',
      params: query
    })
  }

// 查询参数详细
  static getConfig(configId) {
    return request({
      url: '/system/config/' + configId,
      method: 'get'
    })
  }

// 根据参数键名查询参数值
  static getConfigKey(configKey) {
    return request({
      url: '/system/config/configKey/' + configKey,
      method: 'get'
    })
  }

// 新增参数配置
  static addConfig(data) {
    return request({
      url: '/system/config',
      method: 'post',
      data: data
    })
  }

// 修改参数配置
  static updateConfig(data) {
    return request({
      url: '/system/config',
      method: 'put',
      data: data
    })
  }

// 删除参数配置
  static delConfig(configId) {
    return request({
      url: '/system/config/' + configId,
      method: 'delete'
    })
  }

// 刷新参数缓存
  static refreshCache() {
    return request({
      url: '/system/config/refreshCache',
      method: 'delete'
    })
  }
}
