import Effects from "./effects.js";

class Drunker extends Effects {
	constructor(selector = "", effect = {}) {
		super(selector, effect);
	}

	static GetTypes () {
		return {
			BLUR: 1, 
			DIZZY: 2, 
			DISAPPEAR: 3, 
			SHAKE: 4
		};
	}
};

module.exports = Drunker;
