import request from '@/utils/request'

export default class Cache {
// 查询缓存详细
  static getCache() {
    return request({
      url: '/monitor/cache',
      method: 'get'
    })
  }

// 查询缓存名称列表
  static listCacheName() {
    return request({
      url: '/monitor/cache/getNames',
      method: 'get'
    })
  }

// 查询缓存键名列表
  static listCacheKey(cacheName) {
    return request({
      url: '/monitor/cache/getKeys/' + cacheName,
      method: 'get'
    })
  }

// 查询缓存内容
  static getCacheValue(cacheName, cacheKey) {
    return request({
      url: '/monitor/cache/getValue/' + cacheName + '/' + cacheKey,
      method: 'get'
    })
  }

// 清理指定名称缓存
  static clearCacheName(cacheName) {
    return request({
      url: '/monitor/cache/clearCacheName/' + cacheName,
      method: 'delete'
    })
  }

// 清理指定键名缓存
  static clearCacheKey(cacheKey) {
    return request({
      url: '/monitor/cache/clearCacheKey/' + cacheKey,
      method: 'delete'
    })
  }

// 清理全部缓存
  static clearCacheAll() {
    return request({
      url: '/monitor/cache/clearCacheAll',
      method: 'delete'
    })
  }
}

