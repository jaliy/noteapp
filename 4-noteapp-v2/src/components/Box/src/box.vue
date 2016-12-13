<template>
	<transition name="fade">
		<div class="ui-alert" v-if="visible">
			<div class="ui-msg-box">
				<div class="ui-title" v-text="title">提示</div>
				<div class="ui-msg" v-text="message"></div>
				<div class="ui-buttons">
					<a class="btn" href="javascript:;" @click="onOk">确认</a>
					<a v-if="isConfirm" class="btn" href="javascript:;" @click="onCancel">取消</a>
				</div>
			</div>
			<div class="ui-mask"></div>
		</div>
	</transition>
</template>
<script type="text/javascript">
	export default {
		props: {
			title: String,
			message : String
		},
		data() {
			return {
				isConfirm:true,
				visible: false,
				onOk:null,
				onCancel:null
			};
		},
		methods: {
			onOk() {
				this.onOk && this.onOk();
			},
			onCancel() {
				this.onCancel && this.onCancel();
			}
		}
	}
</script>
<style lang="less" scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .2s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
	.ui-alert {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		.ui-msg-box {
		    position: fixed;
		    top: 50%;
		    left: 50%;
		    width: 80%;
	        -webkit-transform: translate3d(-50%,-50%,0);
    		transform: translate3d(-50%,-50%,0);
	    	z-index: 1001;
	    	background-color: #fff;
	    	border-radius: 3px;
	    	text-overflow: ellipsis;
	    	word-break: break-word;
	    	text-align: center;
	    	font-size: .4rem;
		}
		.ui-title {
			padding-top: .2rem;
			padding-bottom: .2rem;
			font-size: .4rem;
			color: #666;
		}
		.ui-msg {
			font-size: .32rem;
			color: #999;
			padding-bottom: .2rem;
		}
		.ui-buttons {
			display: flex;
			border-top: 1px solid #ddd;
			height: 1rem;
			line-height: 1rem;
			.btn {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				border-right: 1px solid #ddd;
				font-size: .36rem;
				flex:1;
			    display: block;
			    color: #42B983;
			}
		}
		.ui-mask {
		    position: fixed;
		    left: 0;
		    top: 0;
		    width: 100%;
		    height: 100%;
		    opacity: .5;
		    background: #000;
	    	z-index: 1000;
		}
	}
</style>
