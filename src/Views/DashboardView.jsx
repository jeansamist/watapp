import React, { Component } from 'react'
import Topbar from "./../components/Topbar.jsx";
import { HouseDoorFill } from "react-bootstrap-icons";
import Stats from '../components/Dashboard/Stats.jsx';
import Jumbotron from '../components/Dashboard/Jumbotron.jsx';
import { Button } from '../components/Forms/Buttons'
import Table from '../components/Table.jsx';
import {CardWithoutFooter} from '../components/Cards.jsx';


export default class DashboardView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      structure: this.props.match.params.structure
    }

  }
  componentDidMount () {
    alert(`Vous êtes dans la structure : ${this.state.structure}`)
  }
  render() {
    return (
      <div className="view dashboard-view">
        <Topbar brand="Dashboard" ico={<HouseDoorFill />} />
        <div className="container-fluid">
          <section className="first-section">
            <div className="row">
              <div className="col-md-5">
                <Jumbotron>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptas porro magnam molestiae illo expedita consectetur excepturi provident voluptatum nesciunt illum soluta molestias corrupti, deserunt officia optio ducimus veritatis dolores?
                </Jumbotron>
              </div>
              <Stats />
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
  }
}
