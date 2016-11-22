<template>
	<header class="head">
		<a v-if="isSubNav" class="btn-back" @click="goHome" href="javascript:;">&lt;</a>
		<h1>{{title}}</h1>
	</header>
</template>
<style lang="less">
	@import '../less/_var';
	
	/**less variable define*/
	@h-bar : .8rem;
	
	/**stylesheet*/
	.head {
	    position: relative;
        height: @h-bar;
        line-height: @h-bar;
        background: @color-base;
        color: #fff;
        z-index: 9999;
	    .btn-back {
	        position: absolute;
	        left: 0;
	        top: 0;
	        display: inline-block;
	        width: 1rem;
	        height: @h-bar;
	        line-height: @h-bar;
	        color: #fff;
	        font-weight: bold;
	        text-align: center;
	        font-size: .8rem;
	    }
	    h1 {
	        text-align: center;
	        font-size: 0.4rem;
	    }
	}
</style>
<script type="text/javascript">
	export default {
		props : {
			isSubNav: Boolean,
			title:String
		},
		methods : {
			goHome() {
				//replace不会记录history，push会记录
				//this.$router.push("/")
				this.$router.replace("/")
			}
		}
	}
</script>