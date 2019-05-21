import Effects from "./effects.js";

class Drunker extends Effects {
	constructor(selector = "", effect = {}) {
		super(selector, effect);
	}

	Drunk(times = 0) {
		super.GetEffect();
	}
};

const DrunkerEffects = {
	BLUR: 1, 
	DIZZY: 2, 
	DISAPPEAR: 3, 
	SHAKE: 4,
	SPIN: 5
};

Drunker.DrunkerEffects = DrunkerEffects;
module.exports = Drunker;
