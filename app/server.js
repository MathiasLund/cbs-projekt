import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/App'
import Table from './components/Table'
import CourseBox from './components/CourseBox'
import LectureBox from './components/LectureBox'
import ReviewBox from './components/ReviewBox'
import NavBar from './components/NavBar'
import API from './api'
let app = express()

app.get('/', (req, res) => {
    res.send("hey");
})

app.get('/courses', (req, res) => {

    API.getCourses()
      .then(courses => {
        let component = renderToString(
          <App>
              <NavBar />
              <CourseBox courses={courses} />
          </App>
        )

        res.send(
          component
        );
      })
})

app.get('/lectures/:code', function (req, res) {

    API.getLectures(req.params.code)
      .then(lectures => {
        let component = renderToString(
          <App>
              <NavBar />
              <LectureBox lectures={lectures} />
          </App>
        )

        res.send(
          component
        );
      })

})

app.get('/reviews/:date/:id', function (req, res) {
   API.getReviews(req.params.id)
    .then(reviews => {
      let component = renderToString(
        <App>
            <NavBar />
            <ReviewBox reviews={reviews} date={req.params.date} />
        </App>
      )

      res.send(
        component
      );
    })

})

module.exports = app
