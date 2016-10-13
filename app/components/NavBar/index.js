import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
          <div className="header">
            <div className="container">
              <a className="logo" href="index.html">
                <img src="assets/img/logo1-default.png" alt="Logo" />
              </a>
            </div>

            <div className="collapse navbar-collapse mega-menu navbar-responsive-collapse">
      				<div className="container">
      					<ul className="nav navbar-nav">

      						<li className="active">
      							<a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">
      								Home
      							</a>
      						</li>
                  <li>
      							<a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">
      								Logout
      							</a>
      						</li>

      					</ul>
      				</div>
      			</div>

          </div>

        )
    }
}
