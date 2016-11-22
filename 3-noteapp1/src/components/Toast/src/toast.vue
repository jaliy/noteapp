<template>
	<transition name="fade">
		<div class="ui-alert" v-show="visible">
			<div class="ui-msg">{{message}}</div>
		</div>
	</transition>
</template>
<style lang="less" scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity 50
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
	.ui-alert {
		position: absolute;
		left: 0;
		top: 0;
		.ui-msg {
		    position: fixed;
		    top: 50%;
		    left: 50%;
	        -webkit-transform: translate3d(-50%,-50%,0);
    		transform: translate3d(-50%,-50%,0);
		    padding: .2rem .4rem;
	    	z-index: 1001;
	    	background-color: #000;
	    	opacity: .4;
	    	border-radius: 3px;
	    	text-overflow: ellipsis;
	    	word-break: break-word;
	    	text-align: center;
	    	font-size: .4rem;
	    	color: #fff;
		}
	}
</style>
<script type="text/javascript">
	export default {
		props: {
			message : String,
		},
		data() {
			return {
				visible: false
			}
		}
	}
</script>
