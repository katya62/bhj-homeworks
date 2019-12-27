var xhr = new XMLHttpRequest();
let loader = document.querySelector(".loader");
xhr.onreadystatechange = processResponse;
function processResponse(e) {
	if (xhr.readyState === 4) {
		const currencies = JSON.parse(xhr.responseText).response.Valute;
		loader.classList.remove ("loader_active");
		Object.values(currencies).forEach(renderItem);
	}
	else {
		console.log (`Загружаем...`);
	}
}
xhr.open (`GET`,`https://netology-slow-rest.herokuapp.com`,true);
xhr.send();

const itemsElement = document.getElementById('items')		

function renderItem (currency) {
	const item = document.createElement("div");

	item.classList.add ("item")
	item.innerHTML = `
		<div class="item__code">${currency.CharCode}</div>
		<div class="item__value">${currency.Value}</div>
		<div class="item__currency"> руб.</div>
	`;

	itemsElement.appendChild (item);
}
