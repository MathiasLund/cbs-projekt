import React, { Component } from 'react'

export default class Table extends Component {
    render() {
      const {courses} = this.props;
        return (
          <div className="container content-sm">

            <div className="headline"><h2>Fag</h2></div>
              <div className="row margin-bottom-20">

                {courses.map(course => {
                    return(
                      <div className="col-md-3 col-sm-6">
                        <div className="thumbnails thumbnail-style thumbnail-kenburn">
                          <div className="caption">
                            <h3><a className="hover-effect" href={"/lectures/" + course.displaytext}>{course.code}</a></h3>
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
