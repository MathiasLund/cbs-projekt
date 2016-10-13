import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/App'
import Table from './components/Table'
let app = express()

app.get('/', (req, res) => {

    let component = renderToString(
      <App>
          <Table />
      </App>
    )

    res.send(
      component
    );
})

module.exports = app
