import React, { Component } from 'react'
import ReactLoading from "react-loading";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader-contain">
        <div className="loader">
          <ReactLoading type="cylon" color="#fff" />
        </div>
      </div>
    )
  }
}
