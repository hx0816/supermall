import {ADD_COUNT,
    ADD_PRODUCT} from './mutationTypes'


export default  {
    [ADD_COUNT](state, payload) {
        payload.count += 1
    },
    [ADD_PRODUCT](state, payload) {
        payload.count = 1
        state.cartList.push(payload)
    }
}