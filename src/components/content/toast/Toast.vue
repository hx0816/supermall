<template>
<<<<<<< HEAD
  <div id='toast' v-show="isShow">
=======
  <div id="toast" v-show="isShow">
>>>>>>> 850c0a9fb43015e30eb07c9f8f4c25fedf4974e0
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'Toast',
<<<<<<< HEAD
    data(){
        return {
            message:'',
            isShow:false
        }
    },
    methods:{
        show(message,duration=1500){
            this.message = message
            this.isShow = true
            setTimeout(()=>{
                this.isShow = false
                this.message = ''
            },duration)
=======
    props:{
        isShow:{
            type:Boolean,
            default:false
        },
        message:{
            type:String,
            default:''
>>>>>>> 850c0a9fb43015e30eb07c9f8f4c25fedf4974e0
        }
    }
}
</script>

<<<<<<< HEAD
<style scoped lang="scss">
 #toast{
     position: fixed;
     left: 50%;
     top: 50%;
     transform: translate(-50%,-50%);
     padding: 10px;
     background-color: rgba(0,0,0,.75);
     color: #fff;
     z-index: 999;
 }
=======
<style scoped lang='scss'>
    #toast{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background-color:rgba(0,0,0,.75);
        color: #ffffff;
        padding: 10px;
    }
>>>>>>> 850c0a9fb43015e30eb07c9f8f4c25fedf4974e0
</style>