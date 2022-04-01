<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "MyScroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    click:{
        type:Boolean,
        default:true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
          probeType:this.probeType,
          click:this.click
      });
    });
  },
  methods: {
    refresh() {
      this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>