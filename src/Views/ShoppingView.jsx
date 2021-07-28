import React, { Component } from 'react'
import { BagFill } from "react-bootstrap-icons";

// Components

import Loader from '../components/Loader.jsx';
import Topbar from "./../components/Topbar.jsx";
import ShoppingStats from '../components/Shopping/ShoppingStats.jsx';
import TitleToolsBar from '../components/TitleToolsBar.jsx';
import Field from '../components/Forms/Field.jsx';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import { CardWithoutFooter } from '../components/Cards.jsx';
import { ChartLine } from '../components/Chart.jsx';
import {TableOpenModal} from '../components/Tables.jsx';
import { Button, ButtonOpenModal, ButtonCloseModal } from '../components/Forms/Buttons.jsx';
import { Modal, ModalForm } from '../components/Modals.jsx';
import { createKey } from '../config/functions.js';
// import { SelectSearch } from '../components/Forms/Selects.jsx';


export default class ShoppingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      structure: this.props.match.params.structure,
      productsToSell: [],
      articles: [],
      tableSells: {
        tableTitle: createKey(),
        thead: ['ghj', "ghjkl", "fghjk"],
        tbody: [
          {
            id: createKey(),
            data: ["ghjkl", 'ghsd', 'mlkjh']
          },
          {
            id: createKey(),
            data: ["ghjkl", 'ghsd', 'mlkjh']
          },
          {
            id: createKey(),
            data: ["ghjkl", 'ghsd', 'mlkjh']
          },
          {
            id: createKey(),
            data: ["ghjkl", 'ghsd', 'mlkjh']
          }
        ]
      },
      clientId: createKey(),
      sellToView: ""
    }
    this.ModalViewSell = this.ModalViewSell.bind(this)
    this.ModalDoSell = this.ModalDoSell.bind(this)
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: true })
    }, 1000);
  }

  componentDidUpdate () {
    console.log("Component's Update", this.state);
  }

  Tools () {
    return <>
      <ButtonOpenModal name="Faire une ventes" modalId="modal-sell" />
    </>
  }
  
  handdleTableViewSellClick (event) {
    let target = event.target;
    let sellId = target.getAttribute("data-id")
    this.setState({ sellToView: sellId })
  }


  modalData() {
    let sellToView = this.state.sellToView
      if (sellToView !== "") {
        return sellToView;
    } else {
      return "no sellToView"
    }
  }

  ModalViewSell () {
    return <Modal title="Faire une vente" id="modal-view-sell">
      {this.modalData()}
    </Modal>
  }

  ModalDoSell() {
    const selectProductshandleChange = (newValue) => {
      this.setState({
        productsToSell: newValue,
        articles: newValue.map((val, k) => {
          let obj = {articleId: val.value, articleQty: 0, articlePrice: val.price}
          return obj;
        }),
      })
    }
    const selectClientshandleChange = (newValue) => {
      this.setState({
        clientId: newValue.value
      })
    }
    return <ModalForm title="Faire une vente" id="modal-sell" onSubmit={this.doSell} buttons={[<Button type="submit" name="Vendre" />]}>
      {/* <SelectSearch /> */}
      <div className="row">
        <div className="field col-md-6 col-12">
          <div className="label">Selectioner le client</div>
          <Select
            className="select"
            onChange={selectClientshandleChange}
            name="colors"
            options={[
              { value: 'chocolate', label: 'Chocolate', price: 200 },
              { value: 'strawberry', label: 'Strawberry', price: 200 },
              { value: 'vanilla', label: 'Vanilla', price: 200 }
            ]}
          />
        </div>
        <div className="field col-md-6 col-12">
          <div className="label">Selctioner des produits</div>
          <CreatableSelect
            isClearable
            isMulti
            className="select"
            onChange={selectProductshandleChange}
            name="colors"
            options={[
              { value: 'chocolate', label: 'Chocolate', price: 200 },
              { value: 'strawberry', label: 'Strawberry', price: 200 },
              { value: 'vanilla', label: 'Vanilla', price: 200 }
            ]}
          />
        </div>
      </div>
      <div className="row">
        {this.state.productsToSell.map((product, k) => {

          return <div className="col-xl-6 col-12">
            <Field type="number" label={"Quantité de " + product.label} />
          </div>
        })}
      </div>
    </ModalForm>
  }
  doSell () {
    console.log("Sell");
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="view shopping-view">
          <Topbar brand="Shopping" ico={<BagFill />} />
          <div className="container-fluid">
            <section className="first-section">
              <div className="row">
                <div className="col-md-6">
                    <CardWithoutFooter title={this.state.structure}>
                      <ChartLine data={{title: "Ventes depuis le début de la semaine", labels: ["Lundi", "Mardi", "Mercredi", "< Jeudi >", "Vendredi", "Samedi", 'Dimanche'], data: [78, 93, 66, 75]}} />
                    </CardWithoutFooter>
                  </div>
                <ShoppingStats />
              </div>
            </section>
            <section>
              <TitleToolsBar title="Sortir depuis">
                <ButtonCloseModal name="fermer" modalId="modal-sell" />
              </TitleToolsBar>
              <CardWithoutFooter title="Ventes" tools={<this.Tools />}>
                <TableOpenModal modalId="modal-view-sell" onClick={this.handdleTableViewSellClick.bind(this)} tdata={this.state.tableSells}/>
                {/* <TableOpenModal modalId="modal-view-sell" thead={["Nom du client client", "Montant d'achat", "Actions"]} tbody={[
                  ["Mr. Bruxell Amide", Math.round(Math.random() * 1000), <Button type="submit" name="Check"/>],
                  ["Mr. Larouse Martini", Math.round(Math.random() * 1000), <Button type="submit" name="Check"/>],
                  ["Mr. Angello Dubois", Math.round(Math.random() * 1000), <Button type="submit" name="Check"/>],
                  ["Mr. Anaël Flore", Math.round(Math.random() * 1000), <Button type="submit" name="Check"/>]
                ]} /> */}

              </CardWithoutFooter>
            </section>
          </div>
          <div className="modals">
            <this.ModalViewSell />
            <this.ModalDoSell />
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
/*

Vente:
  nom du client
  argent
  ..;
Response
  data => [
    Vente(Dupond, 2000)
  ],
  message: 

*/