<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.sort">
      <div class="recommend-item-icon">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </div>
      <div class="recommend-item-title">
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.recommend {
  display: flex;
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 10px solid #EEEEEE;
  &-item {
    flex: 1;
    text-align: center;
    img {
      width: 80%;
    }
    &-title{
      color: #888;
    }
  }
}
</style>