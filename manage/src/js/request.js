import fetch from './fetch'
import api from './api.js'

var processResponse = function(res) {
  if (res.status === 200) {
    return res.data
  } else {
    console.log(res.statusText)
  }
  return {}
}

var catchErr = function() {
}

// 获取服务器配置
export function getConfig() {
  return fetch(api.get_config()).then(processResponse).catch(catchErr)
}
