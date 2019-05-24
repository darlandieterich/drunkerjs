import Helper from "./helper.js";

class Effects{
    constructor(selector, effect) {
		this.helper = new Helper();
		this.element = this.helper.selectElement(selector);
		this.effect   = effect;				
    }
    GetEffect (timeInterval) {
        return this[`_${this.effect}`]()
	}
	RecursiveEffect () {
	}
	StopEffect () {
		console.log('Stop Effect');
	}
    // Blurred effect
	_Blur () {
        console.log('Blur');
	}
	// Dizzy effect
	_Dizzy () {
		console.log('Dizzy..init');
		let frameTime = 500;
		let transition = 'all ' + (frameTime / 1000) + 's linear';
  		this.element.style.WebkitTransition = transition;
  		this.element.style.transition = transition;
  		let rand = Math.round(Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1);
  		let skew = 'skewX(' + rand + 'deg)';
      	this.element.style.transform = skew;
      	this.element.style.WebkitTransform = skew;
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
	
	_Pulse () {
		console.log('Pulse');
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