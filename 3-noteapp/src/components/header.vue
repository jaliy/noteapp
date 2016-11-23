<template>
	<header class="head">
		<a v-if="isSubNav" class="btn-back" @click="goHome" href="javascript:;"></a>
		<h1>{{title}}</h1>
	</header>
</template>
<style lang="less">
	@import '../less/_var';
	
	/**less variable define*/
	@h-bar : .8rem;
	
	/**stylesheet*/
	.head {
	    position: fixed;
        height: @h-bar;
        line-height: @h-bar;
        background: @color-base;
        color: #fff;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 5;
	    .btn-back {
	        position: absolute;
	        left: 0;
	        top: 0;
		    display: flex;
		    -webkit-box-align: center;
	        width: 1rem;
	        height: @h-bar;
	        color: #fff;
	        font-weight: bold;
	        text-align: center;
	        font-size: .8rem;
	        &:after {
        	    content: '';
			    border-bottom: 3px solid #ddd;
			    border-left: 3px solid #ddd;
			    transform: rotate(45deg);
			    display: block;
			    width: .32rem;
			    height: .32rem;
			    position: absolute;
			    left: 35%;
			    top: 50%;
			    margin-top: -.2rem;
	        }
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