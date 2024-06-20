function openModal(modalId) {
	var modal = document.getElementById(modalId);
	modal.style.display = "block";
}

function closeModal(modalId) {
	var modal = document.getElementById(modalId);
	modal.style.display = "none";
}

document.getElementById("Open_1").addEventListener("click", function () {
	openModal("Modal_1");
});

document.getElementById("Open_2").addEventListener("click", function () {
	openModal("Modal_2");
});

document.getElementById("Open_3").addEventListener("click", function () {
	openModal("Modal_3");
});


var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
	closeButtons[i].addEventListener("click", function () {
		var modalId = this.getAttribute("data-modal");
		closeModal(modalId);
	});
}

window.onclick = function (event) {
	if (event.target.classList.contains("modal")) {
		event.target.style.display = "none";
	}
};
