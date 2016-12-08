<template>
	<div class="page-home">
		<nv-head :is-sub-nav="false" title="老王笔记"></nv-head>
		<div class="list">
			<ul v-if="list.length>0">
				<!-- 自定义事件delete，提供给子组件调用-->
				<delete-row v-for="l in list" :title="l.title" :id="l.id" @delete="reRenderList" ></delete-row>
			</ul>
			<div class="empty" v-if="list.length==0">
				暂无笔记
			</div>
		</div>
		<menu-button></menu-button>
	</div>
</template>
<script type="text/javascript">
	require("../less/iconfont/iconfont.css");
	require("../less/_reset.less");
	require("../less/home.less");
	
	import HTML5Storage from '../lib/Storage/html5';
	let sto = new HTML5Storage();
	
	export default {
		data() {
			return {
				list:[]
			}
		},
		components : {
			nvHead : require("../components/header.vue"),
			menuButton: require("../components/menubutton.vue"),
			deleteRow: require("../components/deleterow.vue")
		},
		mounted() {
			this.list = sto.findAll().reverse();
		},
		methods:{
			reRenderList() {
				this.list = sto.findAll().reverse();
			}
		}
	}
</script>