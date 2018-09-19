import Model from '/Model.js'
import View from '/View.js'

class Controller {

	constructor() {
		this.model = new Model();
		this.view = new View({
			onLoadePeople: this.setOnLoadePeople.bind(this),
			onRestart: this.setOnRestart.bind(this)
		});
		this._initApp();
	}

	_initApp() {
		this.model.initApp().then(planets => {
			this.view.renderPlanets(planets);
		})
	}

	setOnLoadePeople(residents) {
		this.view.cleanseBody();
		this.view.renderRestartButton();
		if (residents.length != 0) {
			residents.forEach((resident) => {
				this.model.loadePeople(resident).then(name => {
					this.view.renderPeople(name);
				});	
			});
		} else {
			this.view.reportOnUninhabited();
		}
	}

	setOnRestart() {
		this.view.cleanseBody();
		this._initApp();
	}
}

new Controller();