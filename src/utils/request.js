import axios from 'axios'
import { getToken } from 'utils/auth.js'
import cache from 'plugins/cache.js'
import { tansParams } from 'utils/tools.js'
import enumError from 'utils/enum-error.js'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import { useUserStore } from 'store'
import { isReLogin } from 'utils/settings.js'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建请求实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  // 指定请求超时的毫秒数
  timeout: 10000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false,
})

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
    (config) => {

      /** ---------------- 接口是否需要携带token, 默认携带 ---------------- **/
      const isToken = config.headers?.isToken === false
      if (getToken() && !isToken) {
        config.headers['Authorization'] = 'Bearer ' + getToken()
      }
      /** ---------------- 接口是否需要需要防止重复提交, 默认防止post、put等进行重复提交 ---------------- **/
      const isRepeatSubmit = config.headers?.repeatSubmit === false
      if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
        const requestObj = {
          url: config.url,
          data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
          time: new Date().getTime()
        }
        const sessionObj = cache.session.getJSON('sessionObj')
        if (sessionObj === undefined || sessionObj === null || sessionObj === '') {
          cache.session.setJSON('sessionObj', requestObj)
        } else {
          const s_url = sessionObj.url;                // 请求地址
          const s_data = sessionObj.data;              // 请求数据
          const s_time = sessionObj.time;              // 请求时间
          const interval = 1000;               // 间隔时间(ms)，小于此时间视为重复提交
          if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
            const message = '数据正在处理，请勿重复提交';
            console.warn(`[${s_url}]: ` + message)
            return Promise.reject(new Error(message))
          } else {
            cache.session.setJSON('sessionObj', requestObj)
          }
        }
      }
      /** ---------------- 处理get请求params参数 ---------------- **/
      if (config.method === 'get' && config.params) {
        let url = config.url + '?' + tansParams(config.params);
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
      }
      /** ---------------- End ---------------- **/

      return config
    },
    (error) => {
      console.log(error)
      return Promise.reject(error)
    },
)

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
    (res) => {

      // 二进制数据则直接返回
      if (res.request.responseType ===  'blob' || res.request.responseType ===  'arraybuffer') {
        return res.data
      }

      // 未设置状态码则默认为200
      const code = res.data.code || 200
      // 获取错误信息
      const msg = enumError[code] || res.data.msg || enumError['default']

      if (code === 401) {
        if (!isReLogin.show) {
          isReLogin.show = true;
          ElMessageBox.confirm(
              '登录状态已过期，您可以继续留在该页面，或者重新登录',
              '系统提示',
              { confirmButtonText: '重新登录', cancelButtonText: '取消', type: 'warning' }
          ).then(() => {
            isReLogin.show = false;
            useUserStore().logOut().then(() => {
              location.href = '/index';
            })
          }).catch(() => {
            isReLogin.show = false;
          });
        }
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
      } else if (code === 500) {
        ElMessage({ message: msg, type: 'error' })
        return Promise.reject(new Error(msg))
      } else if (code === 601) {
        ElMessage({ message: msg, type: 'warning' })
        return Promise.reject(new Error(msg))
      } else if (code !== 200) {
        ElNotification.error({ title: msg })
        return Promise.reject('error')
      } else {
        return  Promise.resolve(res.data)
      }

    },
    (error) => {
      console.log('err' + error)
      let { message } = error;
      if (message == "Network Error") {
        message = "后端接口连接异常";
      } else if (message.includes("timeout")) {
        message = "系统接口请求超时";
      } else if (message.includes("Request failed with status code")) {
        message = "系统接口" + message.substr(message.length - 3) + "异常";
      }
      ElMessage({ message: message, type: 'error', duration: 5 * 1000 })
      return Promise.reject(error)
    },
)

export default instance