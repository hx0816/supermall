<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang='scss' scoped>
.nav-bar {
  height: 44px;
  line-height: 44px;
  display: flex;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 9;
  .left {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
    color: white;
  }
  .right {
    width: 60px;
  }
}
</style>