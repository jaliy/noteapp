<template>
	<div class="iconfont icon-top" v-show="show" @click="backTop">&#xe611;</div>
</template>
<style lang="less">
	@import '../less/_var.less';
	
    .icon-top {
        position: fixed;
        right: .6rem;
        bottom: .8rem;
        font-size: 50px;
        z-index: 9999;
        color: @color-base;
    }
</style>
<script>
    import $ from 'webpack-zepto';
    
    export default {
        data() {
            return {
                show: false
            };
        },
        mounted() {
        	//挂载完成后监听滚动
            $(window).on('scroll', () => {
                if ($(window).scrollTop() > 100) {
                    this.show = true;
                } else {
                    this.show = false;
                }
            });
        },
        beforeDestory() {
        	//销毁之前取消监听事件
            $(window).off('scroll');
        },
        methods: {
            backTop() {
                $(window).scrollTop(0);
                this.show = false;
            }
        }
    };
</script>