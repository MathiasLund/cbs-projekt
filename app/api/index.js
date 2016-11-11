import fetch from 'isomorphic-fetch'

var BASE_URL = 'http://localhost:9999'
var COURSES_URL = '/api/course/'
var LECTURE_URL = '/api/lecture/'
var REVIEW_URL = '/api/review/'

exports.getCourses = function() {
  var URL = BASE_URL + COURSES_URL + "6";
  return _fetch(URL);
}

exports.getLectures = function(code) {
  var URL = BASE_URL + LECTURE_URL + code;
  return _fetch(URL);
}  

exports.getReviews = function(lectureId) {
  var URL = BASE_URL + REVIEW_URL + lectureId;
  return _fetch(URL);
}

function _fetch(URL) {
  return fetch(URL)
    .then(response => response.json())
    .then(string => _handleResponse(string))
    .catch(ex => console.log('parsing failed', ex))
}

function _handleResponse(string) {
    let decryptedString = base64decode(string);
    let json = JSON.parse(decryptedString);
    return json;
}

function base64decode(string) {
    return new Buffer(string, 'base64').toString('ascii');
}
