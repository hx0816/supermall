<template>
  <div class="detail-swiper">
    <div class="detail-swiper-content">
      <div class="detail-swiper-item" v-for="(item,index) in images" :key="index">
        <img :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    images: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped lang="scss">
.detail-swiper {
  overflow-x:auto;
  overflow-y:hidden;
  width: 100%;
  height: 300px;
  &-content{
      width: 5000px;
      overflow-x: auto;
      display: flex;
  }
  &-item{
      width: 375px;
      img{
          width: 100%;
      }
  }

}
</style>