import React, { Component } from 'react'
import { BellFill } from "react-bootstrap-icons";

export default class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <h1 className="topbar-brand">
          {this.props.ico}
          {this.props.brand}
        </h1>
        <div className="topbar-tools">
          <div className="custom-btn active">
            <div className="custom-btn-ico">
              <BellFill />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
