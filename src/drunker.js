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

//Type effects
const DrunkerEffects = {
	BLUR: "Blur", 
	DIZZY: "Dizzy", 
	DISAPPEAR: "Disappear", 
	SHAKE: "Shake",
	SPIN: "Spin",
	PULSE: "Pulse"
};

//Define velocity of effect
const DrunkerSpeed = {
	SLOW: "Slow",
	NORMAL: "Normal",
	FAST: "Fast"
}

//Define the type of Drunker
const DrunkerType = {
	MODERATE = "Moderate",	
	UNTILDROP = "UntilDrop"
}

//Attach the enum to the class
Drunker.DrunkerEffects = DrunkerEffects;
Drunker.DrunkerSpeed = DrunkerSpeed;
Drunker.DrunkerType = DrunkerType;

module.exports = Drunker;
