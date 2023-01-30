//Install express server
const express = require('express');

const path = require('path');
const app = express();


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const portS = (process.env.PORT || 4200);
// Start the app by listening on the default Heroku port
console.log("listening on ", portS);
app.listen(process.env.PORT || 4200);