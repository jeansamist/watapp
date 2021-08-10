import React, { Component } from 'react'
import { CardWithImage } from '../components/Cards'
import { Button } from '../components/Forms/Buttons'
import { createKey } from '../config/functions'
import structureImageDefault from './../assets/images/app/structures/default.jpg'
import * as Config from "./../config/Variables"

export default class SelectStructure extends Component {
  constructor(props) {
    super(props)
    this.build = this.build.bind(this)
    this.state = {
      structures: [
        {
          image: structureImageDefault,
          name: "Loading...",
          link: "#no"
        },
      ]
    }
  }

  componentDidMount () {
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
      }
    })
  }
  
  build () {
    return this.state.structures.map((structure, k) => {
      return <div className="s col-sm-4 mb-4" key={k}>
        <CardWithImage imageSrc={structure.image} key={k} buttons={[<Button type="link" to={"/watapp/dashboard/" + structure.link} name="Entrer dans la struture" />]}>
          <h1>{structure.name}</h1>
        </CardWithImage>
      </div>
    })
  }
  render() {
    return (
      <div className="structures-view">
        <div className="container-fluid">
          <div className="row">
            {this.build()}
          </div>
        </div>
      </div>
    )
  }
}

