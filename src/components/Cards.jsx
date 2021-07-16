import React, { Component } from 'react'
import Form from './Forms/Form'
export class Card extends Component {
  render() {
    return (
      <div>
        Card
      </div>
    )
  }
}

export class CardBoxForm extends Component {
  render() {
    return (
      <div className="card login-card">
        <div className="card-head">
          <h1>{this.props.title}</h1>
        </div>
        <Form callback={this.props.callback}>
          <div className="card-content">
            {this.props.children}
          </div>
          <div className="card-footer">
            {this.props.buttons.map((button, k) => <button key={k}>{button}</button>)}
          </div>
        </Form>
      </div>
    )
  }
}

export class CardUser extends Component {
  render() {
    return (
      <div>
        Card User
      </div>
    )
  }
}
