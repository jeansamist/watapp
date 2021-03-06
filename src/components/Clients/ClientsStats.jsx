import React, { Component } from 'react'
import { PeopleFill } from 'react-bootstrap-icons';
import StatCard from '../StatCard.jsx';
export default class ClientsStats extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: [
         {
           name: "Clients Totaux",
           ico: <PeopleFill />,
           newData: Math.random() * 100,
           oldData: Math.random() * 100
         },
         {
           name: "Clients du jour",
           ico: <PeopleFill />,
           newData: Math.random() * 100,
           oldData: Math.random() * 100
         }
       ]
    }
  }
  
  render() {
    return (
      <div className="stats col-md-12 row">
        {this.state.data.map((stat, k) => <div key={k} className="col-md-6 col-sm-12"><StatCard name={stat.name} ico={stat.ico} newData={stat.newData} oldData={stat.oldData} /></div>)}
      </div>
    )
    
  }
}
