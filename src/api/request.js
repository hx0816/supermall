import axios from 'axios'

export const instance1 = config => {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        method: 'get'
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        throw error
    })
    return instance(config)
}
