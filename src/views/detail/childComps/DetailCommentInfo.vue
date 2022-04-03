<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !==0">
    <div class="info-title">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="info-content">
      <div class="info-content-user">
        <img :src="info.user.avatar" />
        <span>{{info.user.uname}}</span>
      </div>
      <div class="info-content-content">{{info.content}}</div>
      <div class="info-content-info">
        <span>{{format(info.created)}}</span>
        <span class="style">{{info.style}}</span>
      </div>
      <div class="info-content-image">
        <img :src="item" v-for="(item,index) in info.images" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    info() {
      return this.commentInfo.list[0];
    }
  },
  methods: {
    format(date) {
      return moment(date*1000).format("YYYY-MM-DD");
    }
  }
};
</script>

<style lang='scss' scoped>
.detail-comment-info {
  .info {
    &-title {
      display: flex;
      margin: 0 10px;
      border-bottom: 2px solid #dddddd;
      height: 50px;
      align-items: center;
      justify-content: space-between;
    }
    &-content {
      padding: 10px;
      &-user {
        img {
          width: 60px;
          height: 60px;
          vertical-align: middle;
          border-radius: 50%;
          margin-right: 20px;
        }
      }
      &-content {
        margin-top: 15px;
        line-height: 26px;
      }
      &-info {
        margin: 10px 0;
        .style {
          margin-left: 20px;
        }
      }
      &-image {
        img {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
}
</style>