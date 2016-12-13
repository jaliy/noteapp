<template>
	<div class="page-home">
		<nv-head :is-sub-nav="false" title="老王笔记"></nv-head>
		<div class="list">
			<ul v-if="list.length>0">
				<delete-row v-for="l in list" :title="l.title" :id="l.id"></delete-row>
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
	
	import { mapGetters, mapActions } from 'vuex'
	import * as types from '../store/mutation-types';
	import {Storage as sto} from '../api';
	
	export default {
	  	computed: {
	  		...mapGetters({
	    		list: 'allNotes'
	  		})
	  	},
		components : {
			nvHead : require("../components/header.vue"),
			menuButton: require("../components/menubutton.vue"),
			deleteRow: require("../components/deleterow.vue")
		},
		mounted() {
    		this.$store.commit(types.NOTE_LOADLIST);
		}
	}
</script>