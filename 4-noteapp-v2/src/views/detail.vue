<template>
	<div>
		<nv-head :is-sub-nav="true" :title="title"></nv-head>
		<article class="detail">
			<div class="content" v-html="value">
			</div>
		</article>
	</div>
</template>
<style lang="less">
	.detail {
		padding: .1rem;
        padding-top: .9rem;
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
	import {Storage as sto} from '../api';
	
	export default {
		data() {
			return {
				title: "",
				value: ""
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
	          	vm.title = note.title, vm.value = note.textValue;
	        });
		}
	}
</script>
