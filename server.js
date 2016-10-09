var express = require('express')
var app = express()

/*
app.use(function(req, res, next) {
  require('./dist/server').default(req, res, next)
})*/

app.get('/', (req, res) => {
    res.send("hey123");
})

const PORT = 9000
app.listen(PORT, () => console.log('Listening on', PORT))
