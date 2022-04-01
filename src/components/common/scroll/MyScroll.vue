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
      scroll: null,
      y: 0
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    click: {
      type: Boolean,
      default: true
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    observeDom: {
      type: Boolean,
      default: false
    },
    observeImage: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        pullUpLoad: this.pullUpLoad,
        observeDom:this.observeDom,
        observeImage:this.observeImage
      });
      this.scroll.on("scroll", options => {
        this.$emit("scroll", options.y);
      });
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("contentSole");
        });
      }
    });
  },
  methods: {
    refresh() {
      this.scroll.refresh();
    },
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    }
  }
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>