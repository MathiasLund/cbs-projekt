import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
          <div className="container content-sm">

            <div className="headline"><h2>Login</h2></div>
              <div className="row margin-bottom-20">

                  <form method="POST" action="/login/auth">
                      <div className="form-group">
                        <label for="usr">Email:</label>
                        <input type="text" name="email" className="form-control" id="usr" />
                      </div>
                      <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" name="password" className="form-control" id="pwd" />
                      </div>

                      <button className="btn btn-primary" type="submit">Login</button>
                  </form>

              </div>
          </div>
        )
    }
}
