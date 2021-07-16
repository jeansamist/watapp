import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Button extends Component {
  render() {
    return (
      <>
        {this.props.type === "link" ? <Link to={this.props.to} className="btn">{this.props.name}</Link> : <button type={this.props.type}>{this.props.name}</button>}
      </>
    )
  }
}


export class ButtonLink extends Component {
  render() {
    return (
      <Button type="link" name={this.props.name} to={this.props.to} />
    )
  }
}

export class ButtonReloaderLink extends Component {
  render() {
    return (
      <a href={this.props.to} className="btn">{this.props.name}</a>
    )
  }
}