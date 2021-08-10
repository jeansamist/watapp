import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
    }
    this.handdleSubmit = this.handdleSubmit.bind(this)
  }
  
  handdleSubmit (event) {
    event.preventDefault();
    if (this.props.callback !== undefined) {
      this.props.callback(event)
    } else {
      // ('No callback');
    }
  }
  render() {
    return (
      <form methode="post" onSubmit={this.handdleSubmit}>
        {this.props.children}
      </form>
    )
  }
}
