<template>
  <div id="detail">
    <detail-nav></detail-nav>
    <detail-swiper :images="topImages"></detail-swiper>
    <base-info :goods="goods"></base-info>
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import BaseInfo from "./childComps/BaseInfo";

import { getDetail, Goods } from "@/api/detail";

export default {
  name: "detail",
  components: {
    DetailNav,
    DetailSwiper,
    BaseInfo
  },
  data() {
    return {
      topImages: [],
      goods:{}
    };
  },
  methods: {},

  async created() {
    const res = await getDetail(this.$route.params.iid);
    const data = res.result;
    this.topImages = data.itemInfo.topImages;
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
    // console.log(res);
    // console.log(goods)
  }
};
</script>

<style scoped lang='scss'>
#detail {
}
</style>