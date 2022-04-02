<template>
  <div class="detail-shop-info">
    <div class="info-title">
      <img :src="shop.logo" />
      <span>{{shop.name}}</span>
    </div>
    <div class="info-content">
      <div class="info-left">
        <div class="info-left-sells">
          <p>{{shop.sells}}</p>
          <p>总销量</p>
        </div>
        <div class="info-left-goodsCount">
          <p>{{shop.goodsCount}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="info-right">
        <div v-for="(item,index) in shop.score" :key="index" class='info-right-line'>
          <span>{{item.name}}</span>
          <span class="score" :style="{color:item.isBetter ? 'red':'green'}">{{item.score}}</span>
          <span class="compare" :style="{background:item.isBetter ? 'red':'green'}">{{item.isBetter ? '高':'低'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: Object,
    default() {
      return {};
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.detail-shop-info {
  border-top: 10px solid #f9f9f9;
  margin-top: 30px;
  padding: 30px 10px;
  .info-title {
    margin-bottom: 30px;
    img {
      width: 50px;
      height: 50px;
      vertical-align: middle;
    }
    span {
      margin-left: 10px;
    }
  }
  .info-content{
      display: flex;
      .info-left{
          display: flex;
          justify-content:space-evenly;
          flex: 1;
          text-align: center;
          border-right: 1px solid #eeeeee;
      }
      .info-right{
          font-size: 14px;
          text-align: center;
          flex: 1;
          &-line{
              text-align: left;
              margin-top: 10px;
              display: flex;
              padding-left: 30px;
              .score,.compare{
                  margin-left: 10px;
                  color: #ffffff;
              }
              .score{
                  width: 30px;
              }
          }
      }
  }
}
</style>