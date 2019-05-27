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
        return Math.round(Math.random() * 10) * (negative ? (Math.random() < 0.5 ? -1 : 1) : 0);
    }

    getPropNames(object) {
        return Object.getOwnPropertyNames(obj)
    }
}