### pseudoSelect.js
```html

<!-- your pseudoSelect theme -->
<link rel="stylesheet" type="text/css" href="/path/to/pseudoselect.css">

<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!-- pseudoSelect script -->
<script src="/path/to/jquery.pseudoSelect.js"></script>
```

###Required HTML structure
Each select will be defined.

```html
<div class="select" data-name="lang">
    <div class="option" data-value="en">en</div>
    <div class="option selected" data-value="pl">pl</div>
    <div class="option" data-value="ua">ua</div>
</div>
```

###Initialization
All you need to do is call the plugin inside a `$(document).ready` function:

```javascript
$(document).ready(function() {
    $(".select").select();
});
```

###Callback

```javascript
$(document).ready(function() {
    $(".select").select(function(value) {
        console.log(value);
    });
});
```

###Version

0.3