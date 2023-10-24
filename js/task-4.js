function getShippingCost(country) {
	switch (country) {
		case "China":
			cost = 100;
			delivery = `Shipping to ${country} will cost ${cost} credits`;
			break;
		case "Chile":
			cost = 250;
			delivery = `Shipping to ${country} will cost ${cost} credits`;
			break;
		case "Australia":
			cost = 170;
			delivery = `Shipping to ${country} will cost ${cost} credits`;
			break;
		case "Jamaica":
			cost = 120;
			delivery = `Shipping to ${country} will cost ${cost} credits`;
			break;
		default:
			delivery = "Sorry, there is no delivery to your country";
	}
	return delivery;
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));