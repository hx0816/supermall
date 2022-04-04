import {ADD_COUNT,
    ADD_PRODUCT} from './mutationTypes'


export default {
    addCart({ state, commit }, payload) {
        const product = state.cartList.find(item => item.iid === payload.iid)
        if (product) {
            commit(ADD_COUNT, product)
        } else {
            commit(ADD_PRODUCT, payload)
        }
    }
}