import React, { Component } from 'react'
import { createKey } from '../config/functions';
import { Card, CardBoxForm } from "./Cards";
import { ButtonCloseModal } from './Forms/Buttons';
import ReactLoading from "react-loading";
export class CustomAlert extends Component {
  
  render () {
    const token = createKey(30);
    return <Modal id={this.props.id + " " + token} closeLabel="Ok">
      {this.props.children}
    </Modal>
  }
}

export class Modal extends Component {
  render() {
    let buttons = [<ButtonCloseModal modalId={this.props.id} name={this.props.closeLabel ? this.props.closeLabel : "Fermer"} />]
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
export class ModalForm extends Component {
  handdleSubmit () {
    this.props.onSubmit();
  }
  render() {
    let buttons = [<ButtonCloseModal modalId={this.props.id} name={this.props.closeLabel ? this.props.closeLabel : "Fermer"} />]
    if (this.props.buttons) {
      this.props.buttons.forEach(btn => {
        buttons.push(btn);
      });
    }
    return (
      <div className="modal-bg" id={this.props.id ? this.props.id : "modal-noname"}>
        <div className="modal-box">
          <div className="modal-load">
            <ReactLoading type="cylon" color="#6d63ffff" />
          </div>
          <CardBoxForm title={this.props.title} callback={this.handdleSubmit.bind(this)} buttons={buttons}>
            {this.props.children}
          </CardBoxForm>
        </div>
      </div>
    )
  }
}