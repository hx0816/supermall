<template>
  <div class="recommend">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'Recommend'
}
</script>

<style lang='scss' scoped>
    .recommend{
        display: flex;
        flex-wrap: wrap;
        padding-top: 10px;
        padding-bottom: 20px;
    }
</style>