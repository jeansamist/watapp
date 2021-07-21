import React, { Component } from 'react'
import { BagFill } from "react-bootstrap-icons";

// Components
import Loader from '../components/Loader.jsx';
import Topbar from "./../components/Topbar.jsx";
import ShoppingStats from '../components/Shopping/ShoppingStats.jsx';
import { CardWithoutFooter } from '../components/Cards.jsx';
import { ChartLine } from '../components/Chart.jsx';
import Table from '../components/Table.jsx';
import { Button } from '../components/Forms/Buttons.jsx';

export default class ShoppingView extends Component {
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
        <div className="view shopping-view">
          <Topbar brand="Shopping" ico={<BagFill />} />
          <div className="container-fluid">
            <section className="first-section">
              <div className="row">
                <div className="col-md-7">
                  <CardWithoutFooter title={this.state.structure}>
                    <ChartLine data={{title: "Ventes depuis le début de la semaine", labels: ["Lundi", "Mardi", "Mercredi", "< Jeudi >", "Vendredi", "Samedi", 'Dimanche'], data: [78, 93, 66, 75]}} />
                  </CardWithoutFooter>
                </div>
                <ShoppingStats />
              </div>
            </section>
            <section>
              <Table thead={["ID", "Nom du client client", "Montant d'achat", "Actions"]} tbody={[
                ["1", "Mr. Bruxell Amide", Math.round(Math.random() * 1000), <Button type="submit" name="Voir le produit"/>],
                ["1", "Mr. Bruxell Amide", Math.round(Math.random() * 1000), <Button type="submit" name="Voir le produit"/>],
                ["1", "Mr. Bruxell Amide", Math.round(Math.random() * 1000), <Button type="submit" name="Voir le produit"/>],
                ["1", "Mr. Bruxell Amide", Math.round(Math.random() * 1000), <Button type="submit" name="Voir le produit"/>]
              ]} />
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
