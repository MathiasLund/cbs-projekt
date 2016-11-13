import React, { Component } from 'react'

export default class LectureBox extends Component {
    render() {
      const {lectures} = this.props;
        return (
          <div className="container content-sm">

            <div className="headline"><h2>Lectures</h2></div>
              <div className="row margin-bottom-20">

                {lectures.map(lecture => {
                    return(
                      <div className="col-md-3 col-sm-6">
                        <div className="thumbnails thumbnail-style thumbnail-kenburn">
                          <div className="caption">
                            <h3><a className="hover-effect" href={"/reviews/" + lecture.startDate + "/" + lecture.id}>{lecture.startDate}</a></h3>
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
