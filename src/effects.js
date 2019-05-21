class Effects {
    constructor(selector, effect) {
		this.selector = selector;
		this.effect   = effect;
    }
    GetEffect() {
        return this[this.effect]()
    }
    // Blurred effect
	Blur () {
        console.log('Blur');
	}
	// Dizzy effect
	Dizzy () {
        console.log('Dizzy');
	}
	// Disappear the element
	Disappear () {
        console.log('Disappear');
	}
    // Shake effect
    Shake () {
        console.log('Shake');
    }
    // Rotation effect
    Spin () {
        console.log('Spin');
    }
	// Effect of fall element
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
	}
}

module.exports = Effects;