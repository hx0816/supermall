<template>
  <div class="goods-list-item" @click="itemClick">
    <div class="goods-list-item-image">
      <img  v-lazy="showImage" @load="imgLoad" />
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
  },
  inject: {
    click: {
      type: Boolean,
      default: true
    },
    isImgLoad: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.show
        ? this.goodsItem.show.img
        : this.goodsItem.image;
    }
  },
  methods: {
    itemClick() {
      if (this.click) {
        this.$router.push("/detail/" + this.goodsItem.iid);
      }
    },
    imgLoad() {
      if (this.isImgLoad) {
        this.$bus.$emit("imgLoad");
      }
    }
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/icon/iconfont.css";
.goods-list-item {
  width: 45%;
  text-align: center;
  &-image {
    img {
      width: 100%;
    }
  }
  &-text {
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 5px;
    }
    .price {
      color: red;
    }
    .icon-shoucang {
      margin-left: 5px;
      color: #888888;
    }
  }
}
</style>