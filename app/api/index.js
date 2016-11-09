import fetch from 'isomorphic-fetch'

var BASE_URL = 'http://localhost:9999'
var COURSES_URL = '/api/course/'
var LECTURE_URL = '/api/lecture/'

exports.getCourses = function() {
  var URL = BASE_URL + COURSES_URL + "6";
  return fetch(URL)
    .then(response => response.json())
    .then(string => _handleResponse(string))
    .catch(ex => console.log('parsing failed', ex))
}

exports.getLectures = function() {
  var URL = BASE_URL + LECTURE_URL + "6";
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
