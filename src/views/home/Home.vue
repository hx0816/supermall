<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div class="home-nav-center">
        购物街</div>
        </template>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl2"
      v-show="isShowTabControl"
    ></tab-control>
    <my-scroll
      ref="scroll"
      class="content"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @contentSole="contentSole"
      :observeDOM="true"
      :observeImage="true"
    >
      <swiper :image="image" :speed="2000"></swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1"></tab-control>
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


import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultiData, getHomeGoods } from "@/api/home";
import {backTopMixin} from '@/common/mixin'

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    MyScroll,
  },
  mixins:[backTopMixin],
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
      isShowBackTop: false,
      tabScroll: 0,
      isShowTabControl: false,
      scrollY:0
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
      this.$refs.tabControl1.showIndex = index;
      this.$refs.tabControl2.showIndex = index;
    },

    // scroll滚动监听
    contentScroll(y) {
      // 监听backTop显示隐藏
      this.listenShowBackTop(y)

      // 监听tabControl吸顶
      this.isShowTabControl = Math.abs(y) > this.tabScroll;
    },
    // 触底上拉加载数据
    contentSole() {
      this.getHomeGoods(this.showType);
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
      this.$refs.scroll.finishPullUp();
      this.tabScroll = this.$refs.tabControl1.$el.offsetTop;
    });
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY()
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
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 0;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  .home-nav-center{
    color: white;
  }
}
</style>