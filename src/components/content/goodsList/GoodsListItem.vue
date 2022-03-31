<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" />
    <p class="goods-list-item-title">{{goodsItem.title}}</p>
    <div>
      <span class="goods-list-item-price">{{goodsItem.price}}</span>
      <span class="iconfont icon-shoucang"></span>
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
@import '@/assets/css/icon/iconfont.css';
.goods-list-item {
  text-align: center;
  width: 45%;
  img {
    width: 100%;
  }
  &-price {
    color: red;
  }
  &-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px;
  }
  .icon-shoucang{
      color: #888888;
      margin-left: 5px;
  }
}
</style>