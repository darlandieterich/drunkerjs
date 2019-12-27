# DrunkerJS

Discover the effects of alcohol, see what it can do on your page.

(in development)
_________________

## Live Example
[Sample](https://darlandieterich.github.io/drunker)

## Code Example
Simple Dizzy, recursive effect and speed normal.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">    
    <title>Test Drunker</title>
</head>
<body>
    <h2>Test</h2>
    <div id="target" style="width:150px;height:150px;background-color:blue">the test</div>
    <button id="reset">Reset</button>
    <script src="../dist/drunker.js"></script>
    <script>
        var d = new Drunker('#target', Drunker.DrunkerEffects.DIZZY);
        d.Drunk({
            type: Drunker.DrunkerType.UNTILDROP, 
            speed: Drunker.DrunkerSpeed.NORMAL
        });
        document.getElementById('reset').onclick = function() {
            d.StopDrunk()
        }
    </script>
</body>
</html>
```

##Properties
###Effects
```javascript
    //Enums
    Drunker.DrunkerEffects.BLUR
    Drunker.DrunkerEffects.DIZZY
    Drunker.DrunkerEffects.DISAPPEAR
    Drunker.DrunkerEffects.SHAKE
    Drunker.DrunkerEffects.SPIN
    Drunker.DrunkerEffects.PULSE
    Drunker.DrunkerEffects.AUTO //Random effect
```

###Speed
```javascript
    //Enum
    Drunker.DrunkerSpeed.FAST
    Drunker.DrunkerSpeed.NORMAL
    Drunker.DrunkerSpeed.SLOW
```

###Types
```javascript
    //Enum
    Drunker.DrunkerType.MODERATE //One time
    Drunker.DrunkerType.UNTILDROP //Recursive mode
```
