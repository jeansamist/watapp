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
  handdleClick (event) {
    event.preventDefault();
    try {
      this.props.onClick(event)
      openModal(this.props.modalId)
    } catch (error) {
      // (error);
    }
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            {this.props.tdata.thead.map((th, key) => {
              return <th key={key}>
                {th}
              </th>
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.tdata.tbody.map((tr, key) => {
            return <tr key={key} className="tbl-modal">
              <td>{key + 1}<Link to={"#" + tr.id} data-id={tr.id} className="faker" onClick={this.handdleClick.bind(this)}></Link></td>
              {
                tr.data.map((d, k) => <td key={k}>{d}</td>)
              }
            </tr>
          })}
        </tbody>
      </table>
    )
  }
}

/*

  Table {
    tableTitle => "String",
    tableData => {
      tableHead => ["String"],
      tableBody => [{
        td => {
          id => "any",
          data => ["any"]
        }
      }]
    }
  }

*/