import React, { Component } from 'react'
import { PeopleFill } from 'react-bootstrap-icons';
import StatCard from '../StatCard.jsx';
import * as Config from "./../../config/Variables"
export default class ClientsStats extends Component {

  state = {
    data: [
      {
        name: "Loading...",
        ico: <PeopleFill />,
        newData: 0,
        oldData: Math.random() * 100
      }
     //  {
     //    name: "Clients du jour",
     //    ico: <PeopleFill />,
     //    newData: Math.random() * 100,
     //    oldData: Math.random() * 100
     //  }
    ]
 }

  componentDidMount(){
    fetch(`${Config.server}services/clients_count.php`)
    .then((response) => {
      if (response) {
        return response.json()
      }
      return false;
    })
    .then((result) => {
      if (result.response_data) {
        // (result);
        this.setState({ data: [
          {
            name: "Clients Totaux",
            ico: <PeopleFill />,
            newData: result.response_data,
            oldData: Math.random() * 100
          }
        ] });
      } else {
        // (result.response_message);
      }
    })
  }
  
  render() {
    return (
      <div className="stats col-md-12 row">
        {/* {this.state.data} */}
        {this.state.data.map((stat, k) => <div key={k} className="col-md-6 col-sm-12"><StatCard name={stat.name} ico={stat.ico} newData={stat.newData} oldData={stat.oldData} /></div>)}
      </div>
    )
    
  }
}
