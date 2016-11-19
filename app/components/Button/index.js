import React, { Component } from 'react'

export default class Button extends Component {

    addReview() {
      console.log("add review");
    }

    render() {
        return (
          <button onClick={this.addReview()} className="btn btn-primary">Tilføj review</button>
        )
    }
}
