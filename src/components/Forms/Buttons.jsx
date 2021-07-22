import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { openModal, closeModal } from '../../config/functions'

export class Button extends Component {
  constructor(props) {
    super(props)
    this.handdClick = this.handdClick.bind(this)
  }
  
  handdClick () {
    if (this.props.onClick) {
      this.props.onClick()
    } else {
      return;
    }
  }
  render() {
    let toReturn;
    if (this.props.type === 'link') {
      toReturn = <Link to={this.props.to} onClick={this.handdClick}  className="btn">
        {this.props.name}
      </Link>
    } else {
      toReturn = <button onClick={this.handdClick} type={this.props.type}>
        {this.props.name}
      </button>
    }
    return toReturn;
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

export class ButtonOpenModal extends Component {
  handdClick () {openModal(this.props.modalId)}
  render() {
    return (
      <Button type="button" name={this.props.name} onClick={this.handdClick.bind(this)} />
    )
  }
}

export class ButtonCloseModal extends Component {
  handdClick () {closeModal(this.props.modalId)}
  render() {
    return (
      <Button type="button" name={this.props.name} onClick={this.handdClick.bind(this)} />
    )
  }
}