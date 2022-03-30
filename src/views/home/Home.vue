<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <swiper :image="image" :speed="2000"></swiper>
    <home-recommend :recommend="recommend"></home-recommend>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Swiper from "@/components/common/swiper/Swiper";
import HomeRecommend from "./childComps/homeRecommend/HomeRecommend";
import { getHomeMultiData, getHomeImage } from "@/api/home";
export default {
  components: {
    NavBar,
    Swiper,
    HomeRecommend
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