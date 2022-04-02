import {request} from './request'

export const getDetail = (iid)=>{
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.newPrice = itemInfo.price
        this.desc = itemInfo.desc
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
    }
}