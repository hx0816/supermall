<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" />
    <p class="goods-list-item-title">{{goodsItem.title}}</p>
    <div>
      <span class="goods-list-item-price">{{goodsItem.price}}</span>
      |
      <span class="goods-list-item-collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.goods-list-item{
    text-align: center;
    width: 50%;
    img{
        width: 90%;
    }
    &-price{
        color: red;
    }
}
</style>