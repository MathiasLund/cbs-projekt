import React, { Component } from 'react'

export default class ReviewBox extends Component {
    render() {
      const {reviews} = this.props;
        return (
          <div className="container content-sm">

            <div className="headline"><h2>Reviews</h2> <small>Course</small></div>
              <div className="row margin-bottom-20">

                {reviews.map(review => {
                    return(
                      <div className="col-md-3 col-sm-6">
                        <div className="thumbnails thumbnail-style thumbnail-kenburn">
                          <div className="caption">
                            <h3><a className="hover-effect" href="#">Her</a></h3>
                          </div>
                        </div>
                      </div>
                    )
                })}

              </div>
          </div>
        )
    }
}
