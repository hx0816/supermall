<template>
  <div class="back-top">
      <img src="~@/assets/img/common/top.png">
  </div>
</template>

<script>
export default {
    name:"BackTop"
}
</script>

<style scoped lang='scss'>
 .back-top{
     position: fixed;
     bottom: 50px;
     right: 5px;
     img{
         width: 43px;
         height: 43px;
     }
 }
</style>