import React, { Component } from 'react'
import { CardWithImage } from '../components/Cards'
import { Button } from '../components/Forms/Buttons'
import { CardBoxForm } from '../components/Cards'
// import { Button, ButtonReloaderLink } from '../components/Forms/Buttons'
import structureImageDefault from './../assets/images/app/structures/default.jpg'
import * as Config from "./../config/Variables"
import Field from "./../components/Forms/Field.jsx"

export default class SelectStructure extends Component {
  constructor(props) {
    super(props)
    this.build = this.build.bind(this)
    this.state = {
      err: false,
      structures: false,
      link: "stock"
    }
  }

  componentDidMount () {  
    fetch(`${Config.server}services/isAdmin.php?token=${localStorage.getItem("watapp_user")}`)
    .then((response) => response.json())
    .then((result) => {
      if (result.response_data) {
        this.setState({ link: "dashboard" })
      }
    })
    fetch(`${Config.server}services/select_structure.php?cookie_token=${localStorage.getItem("watapp_user")}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      if (result.response_data) {
        this.setState({
          structures: result.response_data.map((structure) => {
            return {
              image: structureImageDefault,
              name: structure.name,
              link: structure.token
            }
          })
        })
      } else {
        this.setState({
          structures: []
        })
      }
    })
  }

  handdleSubmit () {
    let inputs = document.querySelectorAll(".login .input-field")
    console.log(inputs);
    let err = false
    let data = new FormData()
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.value !== "") {
        data.append(input.getAttribute("name"), input.value)
      } else {
        err = true
        break
      }
    }
    if (!err) {
      inputs.forEach(input => {
        let value = input.value
        let label = input.getAttribute("name")
        data.append(label, value)
      });
      data.append("workers", '["1"]')
      fetch(`${Config.server}services/add-structure.php`, {
        method: "POST",
        body: data,
        mode: "cors"
      })
      .then(response => response.json())
      .then(result => {
        if (result.response_data) {
          document.location.reload()
        } else {
          this.setState({ err: result.response_message });
        }
      })
    } else {
      this.setState({ err: "Veuiller completer tous les champs" });
    }
  }
  
  build () {
    if (this.state.structures && this.state.structures.length !== 0) {
      return <div className="container-fluid">
      <div className="row">
        {this.state.structures.map((structure, k) => {
          return <div className="s col-sm-4 mb-4" key={k}>
            <CardWithImage imageSrc={structure.image} key={k} buttons={[<Button type="link" to={"/watapp/" + this.state.link + "/" + structure.link} name="Entrer dans la struture" />]}>
              <h1>{structure.name}</h1>
            </CardWithImage>
          </div>
        })}
      </div>
    </div>
    } else if (this.state.structures && this.state.structures.length === 0) {
      return <div className="login-view login">
        <CardBoxForm title="Créer votre première structure" callback={this.handdleSubmit.bind(this)} buttons={[<Button type="submit" name="Créer la structures" />]}>
          <Field label="Nom de la structure" type="text" name="name"/>
          <Field label="Localisation" type="text" name="localisation" />
          {
            this.state.err ? <div className="error">{this.state.err}</div> : ""
          }
        </CardBoxForm>
      </div>
    }
  }
  render() {
    return (
      <div className="structures-view">
          {this.build()}
      </div>
    )
  }
}

