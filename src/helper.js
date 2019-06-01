export default class Helper {
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
			case "Fast":
				return 100
			case "Normal":
				return 600
			case "Slow":
				return 1100
			default:
				return 600
		}
    }

    getPropNames(object) {
        return Object.getOwnPropertyNames(obj)
    }
}