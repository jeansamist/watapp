import React, { Component } from 'react'
import StatCard from './../StatCard.jsx'
import {CurrencyDollar, BagFill, PeopleFill} from 'react-bootstrap-icons';

export class DashboardStats extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentWillMount () {
    fetch("http://localhost:80/api/react/watapp-fake-api/req.php?req=getDashboard_stats")
      .then((response) => response.json())
      .then((result) => {
        this.setState({data : result.data})
        console.log(this.state);
      })
  }
  render() {
    return (
      <div className="row">
        <StatCard title="Caisse" ico={<CurrencyDollar />} data={10000} />
        <StatCard title="Ventes" ico={<BagFill />} data={23} />
        <StatCard title="Clients" ico={<PeopleFill />} data={22} />
        <StatCard title="ksds" ico={<BagFill />} data={10} />
      </div>
    )
  }
}

export default DashboardStats
