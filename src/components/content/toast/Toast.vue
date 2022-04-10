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
    }
</style>