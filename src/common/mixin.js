import BackTop from "@/components/content/backTop/BackTop";


export const backTopMixin = {
    components:{
        BackTop
    },
    methods: {
        // 回到顶部
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        // 监听backTop显示隐藏
        listenShowBackTop(y){
            this.isShowBackTop = Math.abs(y) > 1000;
        }
    }
}