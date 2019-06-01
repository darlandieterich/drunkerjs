import Helper from "./helper.js";

class Effects{
    constructor(selector, effect) {
		this.helper = new Helper();
		this.element = this.helper.selectElement(selector);
		this.effect   = effect;
		this.interval = {};
		this.stop = {};
    }
    GetEffect (options) {
        return this[`_${this.effect}`](options)
	}
	StopEffect() {
		this.stop();
	}
    // Blurred effect
	_Blur(options = {}) {
		console.log('Blur..init');
		let fps = this.helper.getSpeed(options.speed)
		
		let blured = false;
		let rand = this.helper.random(20, false);
		let filter = 'blur('+rand+'px)';
		let transition = (fps/1000) + 's';
		this.element.style.WebkitTransition = transition;
		this.element.style.transition = transition;
		this.element.style.filter = filter;
		this.element.style.WebkitFilter = filter;

		if (options.type){
			if (options.type == "UntilDrop"){
				this.interval = setInterval(function () {
					let rand = this.helper.random(20, false);
					let filter = 'blur('+rand+'px)';
					this.element.style.filter = filter;
					this.element.style.WebkitFilter = filter;
				}.bind(this), fps);
			}
		}

		this.stop = function stop () {
			this.element.style.filter = '';
			this.element.style.WebkitFilter = '';
			if (this.interval) { clearInterval(this.interval); }
		}
	}
	// Dizzy effect
	_Dizzy(options = {}) {
		console.log('Dizzy..init');
		let fps = this.helper.getSpeed(options.speed)
		
		let rand = this.helper.random(15)
		let transform = 'skewX(' + rand + 'deg)';
		let transition = (fps/1000) + 's';
		this.element.style.WebkitTransition = transition;
		this.element.style.transition = transition;
		this.element.style.transform = transform;
		this.element.style.WebkitTransform = transform;

		if (options.type){
			if (options.type == "UntilDrop"){
				this.interval = setInterval(function () {
					rand = this.helper.random(15)				
					transform = 'skewX(' + rand + 'deg)';
					this.element.style.transform = transform;
					this.element.style.WebkitTransform = transform;
				}.bind(this), fps);
			}
		}

		this.stop = function stop () {
			this.element.style.transform = '';
			this.element.style.WebkitTransform = '';
			if (this.interval) { clearInterval(this.interval); }
		}		  
	}
	// Disappear the element
	_Disappear(options = {}) {
		console.log('Disappear.. init');
		let fps = this.helper.getSpeed(options.speed)
		
		let disappear = false;		
		let opacity = '1.0';
		let transition = 'opacity '+(fps / 1000)+'s';
		this.element.style.opacity = opacity;
		this.element.style.WebkitTransition = transition;
		this.element.style.transition = transition;

		if (options.type){
			if (options.type == "UntilDrop"){
				this.interval = setInterval(function () {
					opacity = disappear ? '1.0' : '0.0';
					this.element.style.opacity = opacity;
					disappear = !disappear;
				}.bind(this), fps);
			}
		}

		this.stop = function stop () {
			this.element.style.opacity = '';
			if (this.interval) { clearInterval(this.interval); }
		}
	}
    // Shake effect
    _Shake(options = {}) {
		console.log('Shake..init');
		let fps = this.helper.getSpeed(options.speed)
		
		let rand = this.helper.random(15)
		let translate = 'translate('+rand+'px,'+rand+'px)';
		this.element.style.transform = translate;
		this.element.style.WebkitTransform = translate;
		let transition = (fps / 1000)+'s ease-in-out';
		this.element.style.WebkitTransition = transition;
		this.element.style.transition = transition;

		if (options.type){
			if (options.type == "UntilDrop"){
				this.interval = setInterval(function () {
					rand = this.helper.random(15)
					translate = 'translate('+rand+'px,'+rand+'px)';
					this.element.style.transform = translate;
					this.element.style.WebkitTransform = translate;
				}.bind(this), fps);
			}
		}

		this.stop = function stop () {
			this.element.style.transform = '';
			this.element.style.WebkitTransform = '';
			if (this.interval) { clearInterval(this.interval); }
		}
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