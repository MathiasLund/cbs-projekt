import fetch from 'isomorphic-fetch'

var BASE_URL = 'http://localhost:9999'
var COURSES_URL = '/api/course/'

exports.getCourses = function() {
  var URL = BASE_URL + COURSES_URL + "1";
  fetch(URL)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

function _handleResponse (response) {
    return response;
}
