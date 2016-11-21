import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import querystring from 'querystring'
import bodyParser from 'body-parser'
import request from 'request'
import crypto from 'crypto'
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
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res) => {

    if(req.session.userId) res.redirect('/courses')

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
    let passWithSalt = pass + API.getSalt();
    let hashedPassWithSalt = crypto.createHash('md5').update(passWithSalt).digest('hex');
    let passWithSalt2 = hashedPassWithSalt + API.getSalt();
    let hashedPassWithSalt2 = crypto.createHash('md5').update(passWithSalt2).digest('hex');

    var options = {
      url: 'http://localhost:9999/api/login',
      json: {
        cbsMail: email,
        password: hashedPassWithSalt2
      }
    };

    request.post(options, function(error, response, body) {
      let json = JSON.parse(API.decode(body))
      if(json) {
        req.session.userId = json.id
        res.redirect('/courses')
      } else {
        res.redirect('/')
      }
    });

})

app.get('/courses', (req, res) => {

    if(!req.session.userId) res.redirect('/')

    API.getCourses(req.session.userId)
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

    if(!req.session.userId) res.redirect('/')

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

   if(!req.session.userId) res.redirect('/')

   API.getReviews(req.params.id)
    .then(reviews => {
      let component = renderToString(
        <App>
            <NavBar />
            <ReviewBox reviews={reviews} date={req.params.date} lectureId={req.params.id} />
        </App>
      )

      res.send(
        component
      );
    })
})

app.post('/insertReview', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)
    let referer = req.header('Referer') || '/';
    let rating = req.body.rating;
    let comment = req.body.comment;
    let lectureId = req.body.lectureId;

    var options = {
      url: 'http://localhost:9999/api/student/review',
      json: {
        rating: rating,
        comment: comment,
        userId: req.session.userId,
        lectureId: lectureId
      }
    };

    request.post(options, function(error, response, body) {
      let json = JSON.parse(API.decode(body))
      res.redirect(referer);
    });
})

app.delete('/deleteReview', urlencodedParser, (req, res) => {
    res.send(req.params)
})

app.get('/logout', function (req, res) {

    req.session.userId = null

    res.redirect('/')

})

module.exports = app
