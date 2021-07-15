import React, { Component } from 'react'

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="inner">
          {this.props.children}
        </div>
      </div>
    )
  }
}
