export default function log(msg) {
	let div = document.createElement("div");
	div.innerText = msg;
	document.body.appendChild(div);
}
