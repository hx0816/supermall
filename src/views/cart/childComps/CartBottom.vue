<template>
  <div class="cart-bottom">
    <div class="all">
      <check-button class="check-button" :class="{isCheckAll}" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="totalPrice">合计：￥{{totalPrice}}</div>
    <div class="calculate">
      <span>去计算</span>
      <span>{{checkList.length}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "CartBottom",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    checkList() {
      return this.cartList.filter(item => {
        return item.checked;
      });
    },
    totalPrice() {
      return this.checkList
        .reduce((prev, next) => {
          return prev + next.price * next.count;
        }, 0)
        .toFixed(2);
    },
    isCheckAll() {
      if ((this.cartList.length === 0)) return false;
      return this.cartList.every(item => {
        return item.checked;
      });
    }
  },
  methods: {
    checkClick() {
      if (this.isCheckAll) {
        this.cartList.forEach(item => {
          item.checked = false;
        });
      } else {
        this.cartList.forEach(item => {
          item.checked = true;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-bottom {
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  background-color: #ececee;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  font-size: 14px;
  color: #666;
  div {
    height: 100%;
  }
  .check-button {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
  }
  .isCheckAll {
    background-color: #ff8e9b;
  }
  .all {
    display: flex;
    margin-left: 10px;
    margin-right: 20px;
    align-items: center;
  }
  .totalPrice {
    flex: 1;
    margin-left: 40px;
  }
  .calculate {
    width: 100px;
    text-align: center;
    background-color: #ff1a01;
    color: #fff;
  }
}
</style>