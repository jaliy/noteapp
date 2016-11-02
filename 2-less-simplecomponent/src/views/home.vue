<template>
	<div>
		<nv-head :is-sub-nav="false"></nv-head>
		<div class="nav">
			<router-link to="r1">Go to r1</router-link> | 
			<router-link to="r2">Go to r2</router-link>
		</div>
		<div class="page-home">This is from <span>Home</span>!</div>
	</div>
</template>
<style lang="less">
	.nav {
		a {
			color: #42B983;
			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
<script type="text/javascript">
	require("../less/_reset.less");
	
	export default {
		components : {
			nvHead : require("../components/header.vue")
		}
	}
</script>