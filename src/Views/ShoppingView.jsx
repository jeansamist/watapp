import React, { Component } from 'react'
import { BagFill } from "react-bootstrap-icons";

// Components
import Loader from '../components/Loader.jsx';
import Topbar from "./../components/Topbar.jsx";
import ShoppingStats from '../components/Shopping/ShoppingStats.jsx';
import { CardWithoutFooter } from '../components/Cards.jsx';
// import { ChartLine } from '../components/Chart.jsx';
import Table from '../components/Table.jsx';
import { Button, ButtonOpenModal, ButtonCloseModal } from '../components/Forms/Buttons.jsx';
import TitleToolsBar from '../components/TitleToolsBar.jsx';

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
            <TitleToolsBar title="Actions">
              <ButtonOpenModal name="Faire une ventes" modalId="modal-sell" />
              <ButtonCloseModal name="fermer" modalId="modal-sell" />
            </TitleToolsBar>
            <section className="first-section">
              <div className="row">
                <ShoppingStats />
                {/* <div className="col-md-12 row">
                  <div className="col-md-6">
                    <CardWithoutFooter title={this.state.structure}>
                      <ChartLine data={{title: "Ventes depuis le début de la semaine", labels: ["Lundi", "Mardi", "Mercredi", "< Jeudi >", "Vendredi", "Samedi", 'Dimanche'], data: [78, 93, 66, 75]}} />
                    </CardWithoutFooter>
                  </div>
                  <div className="col-md-6">
                    <CardWithoutFooter title={this.state.structure}>
                      <ChartLine data={{title: "Ventes depuis le début de la semaine", labels: ["Lundi", "Mardi", "Mercredi", "< Jeudi >", "Vendredi", "Samedi", 'Dimanche'], data: [78, 93, 66, 75]}} />
                    </CardWithoutFooter>
                  </div>
                </div> */}
              </div>
            </section>
            <section>
              <CardWithoutFooter title="Ventes">
                <Table thead={["ID", "Nom du client client", "Montant d'achat", "Actions"]} tbody={[
                  ["1", "Mr. Bruxell Amide", Math.round(Math.random() * 1000), <Button type="submit" name="Check"/>],
                  ["1", "Mr. Bruxell Amide", Math.round(Math.random() * 1000), <Button type="submit" name="Check"/>],
                  ["1", "Mr. Bruxell Amide", Math.round(Math.random() * 1000), <Button type="submit" name="Check"/>],
                  ["1", "Mr. Bruxell Amide", Math.round(Math.random() * 1000), <Button type="submit" name="Check"/>]
                ]} />
              </CardWithoutFooter>
            </section>
            <div className="modals">
              <div id="modal-sell"></div>
            </div>
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
