<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  methods:{
  }
};
</script>

<style lang='scss'  scoped>
#tab-bar {
  height: 49px;
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
}
</style>