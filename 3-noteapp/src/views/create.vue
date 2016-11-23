<template>
	<div class="create">
		<nv-head :is-sub-nav="true" title="新建笔记"></nv-head>
		<div class="txt-editor">
			<input type="text" v-model="note.title" placeholder="标题" />
			<textarea v-model="note.textValue" placeholder="老王笔记"></textarea>
		</div>
		<a class="btn-save" @click="doSave" href="javascript:;">保存</a>
	</div>
</template>
<script type="text/javascript">
	
    import alert,{confirm} from '../components/Box';
	import HTML5Storage from '../lib/Storage/html5';
	
	let sto = new HTML5Storage();
	
	export default {
		data() {
			return {
				note: {
					id:"",
					title:"",
					textValue:""
				}
			}
		},
		components : {
			nvHead : require("../components/header.vue")
		},
		methods: {
			doSave(){
				if(this.note.textValue==="" || this.note.title===""){
					return ;
				}
				let msg=null;
				if(this.note.id==="") {
					let id = sto.insertOne(this.note);
					this.note.id=id;
					msg = "添加成功！";
				}else {
					sto.updateOne(this.note);
					msg = "更新成功！";
				}
				alert(msg).then(() => {
					this.$router.push("home");
				});
			}
		},
		beforeRouteLeave (to, from, next) {
		    next();
	  	}
	}
</script>
<style lang="less">
	@import "../less/_var.less";
	
	.create {
		.txt-editor {
			box-shadow: 10px 10px 5px #888888;;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding:.8rem 0;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			input,
			textarea {
				display: block;
				border: none;
				border-bottom: 1px solid #ddd;
				padding: .1rem;
				font-size: .4rem;
				font-family: "微软雅黑";
			}
			input {
				width: 100%;
				height: .8rem;
				line-height: .8rem;
			}
			textarea {
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				box-sizing: border-box;
				width: 100%;
				height: 100%;
			}
		}
		.btn-save {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width:100%;
			height: .8rem;
			line-height: .8rem;
			text-align: center;
			font-size: .4rem;
			color: #fff;
			background-color: @color-base;
		}
	}
</style>