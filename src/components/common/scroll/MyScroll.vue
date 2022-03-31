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
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll.refresh()
        }
    },
    props:{
        probeType:{
            type:Number,
            default:1
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        setTimeout(()=>{
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad
            })
            this.scroll.on('scroll',options=>{
                this.$emit('scroll',options.y)
            })
            this.scroll.on('pullingUp',()=>{
                this.$emit('sole')
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