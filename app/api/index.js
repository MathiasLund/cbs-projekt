import fetch from 'isomorphic-fetch'

var BASE_URL = 'http://localhost:9999'
var COURSES_URL = '/api/course/'

exports.getCourses = function() {
  var URL = BASE_URL + COURSES_URL + "6";
  fetch(URL)
    .then(function(response) {
      return response.json()
    }).then(function(string) {
      _handleResponse(string)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
}

function _handleResponse(string) {
    let decryptedString = base64decode(string);
    let json = JSON.parse(decryptedString);
    console.log(json[0].code);
}

function base64decode(string) {
    return new Buffer(string, 'base64').toString('ascii');
}
