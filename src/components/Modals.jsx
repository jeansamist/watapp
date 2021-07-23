import React, { Component } from 'react'
import { Card } from "./Cards";
import { ButtonCloseModal } from './Forms/Buttons';

export class Modal extends Component {
  render() {
    let buttons = [<ButtonCloseModal modalId={this.props.id} name="Fermer" />]
    if (this.props.buttons) {
      this.props.buttons.forEach(btn => {
        buttons.push(btn);
      });
    }
    return (
      <div className="modal-bg" id={this.props.id ? this.props.id : "modal-noname"}>
        <div className="modal-box">
          <Card title={this.props.title} buttons={buttons}>
            {this.props.children}
          </Card>
        </div>
      </div>
    )
  }
}
