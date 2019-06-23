class Helper {
    addCSSRule(rule, name) {
        if (checkExistCSSRule(name) == null) {
            document.styleSheets[0].insertRule(rule);
        }
    }

    checkExistCSSRule(cssRuleName) {
        for (var pos=0; pos < document.styleSheets[0].cssRules.length; pos++) {
            var sheet = document.styleSheets[0].cssRules[pos];
            if (sheet.name == cssRuleName) {
                return sheet;
            }
        }
        return null;
    }

    selectElement(selector) {
        return selector == "" ? Object : document.querySelector(selector);
    }

    random(range, negative = true){
        var res = Math.round(Math.random() * range);
        if (negative) { res = res * (Math.random() < 0.5 ? -1 : 1); }
        return res;
    }

    getSpeed(speed) {
        switch (speed) {
			case Drunker.DrunkerSpeed.FAST:
				return 100
			case Drunker.DrunkerSpeed.NORMAL:
				return 600
			case Drunker.DrunkerSpeed.SLOW:
				return 1100
			default:
				return 600
		}
    }

    getPropNames(object) {
        return Object.getOwnPropertyNames(object);
    }

    getRandomElements(element) {
        var all = document.querySelectorAll(element);
        if (all[0]) {
            var rand = all[0].children[this.random(all[0].children.length)];
            return rand;
        } else {
            return document.body;
        }
    }
}

module.exports = Helper;