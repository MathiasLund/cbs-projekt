import React, { Component } from 'react'

export default class Table extends Component {
    render() {
      const {artists} = this.props;
        return (
          <div className="container content-sm">

            <div className="headline"><h2>Forelæsninger</h2></div>
            <div className="row margin-bottom-20">
              <div className="col-md-3 col-sm-6">
                <div className="thumbnails thumbnail-style thumbnail-kenburn">
                  <div className="thumbnail-img">
                    <div className="overflow-hidden">
                      <img className="img-responsive" src="assets/img/main/img1.jpg" alt="" />
                    </div>
                    <a className="btn-more hover-effect" href="#">Rate & kommenter</a>
                  </div>
                  <div className="caption">
                    <h3><a className="hover-effect" href="#">Distribuerede Systemer</a></h3>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, justo sit amet risus etiam porta sem.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="thumbnails thumbnail-style thumbnail-kenburn">
                  <div className="thumbnail-img">
                    <div className="overflow-hidden">
                      <img className="img-responsive" src="assets/img/main/img12.jpg" alt="" />
                    </div>
                  </div>
                  <div className="caption">
                    <h3><a className="hover-effect" href="#">IT-forandringsledelse</a></h3>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, justo sit amet risus etiam porta sem.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )
    }
}
