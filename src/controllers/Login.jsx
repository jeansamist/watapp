import React, { Component } from 'react'
// import { Redirect, Link } from 'react-router-dom'
import { CardBoxForm } from '../components/Cards'
import { ButtonReloaderLink } from '../components/Forms/Buttons'
import Field from '../components/Forms/Field'



export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      alert: null,
      login: false
    }
  }

  componentDidUpdate () {
    if (this.state.login) {
      localStorage.setItem('isLogin', true);
    }
  }

  componentDidMount () {
    this.setState({login: this.props.isLogin})
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
    if (!error) {
      this.setState({login: true})
    }
    // <Redirect exact from="/login" to={{pathname: "../"}} />
  }
  render() {
    if (!this.state.login) {
      return (
        <div className="login-view login">
          <CardBoxForm title="Login" callback={this.handdleSubmit.bind(this)} buttons={[
            {
              type: "submit",
              name: "Login"
            }
          ]}>
            <Field label="Pseudo" type="text" />
            <Field label="Mot de passe" type="password" />
          </CardBoxForm>
        </div>
      )
    } else {
      return <div className="login-view">
        <div className="card login-card">
          <div className="card-head">
            <h1>WATTAP LOGIN SECURE</h1>
          </div>
          <div className="card-content">
            Vous êtes Connecter
          </div>
          <div className="card-footer">
            <ButtonReloaderLink to="/" name="Aller à l'accueil" />
          </div>
        </div>
      </div>
    }
  }
}
