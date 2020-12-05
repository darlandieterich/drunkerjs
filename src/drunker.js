import Effects from "./effects.js";
import {DrunkerType, DrunkerEffects, DrunkerSpeed} from "./enums"

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

//Attach the enum to the class
Drunker.DrunkerEffects = DrunkerEffects;
Drunker.DrunkerSpeed = DrunkerSpeed;
Drunker.DrunkerType = DrunkerType;

module.exports = Drunker;