<template>
    <div class="wrapper" ref='wrapper'>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'MyScroll',
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        setTimeout(()=>{
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
            })
        },20)

    }
}
</script>

<style lang='scss' scoped>
    .wrapper{
        overflow: hidden;
    }
</style>