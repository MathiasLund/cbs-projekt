import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
          <html>
            <head>
            	<title>FagEvaluering.cbs</title>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css" />
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
              <link rel='stylesheet' type='text/css' href='//fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=cyrillic,latin' />
              <link rel="stylesheet" href="assets/css/style.css" />
            	<link rel="stylesheet" href="assets/css/headers/header-default.css" />
            	<link rel="stylesheet" href="assets/css/footers/footer-v1.css" />
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
