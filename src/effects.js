import Helper from "./helper.js";

class Effects{
    constructor(selector, effect) {
		this.helper = new Helper();
		this.element = this.helper.selectElement(selector);
		this.effect   = effect;
		this.interval = null;
    }
    GetEffect (options) {
        return this[`_${this.effect}`](options)
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
		let rand = this.helper.random(15)
		let transform = 'skewX(' + rand + 'deg)';
		let transition = 'all ' + (velocity) + 's linear';
  		this.element.style.WebkitTransition = transition;
  		this.element.style.transition = transition;
      	this.element.style.transform = transform;
      	this.element.style.WebkitTransform = transform;
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
	// Effect random
	Auto () {
		console.log('Auto');
	}
}

module.exports = Effects;