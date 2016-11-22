<template>
	<div class="page-home">
		<nv-head :is-sub-nav="false" title="首页"></nv-head>
		<div class="list">
			<ul v-if="list.length>0">
				<li v-for="l in list"><router-link class="link" :to="{name:'detail',params:{id:l.id}}">{{l.title}}</router-link></li>
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
			menuButton: require("../components/menubutton.vue")
		},
		mounted() {
			this.list = sto.findAll().reverse();
		}
	}
</script>