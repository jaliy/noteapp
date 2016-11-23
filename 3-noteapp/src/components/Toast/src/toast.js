import Vue from 'vue';

const ToastVue = Vue.extend(require('./toast.vue'));


let Toast = (options = {}) => {
	let duration = options.duration || 1500;
	
	let ins = new ToastVue({
		el : document.createElement("div")
	});
	ins.message = typeof options === 'string' ? options : options.message;
	document.body.appendChild(ins.$el);
	
	Vue.nextTick(function () {
	  	ins.visible = true;
	  	
	  	ins.timer = setTimeout(function() {
	  		ins.visible = false;
		}, duration);
	})
}


export default Toast;

