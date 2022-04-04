<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
        <div class="left-service">
            <span class="iconfont icon-kefu active"></span>
            <span>客服</span>
        </div>
        <div class="left-shop">
            <span class="iconfont icon-dianpu"></span>
            <span>店铺</span>
        </div>
        <div class="left-collect">
            <span class="iconfont icon-shoucang"></span>
            <span>收藏</span>
        </div>
    </div>
    <div class="bottom-bar-right">
      <div @click="addCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    addCart(){
      this.$emit('addCart')
    }
  }
};
</script>

<style scoped lang='scss'>
.bottom-bar {
  width: 100%;
  height: 58px;
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  background-color: #fff;
  &-left {
    flex: 1;
    display: flex;
    justify-content:space-around;
    div{
        display: flex;
        flex-direction: column;
        text-align: center;
        color: #666;
        .active{
            color: #FF98B6;
        }
        .iconfont{
            font-size: 24px;
        }
    }
  }
  &-right {
    height: 100%;
    flex: 1;
    text-align: center;
    display: flex;
    div {
      flex: 1;
      line-height: 58px;
      height: 100%;
      text-align: center;
      &:first-of-type{
          background-color: #FFDE0F;
      }
      &:last-of-type {
        color: #ffffff;
        background-color: #ff789a;
      }
    }
  }
}
</style>