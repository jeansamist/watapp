import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { CardBoxForm } from '../components/Cards'
import Field from '../components/Forms/Field'


export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      alert: null
    }
  }

  componentDidUpdate () {
    console.log(this.state);
  }
  
  handdleSubmit () {
    let login = document.querySelector(".login")
    let inputs = login.querySelectorAll('input');
    let toShare = []
    let error = false;
    inputs.forEach(input => {
      let value = input.value;
      if (value !== "") {
        toShare.push({key: input.getAttribute("name"), value: value})
      } else {
        toShare = [];
        this.setState({alert: {type: "danger", msg: "Veiller completer tous les champs", other: ""}})
        error = true
      }
    })
  }
  render() {
    return (
      <div className="login-view login">
        <CardBoxForm title="Login" callback={this.handdleSubmit.bind(this)} buttons={["login"]}>
          <Field label="Pseudo" type="text" />
          <Field label="Mot de passe" type="password" />
        </CardBoxForm>
      </div>
    )
  }
}
