import React, { Component } from 'react'

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>{this.props.title}</h1>
        <p>
          {this.props.children}
        </p>
      </div>
    )
  }
}
