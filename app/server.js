import express from 'express'
let app = express()

app.get('/', (req, res) => {
    res.send("hey123");
})

module.exports = app
