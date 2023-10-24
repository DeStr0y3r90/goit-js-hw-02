function formatMessage(message, maxLength) {
	let i = message.trim().length;
	if (i <= maxLength) {
		return message;
	} else {
		return message.slice(0, i) + "...";
	}
}
console.log(formatMessage(" Curabitur ligula sapien ", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));