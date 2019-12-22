document.addEventListener("DOMContentLoaded", function() {
  	const modalmain = document.querySelector("#modal_main");
  	const modalsuccess = document.querySelector("#modal_success");
	modalmain.classList.add("modal_active");
	modalmain.querySelector(".modal__close").addEventListener("click", function () {
		modalmain.classList.remove ("modal_active");
	});
	modalmain.querySelector(".show-success").addEventListener("click", function () {
		modalmain.classList.remove ("modal_active");
		modalsuccess.classList.add ("modal_active");
	});
	modalsuccess.querySelector(".modal__close").addEventListener("click", function () {
		modalsuccess.classList.remove ("modal_active");
	});
});
