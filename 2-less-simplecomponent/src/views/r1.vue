<template>
	<div>
		<nv-head :is-sub-nav="true"></nv-head>
		<div class="r1">this is from Route 1</div>
	</div>
</template>

<style lang="less" scoped> 
	.r1 {
		padding: 40px 0;
		background: yellow;
		color: #000;
	}
</style>
<script type="text/javascript">
	export default {
		components : {
			nvHead : require("../components/header.vue")
		}
	}
</script>