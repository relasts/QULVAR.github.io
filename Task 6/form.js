/*jslint browser: true */
window.onload = function () {
	
	function price (good, option) {
		let count = document.getElementById("number").value;
		let price = good.getAttribute("value");
		let price_field = document.getElementById("sum");
		let pprice = option.getAttribute("value");
		if (/^\d+$/.test(count)) {
			price_field.innerHTML = price * count + Number(pprice) + "₽";
		} else {
			price_field.innerHTML = "";
		}
	}

	let good1 = document.getElementById("good1");
	let good2 = document.getElementById("good2");
	let good3 = document.getElementById("good3");
	let options = document.getElementById("options");
	let option1 = document.getElementById("option1");
	let option2 = document.getElementById("option2");
	let check_box = document.getElementById("check");
	

	good1.addEventListener("click", function () {
		options.className = "invisible";
		check_box.className = "invisible";
		price(good1, option1);
	});
	good2.addEventListener("click", function () {
		options.className = "visible";
		check_box.className = "invisible";
		price(good2, option1);
	});
	good3.addEventListener("click", function () {
		options.className = "invisible";
		check_box.className = "visible";
		price(good3, option1);
	});
	option1.addEventListener("change", function () {
		price(good2, option1);
	});
	option2.addEventListener("change", function () {
		price(good2, option2);
	});

};