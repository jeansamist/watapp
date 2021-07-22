import React, { Component } from 'react'

export default class TitleToolsBar extends Component {
  render() {
    return (
      <div className="title-tools-bar">
        <div className="title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="tools">
          {this.props.children}
        </div>
      </div>
    )
  }
}
