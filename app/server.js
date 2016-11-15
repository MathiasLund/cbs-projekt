import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import querystring from 'querystring'
import bodyParser from 'body-parser'
import request from 'request'
import App from './components/App'
import Table from './components/Table'
import CourseBox from './components/CourseBox'
import LectureBox from './components/LectureBox'
import ReviewBox from './components/ReviewBox'
import NavBar from './components/NavBar'
import Login from './components/Login'
import API from './api'
let app = express()

var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res) => {
    let component = renderToString(
      <App>
          <NavBar />
          <Login />
      </App>
    )

    res.send(
      component
    );
})

app.post('/login/auth', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)
    let email = req.body.email;
    let pass = req.body.password;

    var options = {
      url: 'http://localhost:9999/api/login',
      json: {
        cbsMail: "student@cbs.dk",
        password: "69015ed720025673825c03b1c1634f46"
      }
    };

    request.post(options, function(error, response, body) {
      let json = JSON.parse(API.decode(body))
      console.log(json.id)
      res.send("hey");
    });

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
