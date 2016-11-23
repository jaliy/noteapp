<template>
	<div>
		<nv-head :is-sub-nav="true" title="Route 2"></nv-head>
		<div class="r2">this is from Route 2</div>
	</div>
</template>
<script type="text/javascript">
	require("../less/r2.less");
	
	export default {
		components : {
			nvHead : require("../components/header.vue")
		}
	}
</script>