import Effects from "./effects.js";

class Drunker extends Effects {
	constructor(selector = "", effect = {}) {
		super(selector, effect);
	}

	Drunk(options = {}) {
		super.GetEffect(options);
	}

	StopDrunk() {
		super.StopEffect();
	}
};

//Type effects
export const DrunkerEffects = {
	BLUR: "Blur",
	DIZZY: "Dizzy",
	DISAPPEAR: "Disappear",
	SHAKE: "Shake",
	SPIN: "Spin",
	PULSE: "Pulse",
	AUTO: "Auto"
};

//Define velocity of effect
export const DrunkerSpeed = {
	SLOW: "Slow",
	NORMAL: "Normal",
	FAST: "Fast"
}

//Define the type of Drunker
export const DrunkerType = {
	MODERATE: "Moderate",  //One time
	UNTILDROP: "UntilDrop" //Recursive mode
}

//Attach the enum to the class
Drunker.DrunkerEffects = DrunkerEffects;
Drunker.DrunkerSpeed = DrunkerSpeed;
Drunker.DrunkerType = DrunkerType;

module.exports = Drunker;