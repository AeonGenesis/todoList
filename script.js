const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.querySelector("li");

function inputLength() {
	return input.value.length;
}

// creates a new list element
function createListElement() {
	const list = document.createElement("li");
	list.appendChild(document.createTextNode(input.value));
	ul.appendChild(list)
	input.value = "";
}

// adds a list item after you click the enter button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// adds a list item after you press enter
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Make a strikethrough on a list item that you click on
function strikeThrough() {
	li.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.addEventListener("click", strikeThrough);