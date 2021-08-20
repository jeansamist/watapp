import React, { Component } from 'react'
import { BagFill, CurrencyEuro, PeopleFill } from 'react-bootstrap-icons';
import StatCard from '../StatCard.jsx';
import * as Config from "./../../config/Variables"

export default class Stats extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: [
         {
           name: "Loading...",
           ico: <BagFill />,
           newData: 0,
         },
         {
           name: "Loading...",
           ico: <CurrencyEuro />,
           newData: 0,
         },
         {
           name: "Loading...",
           ico: <PeopleFill />,
           newData: 0,
         }
       ]
    }
  }
  componentDidMount () {
    fetch(`${Config.server}services/dashboard-stats.php?structure=${this.props.structure}`)
      .then(response => response.json())
        .then(result => {
          if (result.response_data) {
            this.setState({
              data: [
                {
                  name: "Nombres d'achats",
                  ico: <BagFill />,
                  newData: result.response_data[0]
                },
                {
                  name: "Montant gagnez aujourd'hui",
                  ico: <CurrencyEuro />,
                  newData: result.response_data[1]
                },
                {
                  name: "Nombres de visites",
                  ico: <PeopleFill />,
                  newData: result.response_data[2]
                }
              ]
            })
          }
        })
  }
  render() {
    return (
      <div className="stats col-md-12 row">
        {this.state.data.map((stat, k) => <div key={k} className="col-md-4 col-sm-6 col-12"><StatCard name={stat.name} ico={stat.ico} newData={stat.newData} oldData={stat.oldData} /></div>)}
      </div>
    )
    
  }
}
