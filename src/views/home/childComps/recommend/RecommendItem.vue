<template>
  <div class="recommend-item">
    <div class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendItem"
};
</script>

<style lang='scss' scoped>
.recommend-item {
  text-align: center;
  flex: 1;
  .item {
    &-icon {
      img {
        width: 100%;
      }
    }
    &-text{
        color: #888;
    }
  }
}
</style>