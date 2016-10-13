import React, { Component } from 'react'

export default class Table extends Component {
    render() {
      const {artists} = this.props;
        return (
          <table className="table">
            <tbody>
                <tr>
                  <td>13/07/2016</td>
                  <td>Distribuerede systemer</td>
                </tr>
            </tbody>
          </table>
        )
    }
}
