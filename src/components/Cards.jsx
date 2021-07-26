import React, { Component } from 'react'
import Form from './Forms/Form'
// import { Button } from '../components/Forms/Buttons.jsx'

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-head">
          <h1>{this.props.title}</h1>
          {this.props.tools ? <div className="card-tools">{this.props.tools}</div> : ""}
        </div>
        <div className="card-content">
          {this.props.children}
        </div>
        {
          this.props.buttons !== undefined ? <div className="card-footer">
            {this.props.buttons}
          </div> : ""
        }
        
      </div>
    )
  }
}

export class CardSimple extends Component {
  render() {
    return (
      <div className="card-simple">
        {this.props.children}
      </div>
    )
  }
}

export class CardWithImage extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.imageSrc} alt="" />
        </div>
        <div className="card-content">
          {this.props.children}
        </div>
        {
          this.props.buttons !== undefined ? <div className="card-footer">
            {this.props.buttons}
          </div> : ""
        }
      </div>
    )
  }
}

export class CardWithoutFooter extends Component {
  render() {
    return (
      <Card title={this.props.title} tools={this.props.tools ? this.props.tools : ""}>
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
            {this.props.buttons}
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
