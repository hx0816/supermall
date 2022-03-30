<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <swiper :image="image" :speed="2000"></swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Swiper from "@/components/common/swiper/Swiper";
import RecommendView from './childComps/RecommendView'
import { getHomeMultiData, getHomeImage } from "@/api/home";
export default {
  components: {
    NavBar,
    Swiper,
    RecommendView
  },
  data() {
    return {
      image: [],
      recommend: []
    };
  },
  created() {
    getHomeMultiData().then(
      res => {
        this.recommend = res.data.recommend.list;
        this.image = res.data.banner.list;
      },
      error => {
        console.log(error.message);
      }
    );
  }
};
</script>

<style>
.home-nav {
  background-color: pink;
}
</style>