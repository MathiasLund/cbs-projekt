var express = require('express')
var session = require('express-session')
var app = express()
var routes = require('./app/server');

app.use(session({
    secret: 'keyboard cat',
    loggedIn: false,
    userId: null,
    resave: true,
    saveUninitialized: true
}));

app.use(routes);
app.use(express.static(__dirname + '/public'));

const PORT = 9000
app.listen(PORT, () => console.log('Listening on', PORT))
