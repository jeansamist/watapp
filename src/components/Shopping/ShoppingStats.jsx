import React, { Component } from 'react'
import { BagFill, CurrencyEuro } from 'react-bootstrap-icons';
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
                  name: "Nombres de ventes",
                  ico: <BagFill />,
                  newData: result.response_data[0]
                },
                {
                  name: "Argent en caisse",
                  ico: <CurrencyEuro />,
                  newData: result.response_data[1]
                }
              ]
            })
          }
        })
  }
  render() {
    return (
      <div className="stats col-md-6 row">
        {this.state.data.map((stat, k) => <div key={k} className="col-md-12"><StatCard name={stat.name} ico={stat.ico} newData={stat.newData} oldData={stat.oldData} /></div>)}
      </div>
    )
    
  }
}
