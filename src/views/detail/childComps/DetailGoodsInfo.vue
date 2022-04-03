<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length">
    <div class="info-title">
      <div>{{detailInfo.desc}}</div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-image">
      <div v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
        <img :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.detail-goods-info {
  border-top: 5px solid #eee;
  padding-top: 20px;
  .info {
    &-title {
      padding: 10px;
      text-indent: 10px;
    }
    &-key{
        padding: 10px;
        margin-bottom: 10px;
    }
    &-image {
      padding: 0 5px;
      img {
        width: 100%;
      }
    }
  }
}
</style>