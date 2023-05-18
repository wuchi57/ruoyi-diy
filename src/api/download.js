import request from 'utils/request'
import { ElLoading, ElMessage } from 'element-plus'
import { formatParams, isBlobType } from 'utils/format-tool.js'
import errorCode from 'utils/enum-error.js'
import { saveAs } from 'file-saver'

let loadingInstance = null
export default class Download {
  /**
   * toExcel 方法
   * 依赖：element-plus -> Loading
   * 依赖：file-saver -> SaveAs
   * 依赖：tansParams, blobValidate -> utils/tools
   * 依赖：errorCode -> utils/enum-error
   * @param url
   * @param params
   * @param filename
   * @param config
   * @returns {*}
   */
  static async toExcel (url, params, filename, config) {
    loadingInstance = ElLoading.service({text: '正在下载数据，请稍候', background: 'rgba(0, 0, 0, 0.7)'})
    // 为什么要使用formatParams？
    // http://www.enmalvi.com/2020/06/16/axios-transformrequest/
    // http://www.enmalvi.com/2020/04/13/http-form-data-request-payload/
    return request.post(url, params, {
      transformRequest: [(params) => formatParams(params)],
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      responseType: 'blob',
      ...config,
    }).then(async data => {
      if (isBlobType(data)) {
        const blob = new Blob([data])
        saveAs(blob, filename)
      } else {
        const resText = await data.text()
        const rspObj = JSON.parse(resText)
        const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
        ElMessage.error(errMsg)
      }
      loadingInstance.close()
    }).catch(err => {
      console.error(err)
      ElMessage.error('下载文件出现错误，请联系管理员！')
      loadingInstance.close()
    })
  }
}
