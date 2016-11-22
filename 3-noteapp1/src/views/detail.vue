<template>
	<div>
		<nv-head :is-sub-nav="true" title="新建笔记"></nv-head>
		<article class="detail">
			<h1>{{note.title}}</h1>
			<div class="content" v-html="note.textValue">
			</div>
		</article>
	</div>
</template>
<style lang="less">
	.detail {
		padding: .1rem;
		h1{
			font-size: .36rem;
			text-align: center;
			text-overflow: ellipsis;
    		word-break: break-all;
		}
		.content {
			font-size: .28rem;
		}
	}
</style>
<script type="text/javascript">
	import HTML5Storage from '../lib/Storage/html5';
	import util from '../lib/util';
	
	let sto = new HTML5Storage();
	
	
	export default {
		data() {
			return {
				note:null
			}
		},
		components : {
			nvHead : require("../components/header.vue"),
			menuButton: require("../components/menubutton.vue")
		},
		beforeRouteEnter(to, from, next) {
			let note = sto.findOne(to.params.id);
			note.textValue = note.textValue.replace(/\n|\r/g,"<br />");
			next(vm => {
	          	vm.note = note
	        });
		}
	}
</script>
