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
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <toast :message='message' :isShow="isShow"></toast>
  </div>
</template>

<script>
import MyScroll from "@/components/common/scroll/MyScroll";
import GoodsList from "@/components/content/goodslist/GoodsList";
import Toast from '@/components/content/toast/Toast'

import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParams from "./childComps/DetailParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import { getDetail, Goods, Shop, Params, getRecommend } from "@/api/detail";
import { debounce } from "@/common/util";
import { backTopMixin } from "@/common/mixin";
import store from "@/store";

export default {
  name: "detail",
  mixins: [backTopMixin],
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
    DetailBottomBar,
    Toast
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
      showIndex: 0,
      isShowBackTop: false,
      isShow:false,
      message:''
    };
  },
  methods: {
    // 点击主题跳转对应位置
    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index]);
    },

    //监听goodsList图片加载完成
    imgLoad() {
      if (this.$refs.scroll) {
        this.$refs.scroll.refresh();
      }
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
      // backTop显示隐藏
      this.listenShowBackTop(y);

      // 主题对应滚动内容
      const optionsY = Math.abs(y);
      for (var i = this.themeTopYs.length - 1; i >= 0; i--) {
        if (optionsY >= this.themeTopYs[i]) {
          if (i !== this.showIndex) {
            this.showIndex = i;
            this.$refs.nav.showIndex = i;
          }
          break;
        }
      }
    },

    // 箭头点击加入购物车
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.$route.params.iid;
      this.$store.dispatch("addCart", product).then(res=>{
        this.isShow = true
        this.message = res
        setTimeout(()=>{
          this.isShow  = false
          this.message = ''
        },1500)
      })
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