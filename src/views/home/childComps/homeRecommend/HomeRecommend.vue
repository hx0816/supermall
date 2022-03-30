<template>
  <recommend>
      <recommend-item v-for='item in recommend' :key="item.sort">
          <template #item-icon>
              <a :href="item.link">
                  <img :src="item.image">
              </a>
          </template>
          <template #item-text>
              <span>{{item.title}}</span>
          </template>
      </recommend-item>
  </recommend>
</template>

<script>
import {Recommend,RecommendItem} from '../recommend'
export default {
    name:'HomeRecommend',
    components:{
        Recommend,
        RecommendItem
    },
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>

</style>