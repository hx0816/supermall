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
      y:0
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
      this.scroll.on('scroll',options=>{
        this.$emit('scroll',options.y)
      })
    });
  },
  methods: {
    refresh() {
      this.scroll.refresh();
    },
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    }
  }
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>