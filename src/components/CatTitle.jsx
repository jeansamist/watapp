import React from "react";

export default class CatTitle extends React.Component {
  render() {
    return (
      <div className="cat-title">
        <h3>{this.props.children}</h3>
      </div>
    )
  }
}