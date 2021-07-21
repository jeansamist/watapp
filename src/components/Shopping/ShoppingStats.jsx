import React, { Component } from 'react'
import { BagFill, CurrencyEuro } from 'react-bootstrap-icons';
import StatCard from '../StatCard.jsx';

export default class Stats extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: [
         {
           name: "Nombres de ventens",
           ico: <BagFill />,
           newData: Math.random() * 100,
           oldData: Math.random() * 100
         },
         {
           name: "Argent en caisse",
           ico: <CurrencyEuro />,
           newData: Math.random() * 100,
           oldData: Math.random() * 100
         }
       ]
    }
  }
  
  render() {
    return (
      <div className="stats col-md-5 row">
        {this.state.data.map((stat, k) => <div key={k} className="col-md-12"><StatCard name={stat.name} ico={stat.ico} newData={stat.newData} oldData={stat.oldData} /></div>)}
      </div>
    )
    
  }
}
