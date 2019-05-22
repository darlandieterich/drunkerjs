import Effects from "./effects.js";

class Drunker extends Effects {
	constructor(selector = "", effect = {}) {
		super(selector, effect);
	}
	
	Drunk(times = 0) {
		super.GetEffect();
	}

	StopDrunk() {
		super.StopEffect();
	}
};

const DrunkerEffects = {
	BLUR: "Blur", 
	DIZZY: "Dizzy", 
	DISAPPEAR: "Disappear", 
	SHAKE: "Shake",
	SPIN: "Spin"
};

Drunker.DrunkerEffects = DrunkerEffects;
module.exports = Drunker;
