<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <template #center>
        <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    <my-scroll class="content" :observeDom="true" :observeImage="true">
      <cart-list :cartList="cartList"></cart-list>
    </my-scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import NavBar from "@/components/common/navbar/NavBar";
import MyScroll from "@/components/common/scroll/MyScroll";

import CartList from "./childComps/CartList";

export default {
  name: "Cart",
  components: {
    NavBar,
    MyScroll,
    CartList
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"])
  }
};
</script>

<style lang='scss' scoped>
#cart {
  .cart-nav {
    background-color: #ff8e98;
    color: #ffffff;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
}
</style>