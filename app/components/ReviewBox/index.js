import React, { Component } from 'react'
import AddReview from '../AddReview'

export default class ReviewBox extends Component {

    deleteReview() {
      alert("pik")
    }

    render() {
      const {reviews, date, lectureId} = this.props;
        return (
          <div className="container content-sm">

            <div className="headline"><h2>Reviews</h2> <span>{date}</span></div>
              <div className="row margin-bottom-20">

                {reviews.map(review => {
                    return(
                      <div className="col-md-3 col-sm-6">
                        <div className="thumbnails thumbnail-style thumbnail-kenburn">
                          <div className="caption">
                            <h3>{review.comment} <br />
                            <button className="btn btn-danger" onClick={this.deleteReview}>Slet</button></h3>
                          </div>
                        </div>
                      </div>
                    )
                })}

              </div>

              <hr />
              <AddReview lectureId={lectureId} />

          </div>
        )
    }
}
