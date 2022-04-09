<template>
    <div class="cart-list">
        <cart-list-item
            v-for="(item,index) in cartList"
            :key="index"
            :listItem="item"
        ></cart-list-item>
    </div>
</template>

<script>
import CartListItem from './CartListItem'

export default {
    name:'CartList',
    props:{
        cartList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        CartListItem
    }
}
</script>

<style>

</style>