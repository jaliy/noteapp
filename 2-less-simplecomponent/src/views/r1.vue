<template>
	<div>
		<nv-head :is-sub-nav="true" title="Router 1"></nv-head>
		<div class="r1">this is from Route 1</div>
	</div>
</template>
<script type="text/javascript">
	require("../less/r1.less");
	export default {
		components : {
			nvHead : require("../components/header.vue")
		}
	}
</script>