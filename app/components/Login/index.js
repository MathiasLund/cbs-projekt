import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
          <div className="container content-sm">

            <div className="headline"><h2>Login</h2></div>
              <div className="row margin-bottom-20">

                  <form method="POST" action="/login/auth">
                      <div className="form-group">
                          <input type="email" name="email" />
                          <input type="password" name="password" />
                          <button type="submit">Login</button>
                      </div>
                  </form>

              </div>
          </div>
        )
    }
}
