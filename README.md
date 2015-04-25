# Guidebar
Dropbox-inspired scrollbar guides. Shows page section headers on when the user mouses over to the scrollbar.

This is core javascript and css only. JQuery or other libraries are not needed.

## Getting started

1. Link the Javascript file and the CSS sheet by pasting the code below into the `<head>` section of the page.
```
<link rel="stylesheet" type="txt/css" href="css/guidebar.css"></style>
<script src="js/guidebar.js"></script>
```
2. Initialize the Guidebar on the page, where `h2` is either a tag or class selector.
```
<script> Guidebar.initialize("h2"); </script>
```
