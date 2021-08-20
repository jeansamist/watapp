import React, { Component } from 'react'
import Field from '../Forms/Field'
// import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import { Button } from '../Forms/Buttons';
import { createKey } from '../../config/functions';
import { CardSimple } from '../Cards';
import { LockFill } from 'react-bootstrap-icons';
import * as Config from "./../../config/Variables"
export default class CreateUser extends Component {
  state = {
    err: false,
    pass: createKey(1, null, "upper") + createKey(5, "int", "upper"),
    role: false,
    structures: [],
    structure: false
  }
  onChange (e, value) {
    this.setState({ pass: value.toLowerCase() + "." + createKey(1, 'text', "upper") + createKey(2, "int", "upper") })
  }
  componentDidMount () {
    fetch(`${Config.server}services/req_structures.php`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.response_data) {
        this.setState({
          structures: result.response_data.map((e) => {
            return {
              value: e.token,
              label: e.name
            }
          })
        })
      }
    })
  }
  handdleSubmit () {
    let form = document.querySelector(".createUserForm")
    let inputs = form.querySelectorAll('.input-field')
    let err = false;
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.value === "") {
        err = true;
        this.setState({ err: "veillez compléter tous les champs" })
        break;
      }
    }
    if (!err) {
      if (this.state.role) {
        let data = new FormData();
        inputs.forEach(input => {
          data.append(input.name, input.value)
        })
        data.append("role", this.state.role)
        data.append("password", this.state.pass)
        if (this.state.structure) {
          data.append("structure", JSON.stringify([this.state.structure]))
        }
        if (this.state.role) {  
          fetch(`${Config.server}services/create_user.php`, {
            method: "POST",
            body: data,
            mode: "cors"
          })
          .then(response => response.json())
          .then(result => {
            if (result.response_data) {
              inputs.forEach(input => {
                input.value = "";
              })
              this.setState({ role: false, structure: false })
            } else {
              this.setState({ err: result.response_message })
            }
          })
        } else {
          this.setState({ err: "veillez selectioner un role" })
        }
      } else {
        this.setState({ err: "veillez compléter tous les champs" })
      }
    }
  }
  render() {
    const selectroleshandleChange = (val) => {
      if (val.value === "worker") {
        this.setState({ role: val.value })
      } else {
        this.setState({ role: val.value, structure: false })
      }
    }
    const selectStructurehandleChange = (val) => {
      this.setState({ structure: val.value })
    }
    return (
      <div className="createUserForm">
        <h1 className="mb">Créer un utilisateur</h1>
        <Field label="Nom et prenom de l'utilisateur" name="full_name" />
        <div className="field">
          <div className="label">Selectioner le role de l'utilisateur</div>
          <Select
            className="select"
            onChange={selectroleshandleChange}
            name="colors"
            options={[
              { value: 'worker', label: 'Emploié'},
              { value: 'admin', label: 'Administrateur'}
            ]}
          />
        </div>
        {this.state.role === "worker" ? <div className="field">
          <div className="label">Selectioner la structure</div>
          <Select
            className="select"
            onChange={selectStructurehandleChange}
            name="colors"
            options={this.state.structures}
          />
        </div> : ""}
        
        <Field label="E-mail de l'utilisateur" name="mail" />
        <Field label="Numéro de téléphone de l'utilisateur" name="tel" type="tel" />
        <Field label="Identifiant de l'utilisateur" name="pseudo" onChange={this.onChange.bind(this)} />
        <div className="field">
          <div className="label">Mot de passe de l'utilisateur</div>
          <CardSimple><LockFill /> <span className="password">{this.state.pass}</span></CardSimple>
        </div>
        <Button onClick={this.handdleSubmit.bind(this)} type="button" name="Valider la création" />
        {
          this.state.err ? <div className="error">{this.state.err}</div> : ""
        }
      </div>
    )
  }
}
