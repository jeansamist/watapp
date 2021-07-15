import React, { Component } from 'react'
import Field from '../components/Forms/Field'

export default class Login extends Component {
  render() {
    return (
      <div className="login-view">
        <div className="card login-card">
          <div className="card-head">
            <h1>Login</h1>
          </div>
          <div className="card-content">
            <Field label="Pseudo" type="text" />
            <Field label="Mot de passe" type="password" />
          </div>
          <div className="card-footer">
            <button>Send</button>
          </div>
        </div>
      </div>
    )
  }
}
