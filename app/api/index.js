import fetch from 'isomorphic-fetch'

var BASE_URL = 'http://localhost:9999'
var COURSES_URL = '/api/course/'
var DECRYPT_KEY = '40674244454045cb9a70040a30e1c007';

exports.getCourses = function() {
  var URL = BASE_URL + COURSES_URL + "6";
  fetch(URL)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      _handleResponse(json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
}

function _handleResponse(json) {
    base64decode(json);
}

function base64decode(json) {
    let string = new Buffer(json, 'base64').toString('ascii');
    console.log(string);
}
