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
	RecursiveEffect() {
	}
	StopEffect() {
		console.log('Stop Effect');
	}
    // Blurred effect
	_Blur(options = {}) {
        console.log('Blur');
	}
	// Dizzy effect
	_Dizzy(options = {}) {
		console.log('Dizzy..init');
		let velocity = 0.2
		switch (options.speed) {
			case "Slow":
				velocity = 0.1
				break;
			case "Normal":
				velocity = 0.5
				break;
			case "Fast":
				velocity = 1
				break;
			default:
				velocity = 0.5
				break;
		}
		let type = options.type == "Moderate" ? 1 : 2;
		let transition = 'all ' + (velocity) + 's linear';
  		this.element.style.WebkitTransition = transition;
  		this.element.style.transition = transition;
  		let rand = Math.round(Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1);
  		let skew = 'skewX(' + rand + 'deg)';
      	this.element.style.transform = skew;
      	this.element.style.WebkitTransform = skew;
	}
	// Disappear the element
	_Disappear(options = {}) {
        console.log('Disappear');
	}
    // Shake effect
    _Shake(options = {}) {
        console.log('Shake');
    }
    // Rotation effect
    _Spin(options = {}) {
        console.log('Spin');
	}
	//Zoom in/out
	_Pulse(options = {}) {
		console.log('Pulse');
	}
		
	// Develop this after
	/* // Effect of fall element
	Fall () {
		//fall X pixels
	}
	// Delay effect
	Delay () {
		//verify possibility to delayed actions on page
	}
	// Effect random
	Auto () {
	} */
}

module.exports = Effects;