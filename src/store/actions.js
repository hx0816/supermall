import {
    ADD_COUNT,
    ADD_PRODUCT
} from './mutationTypes'


export default {
    addCart({ state, commit }, payload) {
        return new Promise((resolve, reject) => {
            const product = state.cartList.find(item => item.iid === payload.iid)
            if (product) {
                commit(ADD_COUNT, product)
                resolve('再次添加商品成功')
            } else {
                commit(ADD_PRODUCT, payload)
                resolve('添加新的商品成功')
            }
        })
    }
}