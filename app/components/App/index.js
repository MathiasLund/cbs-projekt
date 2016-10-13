import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
            </head>
            <body>
              <div id='wrapper'>
                {this.props.children}
              </div>
            </body>
          </html>
        )
    }
}
