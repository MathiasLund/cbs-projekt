var express = require('express')
var app = express()
var routes = require('./app/server');

app.use(routes);

app.use(express.static(__dirname + '/public'));

const PORT = 9000
app.listen(PORT, () => console.log('Listening on', PORT))
