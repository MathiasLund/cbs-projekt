import React, { Component } from 'react'
import AddReview from '../AddReview'

export default class ReviewBox extends Component {
    render() {
      const {reviews, date, lectureId} = this.props;

      if(reviews.message) {
        return (
          <div className="container content-sm">

            <div className="headline"><h2>Reviews</h2> <span>{date}</span></div>
              <div className="row margin-bottom-20">
                <div className="col-md-3 col-sm-6">
                  <div className="thumbnails thumbnail-style thumbnail-kenburn">
                    <div className="caption">
                      <h3 className="text-danger">Ingen anmeldelser</h3>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <AddReview lectureId={lectureId} />

          </div>
        )
      }

      var data = reviews.map(review => {
          return(
            <div className="col-md-3 col-sm-6">
              <div className="thumbnails thumbnail-style thumbnail-kenburn">
                <div className="caption">
                  <h3>{review.comment} <br />
                  <a role="button" className="btn btn-danger" href={"/deleteReview/" + review.id}>Slet</a></h3>
                </div>
              </div>
            </div>
          )
      })

      return (
        <div className="container content-sm">

          <div className="headline"><h2>Reviews</h2> <span>{date}</span></div>
            <div className="row margin-bottom-20">
              {data}
            </div>

            <hr />
            <AddReview lectureId={lectureId} />

        </div>
      )
    }
}
