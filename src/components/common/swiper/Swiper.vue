<template>
  <div id="banner">
    <div class="main" ref="main">
      <div class="content" ref="content">
        <img ref="img" v-for="(item,index) in image" :key="index+item.title" :src="item.image"  />
      </div>
    </div>
  </div>
</template>

<script>
import { animate } from "@/common/util";
export default {
  name: "Swiper",
  props: {
    image: {
      type: Array,
      default() {
        return [];
      }
    },
    speed: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      timer: "",
      showIndex: 0,
      imgIndex: 0
    };
  },
  computed: {
    imgW() {
      return this.firstImg.width;
    },
    imgL() {
      return this.image.length;
    },
    main() {
      return this.$refs.main;
    },
    firstImg() {
      return this.$refs.img;
    },
    content() {
      return this.$refs.content;
    }
  },
  methods: {
    // 初始化
    init() {
      this.timer = setInterval(() => {
        this.moveNext();
      }, this.speed);
    },
    // 自动播放
    moveNext() {
      this.showIndex++;
      this.imgIndex++;
      if (this.showIndex > this.imgL) {
        this.showIndex = 1;
        this.main.scrollLeft = 0;
      }
      if (this.imgIndex >= this.imgL) {
        this.imgIndex = 0;
      }
      animate(this.main, {
        scrollLeft: this.imgW * this.showIndex
      });
    }
  },
  mounted() {
    // this.init();
  }
};
</script>

<style lang='scss' scoped>
#banner {
  position: relative;
  .main {
    overflow-y: hidden;
    overflow-x: auto;
    .content {
      width: 4000px;
      img {
        width: 375px;
        height: 200px;
      }
    }
  }
}
</style>