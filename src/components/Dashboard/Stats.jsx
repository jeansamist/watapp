import React, { Component } from 'react'
import { BagFill, CurrencyEuro, PeopleFill } from 'react-bootstrap-icons';
import StatCard from '../StatCard.jsx';

export default class Stats extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: [
         {
           name: "Nombres d'achats",
           ico: <BagFill />,
           newData: Math.random() * 100,
           oldData: Math.random() * 100
         },
         {
           name: "Montant en caisse",
           ico: <CurrencyEuro />,
           newData: Math.random() * 100,
           oldData: Math.random() * 100
         },
         {
           name: "Nombres de visites",
           ico: <PeopleFill />,
           newData: Math.random() * 100,
           oldData: Math.random() * 100
         },
         {
           name: "AZERT",
           ico: <PeopleFill />,
           newData: Math.random() * 100,
           oldData: Math.random() * 100
         }
       ]
    }
  }
  
  render() {
    return (
      <div className="stats col-md-7 row">
        {this.state.data.map((stat, k) => <div key={k} className="col-md-6 col-sm-6 col-12"><StatCard name={stat.name} ico={stat.ico} newData={stat.newData} oldData={stat.oldData} /></div>)}
      </div>
    )
    
  }
}
