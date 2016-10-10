var express = require('express')
var app = express()

app.use(function(req, res, next) {
  require('./dist/server')(req, res, next)
})

const PORT = 9000
app.listen(PORT, () => console.log('Listening on', PORT))
