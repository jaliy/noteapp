<template>
	<div>
		<nv-head :is-sub-nav="true"></nv-head>
		<div class="r2">this is from Route 2</div>
	</div>
</template>

<style scoped>
	.r2 {
		padding: 40px 0;
		background: #ccc;
		color: #666;
	}
</style>
<script type="text/javascript">
	export default {
		components : {
			nvHead : require("../components/header.vue")
		}
	}
</script>