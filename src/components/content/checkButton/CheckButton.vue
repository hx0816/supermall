<template>
  <div class="check-button" :class="{checked:checked}">
    <img src="~@/assets/img/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang='scss' scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #dddddd;
  img{
      width: 16px;
      height: 16px;
      display: block;
  }
}
.checked {
  background-color: #ff8e9b;
}
</style>