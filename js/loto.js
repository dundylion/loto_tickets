function init() {
	$("#fplus").click(plusField);
	$("#fminus").click(minusField);
	$(".changebutton").click(fillCard);
	$(".changebutton").click();
	$(".cell").click(activateCell);
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

function fillCard(crd) {
	let card = crd;
	let cells = card.target.parentElement.querySelectorAll(".cell");
	ks = Object.keys(cards);
	let cr = Math.floor(Math.random()*ks.length);
	crd.target.previousElementSibling.innerText = ks[cr];
	let numbers = cards[ks[cr]];
	for (let i = 0; i<cells.length; i++)
		{
			t = cards[ks[cr]][i];
			cells[i].innerText = t;
		}
	// $(card)(".activated").target.classList.remove("activated");
	}
function activateCell(cell) {
	console.log(cell);
	if (cell.target.innerText !== "") {
		cell.target.classList.toggle("activated");
		checkRow(cell.target.parentElement);
	}	
}
function checkRow(row) {
	l = row.querySelectorAll(".activated").length;
	if (l == 5) {row.classList.add("activated")}
		else {row.classList.remove("activated")}

}