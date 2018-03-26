import axios from 'axios'

// 创建axios实例
const service = axios.create({ withCredentials: true, timeout: 60000 })

export default service
