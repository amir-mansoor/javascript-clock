setInterval(setClock, 1000);
const hourhand = document.querySelector("[data-hour-hand]");
const minhand = document.querySelector("[data-min-hand]");
const sechand = document.querySelector("[data-sec-hand]");

function setClock() {
	const currentDate = new Date();
	const secondRatio = currentDate.getSeconds() / 60;
	const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
	const HourRatio = (minutesRatio + currentDate.getHours()) / 12;

	setRotation(hourhand, HourRatio);
	setRotation(minhand, minutesRatio);
	setRotation(sechand, secondRatio);
}

function setRotation(element, rotationRatio) {
	element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();