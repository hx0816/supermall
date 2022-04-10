<template>
  <div id="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'Toast',
    props:{
        isShow:{
            type:Boolean,
            default:false
        },
        message:{
            type:String,
            default:''
        }
    },
    methods:{
        show(message,duration=1500){
            this.isShow = true
            this.message = message
            setTimeout(()=>{
                this.message = ''
                this.isShow = false
            },duration)
        }
    }
}
</script>

<style scoped lang='scss'>
    #toast{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color:rgba(0,0,0,.75);
        color: #ffffff;
        padding: 10px;
        z-index: 999;
    }
</style>