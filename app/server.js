import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/App'
import Table from './components/Table'
import CourseBox from './components/CourseBox'
import NavBar from './components/NavBar'
import API from './api'
let app = express()

app.get('/', (req, res) => {

    API.getCourses()
      .then(res => {
          console.log(res)
      })

    let component = renderToString(
      <App>
          <NavBar />
          <CourseBox />
      </App>
    )

    res.send(
      component
    );
})

module.exports = app
