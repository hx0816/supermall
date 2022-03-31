<template>
  <div class="goods-list-item">
    <div class="goods-list-item-image">
      <a :href="goodsItem.link">
        <img :src="goodsItem.show.img" />
      </a>
    </div>
    <div class="goods-list-item-text">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="iconfont icon-shoucang"></span>
      <span>{{goodsItem.cfav}}</span>
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
@import "@/assets/css/icon/iconfont.css";
.goods-list-item {
  width: 45%;
  text-align: center;
  &-image{
      img{
          width: 100%;
      }
  }
  &-text{
      p{
          white-space: nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
          margin: 5px;
      }
      .price{
          color: red;
      }
      .icon-shoucang{
          margin-left: 5px;
          color: #888888;
      }
  }
}
</style>