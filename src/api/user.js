import request from '@/utils/request'
import { parseStrEmpty } from '@/utils/tools.js';

export default class User {
// 查询用户列表
  static listUser(query) {
    return request({
      url: '/system/user/list',
      method: 'get',
      params: query
    })
  }

// 查询用户详细
  static getUser(userId) {
    return request({
      url: '/system/user/' + parseStrEmpty(userId),
      method: 'get'
    })
  }

// 新增用户
  static addUser(data) {
    return request({
      url: '/system/user',
      method: 'post',
      data: data
    })
  }

// 修改用户
  static updateUser(data) {
    return request({
      url: '/system/user',
      method: 'put',
      data: data
    })
  }

// 删除用户
  static delUser(userId) {
    return request({
      url: '/system/user/' + userId,
      method: 'delete'
    })
  }

// 用户密码重置
  static resetUserPwd(userId, password) {
    const data = {
      userId,
      password
    }
    return request({
      url: '/system/user/resetPwd',
      method: 'put',
      data: data
    })
  }

// 用户状态修改
  static changeUserStatus(userId, status) {
    const data = {
      userId,
      status
    }
    return request({
      url: '/system/user/changeStatus',
      method: 'put',
      data: data
    })
  }

// 查询用户个人信息
  static getUserProfile() {
    return request({
      url: '/system/user/profile',
      method: 'get'
    })
  }

// 修改用户个人信息
  static updateUserProfile(data) {
    return request({
      url: '/system/user/profile',
      method: 'put',
      data: data
    })
  }

// 用户密码重置
  static updateUserPwd(oldPassword, newPassword) {
    const data = {
      oldPassword,
      newPassword
    }
    return request({
      url: '/system/user/profile/updatePwd',
      method: 'put',
      params: data
    })
  }

// 用户头像上传
  static uploadAvatar(data) {
    return request({
      url: '/system/user/profile/avatar',
      method: 'post',
      data: data
    })
  }

// 查询授权角色
  static getAuthRole(userId) {
    return request({
      url: '/system/user/authRole/' + userId,
      method: 'get'
    })
  }

// 保存授权角色
  static updateAuthRole(data) {
    return request({
      url: '/system/user/authRole',
      method: 'put',
      params: data
    })
  }

// 查询部门下拉树结构
  static deptTreeSelect() {
    return request({
      url: '/system/user/deptTree',
      method: 'get'
    })
  }
}
