<template>
  <div id="detail">
    <detail-nav @navClick="navClick"></detail-nav>
    <my-scroll ref="scroll" class="detail-scroll" :observeImage="true" :observeDOM="true">
      <div v-show="isShow==='goods'">
        <detail-swiper :images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      </div>
      <div v-show="isShow==='params'">
        
      </div>
    </my-scroll>
  </div>
</template>

<script>
import MyScroll from "@/components/common/scroll/MyScroll";

import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

import { getDetail, Goods, Shop } from "@/api/detail";

export default {
  name: "detail",
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    MyScroll,
    DetailGoodsInfo
  },
  data() {
    return {
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      isShow: "goods"
    };
  },
  methods: {
    navClick(index) {
      switch (index) {
        case 0:
          this.isShow = "goods";
          break;
        case 1:
          this.isShow = "params";
          break;
        case 2:
          this.isShow = "comment";
          break;
        case 3:
          this.isShow = "recommend";
          break;
      }
    }
  },

  async created() {
    const res = await getDetail(this.$route.params.iid);
    const data = res.result;

    // 1.保存轮播图图片
    this.topImages = data.itemInfo.topImages;

    // 2.保存商品基本信息
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

    // 3.保存店铺基本信息
    this.shop = new Shop(data.shopInfo);

    // 4.保存商品详情信息
    this.detailInfo = data.detailInfo;
  }
};
</script>

<style scoped lang='scss'>
#detail {
  position: relative;
  z-index: 99;
  background: #ffffff;
  height: 100%;
  .detail-scroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
}
</style>