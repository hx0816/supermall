<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in titles"
      :key="item+index"
      :class="{active:index===showIndex}"
      @click="handleClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      showIndex: 0
    }
  },
  methods:{
      handleClick(index){
          this.showIndex = index
          this.$emit('tabClick',index)
      }
  }
};
</script>

<style lang='scss' scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  &-item {
    flex: 1;
    text-align: center;
  }
  .active {
    color:#EEA7AE;
    span {
      border-bottom: 3px solid #EEA7AE;
      padding: 5px;
    }
  }
}
</style>