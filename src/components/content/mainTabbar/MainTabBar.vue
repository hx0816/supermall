<template>
    <tab-bar>
        <tab-bar-item path='/home'>
            <template #item-icon>
                <span class="iconfont iconshouye"></span>
                <span>首页</span>
            </template>
        </tab-bar-item>
        <tab-bar-item path='/category'>
            <template #item-icon>
                <span class="iconfont iconfenlei"></span>
                <span>分类</span>
            </template>
        </tab-bar-item>
        <tab-bar-item path='/cart'>
            <template #item-icon>
                <span class="iconfont icongouwuche"></span>
                <span>购物车</span>
            </template>
        </tab-bar-item>
        <tab-bar-item path='/profile'>
            <template #item-icon>
                <span class="iconfont iconwode"></span>
                <span>我的</span>
            </template>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>