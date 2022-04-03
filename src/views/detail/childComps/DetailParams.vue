<template>
  <div class="detail-params" v-if="Object.keys(params).length">
    <div class="detail-params-table">
      <div v-for="(item,index) in params.tables" :key="index">
        <span v-for="(item,index) in item" :key="index">{{item}}</span>
      </div>
    </div>
    <div class="detail-params-set">
      <div v-for="(item,index) in params.set" :key="index" class="detail-params-set-item">
        <span class="key">{{item.key}}</span>
        <span class="value">{{item.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped lang="scss">
.detail-params {
  padding-top: 20px;
  &-table {
    border-top: 5px solid #eee;
    padding: 10px 10px;
    div {
      height: 30px;
      line-height: 30px;
      border-bottom: 2px solid #eee;
      font-size: 14px;
      display: flex;
      span{
          flex: 1;
          text-align: center;
          &:first-of-type{
              text-align-last: left;
          }
      }
    }
  }
  &-set {
    padding: 10px;
    &-item {
      border-bottom: 2px solid #eee;
      min-height: 40px;
      align-items: center;
      display: flex;
      font-size: 14px;
      .key {
        width: 50px;
        margin-right: 50px;
      }
      .value {
        color: #f1879b;
        flex: 1;
      }
    }
  }
}
</style>