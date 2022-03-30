<template>
  <div class="tab-bar-item" @click="handleClick" :style="activeStyle">
    <slot name="item-icon"></slot>
    <slot name="item-itext"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      default: "red",
      type: String
    }
  },
  computed: {
    activeStyle() {
      return this.$route && this.path === this.$route.path
        ? { color: this.activeColor }
        : {};
    }
  },
  methods: {
    handleClick() {
      if (this.path === this.$route.path) {
        return;
      }
      this.$router.replace(this.path);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "./icon/iconfont.css";
.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-flow: column;
  .iconfont {
    font-size: 20px;
  }
}
</style>