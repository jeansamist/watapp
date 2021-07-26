import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { openModal } from '../config/functions'
export class Table extends Component {
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

export class TableOpenModal extends Component {
  handdClick () {openModal(this.props.modalId)}
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>N</th>
            {this.props.thead.map((th, k) => <th key={k}>{th}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            this.props.tbody.map((row, k) => {
              return <tr key={k} className="tbl-modal" onClick={this.handdClick.bind(this)}>
                <td>{k + 1 + row[0]} <Link to={"#" + row[0]} className="faker"></Link></td>
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