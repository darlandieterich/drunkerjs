import Effects from "./effects.js";

class Drunker extends Effects {
	constructor(selector = "", effect = {}) {
		super(selector, effect);
	}
	
	Drunk(timeInterval = 0) {
		super.GetEffect(timeInterval);
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
	SPIN: "Spin",
	PULSE: "Pulse"
};

const DrunkerSpeed = {
	SLOW: "Slow",
	NORMAL: "Normal",
	FAST: "Fast"
}

Drunker.DrunkerEffects = DrunkerEffects;
module.exports = Drunker;
