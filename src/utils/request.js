import axios from 'axios'
// 创建一个axios实例， 说白了就是复制了一个方法
// 我们通过这个实例去发请求，把需要的配置配置给这个实例
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn' // 请求的基础路径
})

export default request
