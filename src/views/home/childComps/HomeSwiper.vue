<template>
    <swiper>
        
    </swiper>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper'
export default {
    name:'HomeSwiper',
    components:{
        Swiper
    },
    props:{
        image:{
            type:Array,
            default(){
                return []
            }
        }
    },
}
</script>

<style>

</style>