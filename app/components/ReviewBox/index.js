import React, { Component } from 'react'
import AddReview from '../AddReview'

export default class ReviewBox extends Component {
    render() {
      const {reviews, date, lectureId, userId, type} = this.props;

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

          var deleteBtn;
          if(type == "admin") {
            deleteBtn = <a role="button" className="btn btn-danger" href={"/deleteReview/" + review.id}>Slet</a>
          } else if(type == "student") {
            if(review.userId == userId) {
              deleteBtn = <a role="button" className="btn btn-danger" href={"/deleteReview/" + review.id}>Slet</a>
            } else {
              deleteBtn = <a role="button" className="btn btn-warning" href="#">Kan ikke slette</a>
            }
          } else {
            deleteBtn = <a role="button" className="btn btn-warning" href="#">Kan ikke slette</a>
          }

          return(
            <div className="col-md-3 col-sm-6">
              <div className="thumbnails thumbnail-style thumbnail-kenburn">
                <div className="caption">
                  <h3>{review.comment}</h3> <br />
                  <p>Rating: {review.rating}</p>
                    {deleteBtn}
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
