import React, { Component } from 'react'

export default class App extends Component {

    render() {

        const headerStyle = {
          paddingBottom: 20,
          paddingTop: 20
        };

        return (

          <div className="header">
            <div className="container">
              <h1 style={headerStyle}>Undervisningsevaluering</h1>
            </div>

            <div className="collapse navbar-collapse mega-menu navbar-responsive-collapse">
      				<div className="container">
      					<ul className="nav navbar-nav">

      						<li className="active">
      							<a href="/" className="dropdown-toggle" data-toggle="dropdown">
      								Forside
      							</a>
      						</li>
                  <li>
      							<a href="/logout" className="dropdown-toggle" data-toggle="dropdown">
      								Log ud
      							</a>
      						</li>

      					</ul>
      				</div>
      			</div>

          </div>

        )
    }
}
