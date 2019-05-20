var Drunker = class Drunk extends Effects {
	constructor(selector, effect) {
		super(selectElement(selector), effect);
		this.types = TypeEffects("Blur", "Dizzy", "Disappear", "Shake");		
	}

	TypeEffects () {
		for( var i = 0; i < arguments.length; ++i ){
			this[arguments[i]] = i;
		}
		return this;
	}

	static GetTypes () {
		return this.types;
	}
};

module.exports = Drunker;