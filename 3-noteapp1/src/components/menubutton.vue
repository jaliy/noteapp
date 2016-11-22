<template>
	<div class="menu-buttons">
		<ul>
			<li><a @click="createNote" href="javascript:;">新建笔记</a></li>
		</ul>
	</div>
</template>
<style lang="less">
	@import '../less/_var';
	.menu-buttons {
		position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 5;
        ul{
        	height: 1rem;
        }
        li {
        	box-sizing:border-box;
			-moz-box-sizing:border-box; /* Firefox */
			-webkit-box-sizing:border-box; /* Safari */
			float:left;
			width: 100%;
        	height: 1rem;
        	line-height: 1rem;
			border-left: 1px solid #fff;
			background-color: @color-base;
			&.first-child {
				border-left: none;
			}
			a{
        		font-size:.32rem;
        		font-weight: bold;
				text-align: center;
				display: block;
				color: #fff;
				&:before {
					content: '+';
					font-size: .4rem;
				}
			}
        }
	}
</style>
<script>
	export default {
		methods: {
			createNote() {
				this.$router.replace("/create")
			}
		}
	}
</script>