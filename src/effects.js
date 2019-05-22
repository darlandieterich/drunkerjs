import Helper from "./helper.js";

class Effects{
    constructor(selector, effect) {
		this.element = new Helper().selectElement(selector);
		this.effect   = effect;				
    }
    GetEffect() {
        return this[`_${this.effect}`]()
	}
	StopEffect() {
		console.log('Stop Effect');
	}
    // Blurred effect
	_Blur () {
        console.log('Blur');
	}
	// Dizzy effect
	_Dizzy () {
		console.log(this.element);
        console.log('Dizzy');
	}
	// Disappear the element
	_Disappear () {
        console.log('Disappear');
	}
    // Shake effect
    _Shake () {
        console.log('Shake');
    }
    // Rotation effect
    _Spin () {
        console.log('Spin');
    }
		
	// Develop this after
	/* // Effect of fall element
	Fall () {
	}
	// Effect runnaway the element
	Runaway () {
	}
	// Delay effect
	Delay () {
	}
	// Effect random
	Auto () {
	} */
}

module.exports = Effects;