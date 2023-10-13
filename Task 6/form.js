/*jslint browser: true */
window.onload = function () {
	
	let good1 = document.getElementById("good1");
	let good2 = document.getElementById("good2");
	let good3 = document.getElementById("good3");
	let options = document.getElementById("options");
	let option1 = document.getElementById("option1");
	let option2 = document.getElementById("option2");
	let check_box = document.getElementById("check");
	

	good1.addEventListener("click", function (e) {
		options.className = "invisible";
		check_box.className = "invisible";
	});
	good2.addEventListener("click", function (e) {
		options.className = "visible";
		check_box.className = "invisible";
	});
	good3.addEventListener("click", function (e) {
		options.className = "invisible";
		check_box.className = "visible";
	});







	
	let btn_price;
	btn_price.addEventListener("click", function (e) {
		e.preventDefault();
		let good = document.getElementById("good");
		let count = document.getElementById("number").value;
		let priceEl = good.options[good.selectedIndex];
		let price = priceEl.getAttribute("data-price");
		let price_field = document.getElementById("sum");
		if (/^\d+$/.test(count)) {
			price_field.innerHTML = price * count + "₽";
		} else {
			price_field.innerHTML = "";
		}
	});
};