document.addEventListener("DOMContentLoaded", function() {
	const dropdown = document.querySelector(".dropdown__value");
	const dropdownList = document.querySelector(".dropdown__list");
 	dropdown.addEventListener ("click",() =>
 		dropdownList.classList.add ("dropdown__list_active")
 	)
 	 function selectItem (item,event) {
 	 	event.preventDefault();
 	 	dropdown.innerText = item.innerText;
 	 	dropdownList.classList.remove ("dropdown__list_active");
 	 }
 const dropdownItems = Array.from (document.getElementsByClassName ("dropdown__item"));
  dropdownItems.forEach ((item) => item.addEventListener ("click", (event) => selectItem (item, event)) )
});


