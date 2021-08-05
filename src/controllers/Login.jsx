import React, { Component } from 'react'
// import { Redirect, Link } from 'react-router-dom'
import { CardBoxForm } from '../components/Cards'
import { Button, ButtonReloaderLink } from '../components/Forms/Buttons'
import Field from '../components/Forms/Field'
import * as Config from "./../config/Variables"


export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      alert: null,
      login: false,
      err: false
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
        toShare.push(`${input.getAttribute("name").toLowerCase().replace(",", "").replace(",", "")}=${value}`)
      } else {
        toShare = [];
        this.setState({alert: {type: "danger", msg: "Veiller completer tous les champs", other: ""}})
        error = true
      }
    })
    if (!error) {
      fetch(`${Config.server}services/connect_user.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `${toShare[0]}&${toShare[1]}`
      })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        if (!result.response_data.isLogin) {
          this.setState({ err: result.response_message });
        } else {
          localStorage.setItem("watapp_user", result.response_data.token)
          this.setState({login: true});
        }
      })
    }
    // <Redirect exact from="/login" to={{pathname: "../"}} />
  }
  render() {
    if (!this.state.login) {
      return (
        <div className="login-view login">
          <CardBoxForm title="Login" callback={this.handdleSubmit.bind(this)} buttons={[<Button type="submit" name="Se connecter" />]}>
            <Field label="Pseudo" type="text" />
            <Field label="Mot de passe" type="password" />
            {
              this.state.err ? <div className="error">{this.state.err}</div> : ""
            }
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
