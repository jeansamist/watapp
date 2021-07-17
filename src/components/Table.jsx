import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.thead.map((th, k) => <th key={k}>{th}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            this.props.tbody.map((row, k) => {
              return <tr key={k}>
                {
                  row.map((td, k) => <td key={k}>{td}</td>)
                }
              </tr>
            })
          }
        </tbody>
      </table>
    )
  }
}
