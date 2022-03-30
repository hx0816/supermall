import axios from 'axios'


export const request = config => {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        method: 'get',
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        return Promise.reject(error).catch(error => {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        error.message = '请求错误'
                        break
                    case 401:
                        error.message = '未授权,请登录'
                        break
                    case 403:
                        error.message = '拒绝访问'
                        break
                    case 404:
                        error.message = `请求地址出错${error.response.config.baseURL}${error.response.config.url}`
                        break
                    case 408:
                        error.message = '请求超时'
                        break
                    case 500:
                        error.message = '服务器内部错误'
                        break
                }
                console.log(error.message)
            } else {
                // throw Error('Error ' + error.message)
                console.log('Error ' + error.message)
            }
            console.log(error.config)
            return new Promise(() => { })
        })
    }
    )
    return instance(config)
}

