<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <my-scroll ref='scroll' class="detail-scroll">
      <detail-swiper :images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </my-scroll>
  </div>
</template>

<script>
import MyScroll from "@/components/common/scroll/MyScroll";

import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";

import { getDetail, Goods, Shop } from "@/api/detail";

export default {
  name: "detail",
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    MyScroll
  },
  data() {
    return {
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  methods: {},

  async created() {
    const res = await getDetail(this.$route.params.iid);
    const data = res.result;
    this.topImages = data.itemInfo.topImages;
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
    this.shop = new Shop(data.shopInfo);
  },
  updated(){
    this.$nextTick(()=>{
      console.log(this.$refs.scroll)
      this.$refs.scroll.refresh()
    })
  }
};
</script>

<style scoped lang='scss'>
#detail {
  position: relative;
  z-index: 99;
  background: #ffffff;
  height: 100%;
  .detail-scroll{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
}
</style>