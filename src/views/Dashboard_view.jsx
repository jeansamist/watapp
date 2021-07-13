import React from "react";
import {CurrencyDollar, BagFill, PeopleFill, Grid1x2Fill} from 'react-bootstrap-icons';

// Components
import Chart from './../components/Chart.jsx'
import StatCard from './../components/StatCard.jsx'
import CatTitle from './../components/CatTitle.jsx'
import Topbar from './../components/Topbar.jsx'

export default class Dashboard_view extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      chartData: {}
    }
  }
  componentDidMount(){

  }
  render () {
    return <div className="dashboard view">
      <div className="head">
        <Topbar brand="Dashboard" ico={<Grid1x2Fill />} />
        <div className="statCard-container contain container-fluid">
          <div className="row">
            <StatCard title="Caisse" ico={<CurrencyDollar />} data={10000} />
            <StatCard title="Ventes" ico={<BagFill />} data={23} />
            <StatCard title="Clients" ico={<PeopleFill />} data={22} />
            <StatCard title="ksds" ico={<BagFill />} data={10} />
          </div>
        </div>
      </div>
      <div className="contain">
        <div className="chartPresent container-fluid">
          <CatTitle>Détail de la caisse</CatTitle>
          <div className="row">
            <div className="card col-sm-12 col-md-6">
              <Chart type="line" data={{title: "Caisse depuis le début de la semaine", labels: ["Lundi", "Mardi", "Mercredi", "< Jeudi >"], data: [78200,33000,56500,75000]}} />
            </div>
            <div className="card col-sm-12 col-md-6">
              <Chart type="bar" data={{title: "Quelques montants des derniers achats d'aujourd'hui", labels: ["234", "235", "236", "237", "238"], data: [2245,8339,5564,6674,3451]}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}