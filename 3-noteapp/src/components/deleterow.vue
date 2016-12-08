<template>
	<li class="row" 
		@touchstart="onStart" 
		@touchend.stop="onEnd" 
		v-bind:class="{transform: isRightToLeft&&deltaX>10}">
		<p class="txt">
			<router-link class="link" 
				:to="{name:'detail',params:{id:id}}" v-text="title"></router-link>
		</p>
		<a class="btn-del" href="javascript:;" 
			@touchstart.stop="onDelete" >删除</a>
	</li>
</template>
<style lang="less">
	.row {
		position: relative;
		background-color: #fafafa;
		border-bottom: 1px solid #ddd;
		padding: .2rem .1rem;
		overflow-x: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
		.txt {
			width: 100%;
			transition: transform 100ms ease-in-out;
			transform:translate(0, 0);
		}
        .link {
            display: block;
            color: #333;
        }
		.btn-del {
		    position: absolute;
		    right:0;
		    top:0;
			transform: translate(1.6rem, 0);
		    transition: transform 50ms linear;
		    height: 100%;
		    display: -webkit-box;
		    display: -webkit-flex;
		    display: flex;
		    -webkit-box-align: center;
	        justify-content: center;
	        -webkit-justify-content: center;
		    align-items:center;
		    -webkit-align-items: center;
		    text-decoration: none; 
			background-color: #ed4040;
		    width: 1.6rem;
			color: #fff;
		}
		&.transform {
			.txt {
				transform:translate(-1.6rem, 0)
			}
			.btn-del {
				transform:translate(0, 0)
			}
		}
	}
</style>
<script type="text/javascript">
    import $ from 'webpack-zepto';
    import Toast from '../components/Toast';
    import alert, {confirm} from '../components/Box';
    
	import HTML5Storage from '../lib/Storage/html5';
	let sto = new HTML5Storage();
	
	
	export default {
		props:{
			title:{
				require:true,
				type:String
			},
			id:{
				require:true,
				type:String
			}
		},
		data(){
			return  {
				startX:0,
				startY:0,
				deltaX:0,
				delTaY:0,
				isRightToLeft:false
			}
		},
		methods: {
			onStart(e) {
				this.startX=e.touches[0].clientX;
				this.startY=e.touches[0].clientY;
			},
			onEnd(e) {
				this.isRightToLeft = e.changedTouches[0].clientX < this.startX;
				this.deltaX = Math.abs(e.changedTouches[0].clientX - this.startX);
				this.deltaY = Math.abs(e.changedTouches[0].clientY - this.startY);
			},
			onDelete(e) {
				confirm("确认删除？").then((res) => {
					if(res) {
						sto.deleteOne(this.id);
						this.$emit('delete');
						Toast("删除成功");
					}
				});
			},
			resetLi() {
				this.isRightToLeft = false;
				$(this.$el).parent().find(".transform").removeClass("transform");
			}
		},
		mounted() {
			$(document).off("touchstart", this.resetLi).on("touchstart", this.resetLi, true);
		},
		destoryed() {
			$(document).off("touchstart").on("touchstart", this.resetLi);
		}
	}
</script>