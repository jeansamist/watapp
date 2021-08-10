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
import { TableOpenModal } from '../components/Tables.jsx';
import { Button, ButtonOpenModal } from '../components/Forms/Buttons.jsx';
import { Modal, ModalForm } from '../components/Modals.jsx';
import { createKey, random } from '../config/functions.js';

export default class ShoppingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      structure: this.props.match.params.structure,
      productsToSell: [],
      articles: [],
      /*
        Liste des éléments di tablau
        A modifier lors de l'élaboration du backend
      */
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
    // ("Component's Update", this.state);
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


  /**
   * Donnée du modal voir une vente
   * A modifier lors de l'élaboration du backend
   */
  modalData() {
    let sellToView = this.state.sellToView
      if (sellToView !== "") {
        return sellToView;
    } else {
      return "no sellToView"
    }
  }


  /**
   * Modal voir une vente
   * A modifier lors de l'élaboration du backend
   */
  ModalViewSell () {
    return <Modal title="Faire une vente" id="modal-view-sell">
      {this.modalData()}
    </Modal>
  }


  /**
   * Modal faire une vente
   * A modifier lors de l'élaboration du backend
   */
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

  /**
   * Fonction appelé lors de la création d'une vente
   * A modifier lors de l'élaboration du backend
   */
  doSell () {
    // ("Sell");
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
                      <ChartLine
                        data={{
                          title: "Ventes depuis le début de la semaine",
                          labels: [
                            "Lundi",
                            "Mardi",
                            "Mercredi",
                            "< Jeudi >",
                            "Vendredi",
                            "Samedi",
                            'Dimanche'
                          ],
                          data: [random(99),random(99),random(99),random(99),random(99),random(99),random(99)]
                        }}
                      />
                    </CardWithoutFooter>
                  </div>
                <ShoppingStats />
              </div>
            </section>
            <section>
              <TitleToolsBar title="Liste des dernières ventes">
                <this.Tools />
              </TitleToolsBar>
              <TableOpenModal
                modalId="modal-view-sell"
                onClick={this.handdleTableViewSellClick.bind(this)}
                tdata={this.state.tableSells}
              />
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