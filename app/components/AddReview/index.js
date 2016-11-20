import React, { Component } from 'react'

export default class AddReview extends Component {
    render() {
      const {lectureId} = this.props;
        return (
          <div className="container content-sm">

            <div className="headline"><h2>Tilføj nyt review</h2></div>
              <div className="row margin-bottom-20">

                  <form method="POST" action="/insertReview">
                      <div className="form-group">
                        <label for="sel1">Rating</label>
                        <select name="rating" className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="pwd">Kommentar</label>
                        <input type="text" name="comment" className="form-control" />
                      </div>

                      <input type="hidden" name="lectureId" value={lectureId} className="form-control" />

                      <button className="btn btn-primary" type="submit">Tilføj</button>
                  </form>

              </div>

          </div>
        )
    }
}
