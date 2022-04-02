<template>
  <nav-bar class="detail-nav">
    <template #left>
      <div class="detail-nav-left" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt />
      </div>
    </template>
    <template #center>
      <div class="detail-nav-center">
        <div
          v-for="(item,index) in titles"
          :key="index"
          :class="{active:index===showIndex}"
          @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNav",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      showIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.showIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  },
  components: {
    NavBar
  }
};
</script>

<style scoped lang='scss'>
.detail-nav {
  &-left {
    text-align: center;
    img {
      margin-top: 12px;
    }
  }
  &-center {
    display: flex;
    justify-content: space-around;
    .active {
      color: #e38ea1;
    }
  }
}
</style>