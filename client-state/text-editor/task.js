const editor = document.getElementById("editor");

editor.value = localStorage.getItem("text") || "";

function save (event) {
	localStorage.setItem ("text",event.target.value);
}

editor.addEventListener("change",save);
editor.addEventListener("keyup",save);
editor.addEventListener("paste",save);
