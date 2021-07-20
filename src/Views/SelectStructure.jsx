import React, { Component } from 'react'
import { CardWithImage } from '../components/Cards'
import { createKey } from '../config/functions'
import structureImageDefault from './../assets/images/app/scructures/default.jpg'

export default class SelectStructure extends Component {
  constructor(props) {
    super(props)
    this.build = this.build.bind(this)
    this.state = {
      sctructures: [
        {
          image: structureImageDefault,
          name: "Boutique de kotto",
          link: createKey(30)
        },
        {
          image: structureImageDefault,
          name: "Boutique de kotto",
          link: createKey(30)
        },
        {
          image: structureImageDefault,
          name: "Boutique de kotto",
          link: createKey(30)
        }
      ]
    }
  }
  
  build () {
    return this.state.sctructures.map((sctructure, k) => {
      return <div className="col-sm-4 mb-4" key={k}>
        <CardWithImage imageSrc={sctructure.image} buttons={[
          {
            type: "link",
            to: `/watapp/dashboard/${sctructure.link}`,
            name: "Entrer dans la struture"
          }
          ]}>
          <h1>{sctructure.name}</h1>
        </CardWithImage>
      </div>
    })
  }
  render() {
    return (
      <div className="login-view">
        <div className="container-fluid">
          <div className="row">
            {this.build()}
          </div>
        </div>
      </div>
    )
  }
}

