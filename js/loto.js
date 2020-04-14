function init() {
	$("#fplus").click(plusField);
	$("#fminus").click(minusField);
}

function plusField() {
	let b = $(".hidden");
	if (b.length>0) {b[0].classList.toggle('hidden')};
	};
function minusField() {
	let b = $(".ticket").not('.hidden');
	// console.log(b.length);
	if (b.length>1) {b.last().toggleClass('hidden');}
	};