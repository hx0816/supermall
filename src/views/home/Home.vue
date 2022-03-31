<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <swiper :image="image" :speed="2000"></swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <good-list :goods="showGoods"></good-list>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Swiper from "@/components/common/swiper/Swiper";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodList from "@/components/content/goodsList/GoodsList";

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
    GoodList
  },
  computed: {
    showGoods: {
      get() {
        return this.goods[this.showType].list;
      }
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
      showType: "pop"
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
  }
};
</script>

<style lang='scss' scoped>
#home {
  padding-top: 44px;
  .home-nav {
    background-color: pink;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
}
</style>