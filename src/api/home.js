import { instance1,getImage } from './request'

export const getHomeMultiData = () => {
    return instance1({
        url:'/home/multidata'
    })
}
