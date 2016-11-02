<template>
	<header class="head">
		<a v-if="isSubNav" class="btn-back" v-on:click="goHome" href="javascript:;">&lt;</a>
		<h1>{{title}}</h1>
	</header>
</template>
<style lang="less">
	/**less variable define*/
	@h-bar : 1.6rem;
	
	/**stylesheet*/
	.head {
	    position: relative;
        height: @h-bar;
        line-height: @h-bar;
        background: #42B983;
        color: #fff;
	    .btn-back {
	        position: absolute;
	        left: 0;
	        top: 0;
	        display: inline-block;
	        width: 1.5rem;
	        height: @h-bar;
	        line-height: @h-bar;
	        color: #fff;
	        font-weight: bold;
	        text-align: center;
	        font-size: 1.4rem;
	    }
	    h1 {
	        text-align: center;
	        font-size: 0.8rem;
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