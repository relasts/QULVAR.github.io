/*jslint browser: true */
window.onload = function () {
	let btn_price = document.getElementById("get_good");
	btn_price.addEventListener("click", function (e) {
		e.preventDefault();
		let good = document.getElementById("good");
		let count = document.getElementById("number").value;
		let priceEl = good.options[good.selectedIndex];
		let price = priceEl.getAttribute("price");
		let price_field = document.getElementById("sum");
		
		if (/^\d+$/.test(count)) {
			price_field.innerHTML = price * count + "₽";
		} else {
			price_field.innerHTML = "";
		}
	});
};