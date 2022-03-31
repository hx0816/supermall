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
    methods:{
        scrollTo(x,y,time=500){
            this.scroll.scrollTo(x,y,time)
        }
    },
    props:{
        probeType:{
            type:Number,
            default:1
        }
    },
    mounted(){
        setTimeout(()=>{
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.probeType
            })
            this.scroll.on('scroll',options=>{
                this.$emit('scroll',options.y)
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