import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    getters:{
        cartLength(state){
            return state.cartList.length
        },
        cartList(state){
            return state.cartList
        }
    },
    mutations,
    actions
})

export default store