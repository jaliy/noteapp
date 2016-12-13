import Vue from "vue";

const AlertVue = Vue.extend(require('./box.vue'));


let Message = (options = {}) => {
	
    let title = options.title || "提示",
    	isConfirm = (options.isConfirm === undefined || options.isConfirm===false) ? false : true,
        message = typeof options === 'string' ? options : options.message;
        
    return new Promise((resolve, reject) => {
    	let ins = new AlertVue({
			el : document.createElement("div")
		});
		
		ins.message = message;
		ins.title = title;
		ins.isConfirm=isConfirm;
		ins.onOk = () => {
			ins.visible = false;
    		resolve(true);
		}
		ins.onCancel = () => {
			ins.visible = false;
    		resolve(false);
		}
		document.body.appendChild(ins.$el);
	
		Vue.nextTick(() => {
		  	ins.visible = true;
		});
    });
}

let alert = (options = {}) => {
    let title = options.title || "提示";
    let message = typeof options === 'string' ? options : options.message;
    
	return new Message(Object.assign({
		isConfirm:false
	}, {
		title,
		message
	}));
}

let confirm = (options = {}) => {
    let title = options.title || "提示";
    let message = typeof options === 'string' ? options : options.message;
        
	return new Message(Object.assign({
		isConfirm:true
	}, {
		title,
		message
	}));
}
export {alert, confirm};