import React, { Component } from 'react'
import Form from './Forms/Form'
import { Button } from '../components/Forms/Buttons.jsx'

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-head">
          <h1>{this.props.title}</h1>
        </div>
        <div className="card-content">
          {this.props.children}
        </div>
        {
          this.props.buttons !== undefined ? <div className="card-footer">
          {this.props.buttons.map((button, k) => <>
            {button.type === "link" ? <Button type={button.type} key={k} name={button.name} to={button.to} /> : <Button type={button.type} key={k} name={button.name} />}
          </>)}
        </div> : ""
        }
        
      </div>
    )
  }
}

export class CardWithoutFooter extends Component {
  render() {
    return (
      <Card title={this.props.title}>
        {this.props.children}
      </Card>
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
            {this.props.buttons.map((button, k) => <Button key={k} type={button.type} name={button.name} />)}
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
