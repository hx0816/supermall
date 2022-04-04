<template>
  <div id="detail">
    <detail-nav @navClick="navClick" ref="nav"></detail-nav>
    <my-scroll
      ref="scroll"
      class="detail-scroll"
      :observeDOM="true"
      :observeImage="true"
      :probeType="3"
      @scroll="contentScroll"
    >
      <detail-swiper :images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-params ref="params" :params="params"></detail-params>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </my-scroll>
    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>

<script>
import MyScroll from "@/components/common/scroll/MyScroll";
import GoodsList from "@/components/content/goodslist/GoodsList";

import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParams from "./childComps/DetailParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from './childComps/DetailBottomBar'

import { getDetail, Goods, Shop, Params, getRecommend } from "@/api/detail";
import { debounce } from "@/common/util";

export default {
  name: "detail",
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    MyScroll,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  provide: {
    click: false,
    isImgLoad: true
  },
  data() {
    return {
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      isShow: "goods",
      params: {},
      commentInfo: {},
      goods: {},
      recommends: [],
      themeTopYs: [],
      showIndex : 0
    };
  },
  methods: {
    // 点击主题跳转对应位置
    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index]);
    },

    //监听goodsList图片加载完成
    imgLoad() {
      this.$refs.scroll.refresh()
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      if (this.$refs.params) {
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      }
      if (this.$refs.comment) {
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      }
      if (this.$refs.recommend) {
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      }
    },

    // 监听滚动条滚动
    contentScroll(y) {
      const optionsY = Math.abs(y)
      for(var i = this.themeTopYs.length-1;i>=0;i--){
        if(optionsY>=this.themeTopYs[i]){
          if(i !== this.showIndex){
            this.showIndex = i
            this.$refs.nav.showIndex = i
          }
          break
        }
      }
    }
  },

  async created() {
    // 监听goodsList图片加载完成
    const debounceImgLoad = debounce(this.imgLoad);

    this.$bus.$on("imgLoad", () => {
      debounceImgLoad();
    });

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

    // 5.保存商品参数信息

    this.params = new Params(data.itemParams.rule, data.itemParams.info);

    // 6.保存评论信息
    this.commentInfo = data.rate;

    //7.保存推荐数据
    const recommend = await getRecommend();
    this.recommends = recommend.data.list;
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
    bottom: 58px;
  }
}
</style>