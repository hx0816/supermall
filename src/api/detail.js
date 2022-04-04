import {request} from './request'

export const getDetail = (iid)=>{
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export const getRecommend = ()=>{
    return request({
        url:'/recommend'
    })
}


export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.newPrice = itemInfo.price
        this.desc = itemInfo.desc
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.realPrice = itemInfo.lowPrice
        this.columns = columns
        this.services = services
    }
}

export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.sells = shopInfo.cSells
        this.fans = shopInfo.cFans
        this.goodsCount = shopInfo.cGoods
        this.score = shopInfo.score
    }
}

export class Params{
    constructor(rule,info){
        this.tables = rule.tables[0]
        this.set= info.set
    }
}