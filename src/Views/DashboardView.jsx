import React, { Component } from 'react'
import { HouseDoorFill } from "react-bootstrap-icons";

// Components
import Topbar from "./../components/Topbar.jsx";
import Stats from '../components/Dashboard/Stats.jsx';
import { ChartBar } from '../components/Chart.jsx';
import { Button } from '../components/Forms/Buttons'
import {Table} from '../components/Tables.jsx';
import {CardWithoutFooter, CardSimple} from '../components/Cards.jsx';
import Loader from '../components/Loader.jsx';

export default class DashboardView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      structure: this.props.match.params.structure
    }

  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: true })
    }, 1000);
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="view dashboard-view">
          <Topbar brand="Dashboard" ico={<HouseDoorFill />} />
          <div className="container-fluid">
            <section className="first-section">
              <div className="row">
                <Stats />
              </div>
            </section>
            <section className="first-section">
              <div className="row">
                  <div className="col-md-4">
                    <CardSimple>
                      <ChartBar data={{title: "Ventes depuis le début de la semaine", labels: ["Lundi", "Mardi", "Mercredi", "< Jeudi >", "Vendredi", "Samedi", 'Dimanche'], data: [78, 93, 66, 75]}} />
                    </CardSimple>
                  </div>
                  <div className="col-md-4">
                    <CardSimple>
                      <ChartBar data={{title: "Ventes depuis le début de la semaine", labels: ["Lundi", "Mardi", "Mercredi", "< Jeudi >", "Vendredi", "Samedi", 'Dimanche'], data: [78, 93, 66, 75]}} />
                    </CardSimple>
                  </div>
                  <div className="col-md-4">
                    <CardSimple>
                      <ChartBar data={{title: "Ventes depuis le début de la semaine", labels: ["Lundi", "Mardi", "Mercredi", "< Jeudi >", "Vendredi", "Samedi", 'Dimanche'], data: [78, 93, 66, 75]}} />
                    </CardSimple>
                  </div>
              </div>
            </section>
            <section>
              <CardWithoutFooter title="Revu de stock">
                <Table thead={["ID", "Nom du produit", "Quantités", "Prix unitaire", "Actions"]} tbody={[["1", "Gel de douche Balnéo", Math.round(Math.random() * 1000), Math.round(Math.random() * 10), <Button type="submit" name="Voir le produit"/>]]} />
              </CardWithoutFooter>
            </section>
          </div>
        </div>
      )
    } else {
      return <div className="view loader-view">
        <Loader />
      </div>
    }
  }
}
