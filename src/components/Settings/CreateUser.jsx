import React, { Component } from 'react'
import Field from '../Forms/Field'
// import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import { Button } from '../Forms/Buttons';
import { createKey } from '../../config/functions';
import { CardSimple } from '../Cards';
import { LockFill } from 'react-bootstrap-icons';
export default class CreateUser extends Component {
  state = {
    pass: createKey(1, null, "upper") + createKey(5, "int", "upper")
  }
  onChange (e, value) {
    this.setState({ pass: value.toLowerCase() + "." + createKey(1, 'text', "upper") + createKey(5, "int", "upper") })
  }
  render() {
    return (
      <div>
        <h1 className="mb">Créer un utilisateur</h1>
        <Field label="Nom et prenom de l'utilisateur" />
        <div className="field">
          <div className="label">Selectioner le role de l'utilisateur</div>
          <Select
            className="select"
            // onChange={selectClientshandleChange}
            name="colors"
            options={[
              { value: 'worker', label: 'Emploié'},
              { value: 'admin', label: 'Administrateur'}
            ]}
          />
        </div>
        <Field label="E-mail de l'utilisateur" />
        <Field label="Numéro de téléphone de l'utilisateur" type="tel" />
        <Field label="Identifiant de l'utilisateur" onChange={this.onChange.bind(this)} />
        <div className="field">
          <div className="label">Mot de passe de l'utilisateur</div>
          <CardSimple><LockFill /> {this.state.pass}</CardSimple>
        </div>
        <Button type="button" name="Valider la création" />
      </div>
    )
  }
}
