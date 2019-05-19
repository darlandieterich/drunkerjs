function checkExistCSSRule(cssRuleName) {    
    for (var pos=0; pos < document.styleSheets[0].cssRules.length; pos++) {
        var sheet = document.styleSheets[0].cssRules[pos];
        if (sheet.name == cssRuleName) {
            return sheet;
        }
    }
    return null;
}

function selectElement(selector) {
    return selector == "" ? Object : document.querySelector(selector)
}