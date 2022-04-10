<template>
  <div class="cart-list-item">
    <check-button class="item-tick" :checked="listItem.checked" @click.native="checkClick"></check-button>
    <div class="item-image">
      <img :src="listItem.image"/>
    </div>
    <div class="item-text">
      <div class="item-text-title">{{listItem.title}}</div>
      <span class="item-text-desc">{{listItem.desc}}</span>
      <div class="item-text-price">
        <span class="price">￥{{listItem.price}}</span>
        <span>x{{listItem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    CheckButton
  },
  methods:{
      checkClick(){
          this.listItem.checked  = !this.listItem.checked
          console.log(this.$store.state)
      }
  }
};
</script>

<style lang='scss' scoped>
.cart-list-item {
  display: flex;
  height: 130px;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  .item {
    &-tick {
      margin: 0 5px;
    }
    &-image {
      img {
        width: 90px;
        height: 110px;
      }
    }
    &-text {
      flex: 1;
      margin-right: 20px;
      display: flex;
      flex-flow: column;
      overflow: hidden;
      justify-content: space-between;
      height: 110px;
      margin-left: 10px;
      &-title,
      &-desc {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &-desc {
        font-size: 14px;
        color: #aaaaaa;
      }
      &-price {
        display: flex;
        justify-content: space-between;
        .price {
          color: #fe8447;
        }
      }
    }
  }
}
</style>