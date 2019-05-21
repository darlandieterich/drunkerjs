# DrunkerJS

Discover the effects of alcohol, see what it can do on your page.

(in development)
_________________

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">    
    <title>Test Drunker</title>
</head>
<body>
    <h2>Dizzy</h2>
    <div id="value" style="width:150px;height:150px;background-color:blue">
      the test
    </div>
    <script src="../dist/drunker.js"></script>
    <script>
        var Drunker = new Drunker('#value', Drunker.DrunkerEffects.DIZZY);
        Drunker.Drunk();
    </script>
</body>
</html>
```