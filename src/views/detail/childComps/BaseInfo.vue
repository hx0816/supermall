<template>
  <div class="base-info" v-if="Object.keys(goods).length">
    <div class="base-info-title">{{goods.title}}</div>
    <div class="base-info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="base-info-btm">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInfo",
  props: {
    goods: Object,
    default() {
      return {};
    }
  },
};
</script>

<style scoped lang="scss">
.base-info {
  &-title{
    padding: 15px;
    text-indent: 10px;
    line-height: 20px;
  }
  &-price{
    .new-price{
      color: #FF7981;
      font-size: 30px;
    }
    .old-price{
      margin-left: 5px;
      font-size: 14px;
      color: #aaaaaa;
      text-decoration: line-through;
    }
    .discount{
      background-color: #FF6983;
      display: inline-block;
      color: #ffffff;
      border-radius: 30px;
      padding: 2px 5px;
      font-size: 14px;
      position: relative;
      top: -10px;
    }
  }
  &-btm{
    margin-top: 25px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    color: #aaaaaa;
    font-size: 14px;
  }
}
</style>