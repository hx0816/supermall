<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <my-scroll ref="scroll" class="content" :probeType="3" @scroll="contentScroll" :pullUpLoad="true" @contentSole="contentSole">
      <swiper :image="image" :speed="2000"></swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goodsType" />
    </my-scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Swiper from "@/components/common/swiper/Swiper";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goodslist/GoodsList";
import MyScroll from "@/components/common/scroll/MyScroll";
import BackTop from "@/components/content/backTop/BackTop";

import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultiData, getHomeGoods } from "@/api/home";

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    MyScroll,
    BackTop
  },
  computed: {
    goodsType() {
      return this.goods[this.showType].list;
    }
  },
  data() {
    return {
      image: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      showType: "pop",
      isShowBackTop: false
    };
  },

  methods: {
    // 事件监听相关
    tabClick(index) {
      switch (index) {
        case 0:
          this.showType = "pop";
          break;
        case 1:
          this.showType = "new";
          break;
        case 2:
          this.showType = "sell";
      }
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // scroll滚动监听
    contentScroll(y){
      this.isShowBackTop = Math.abs(y) > 1000
    },
    // 触底上拉加载数据
    contentSole(){
      this.getHomeGoods(this.showType)
      this.$refs.scroll.finishPullUp()
    },

    // 请求数据相关
    async getHomeMultiData() {
      const res = await getHomeMultiData();
      this.recommend = res.data.recommend.list;
      this.image = res.data.banner.list;
    },
    async getHomeGoods(type) {
      const res = await getHomeGoods(type, this.goods[type].page + 1);
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page++;
    }
  },

  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  updated() {
    this.$nextTick(() => {
      this.$refs.scroll.refresh();
    });
  }
};
</script>

<style lang='scss' scoped>
#home {
  height: calc(100vh - 49px);
  position: relative;
  .home-nav {
    background-color: pink;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 0;
  }
}
</style>