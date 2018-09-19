export default class View {

	constructor(handlers) {
		this.handlers = handlers;
	}

	renderPlanets(planets) {
		planets.forEach((item) => {
			let planet = document.createElement('div');
			planet.className = "item";
			planet.innerText = item.name;
			planet.addEventListener("click", () => {
				this.handlers.onLoadePeople(item.residents);
			});
			document.body.appendChild(planet);
		});
	}

	renderPeople(people) {
		let resident = document.createElement('div');
		resident.className = "item item--man";
		resident.innerText = people;
		document.body.appendChild(resident);
	}

	reportOnUninhabited() {
		let uninhabitedMessage = document.createElement('div');
		uninhabitedMessage.innerText = "This planet is uninhabited";
		document.body.appendChild(uninhabitedMessage);
	}

	renderRestartButton() {
		let restartButton = document.createElement('button');
		restartButton.className = "restart-button";
		restartButton.innerText = "Back";
		restartButton.addEventListener("click", () => {
			this.handlers.onRestart();
		});
		document.body.appendChild(restartButton);
	}

	cleanseBody() {
		document.body.innerHTML = "";
	}

}