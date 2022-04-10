import {ADD_COUNT,
    ADD_PRODUCT} from './mutationTypes'


export default  {
    [ADD_COUNT](state, payload) {
        payload.count += 1
    },
    [ADD_PRODUCT](state, payload) {
        payload.count = 1
        payload.checked = true
        state.cartList.push(payload)
    }
}