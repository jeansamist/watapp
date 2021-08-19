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
import { CardWithoutFooter, CardSimple } from '../components/Cards.jsx';
import { ChartLine } from '../components/Chart.jsx';
import { TableOpenModal } from '../components/Tables.jsx';
import { Button, ButtonOpenModal } from '../components/Forms/Buttons.jsx';
import { Modal, ModalForm } from '../components/Modals.jsx';
import { closeModal, createKey, openModal, random } from '../config/functions.js';
import * as Config from "./../config/Variables"

export default class ShoppingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sellAlert: false,
      loading: false,
      structure: this.props.match.params.structure,
      productsToSell: [],
      articles: [],
      clients: [],
      currentStocks: [],
      /*
        Liste des éléments di tablau
        A modifier lors de l'élaboration du backend
      */
      tableSells: {
        tableTitle: createKey(),
        thead: ['Loading...'],
        tbody: [
          {
            id: createKey(),
            data: ["Loading..."]
          }
        ]
      },
      clientId: null,
      sellToView: "",
      totality: 0
    }
    this.ModalViewSell = this.ModalViewSell.bind(this)
    this.ModalDoSell = this.ModalDoSell.bind(this)
    this.ModalConfirm = this.ModalConfirm.bind(this)
    this.doSell = this.doSell.bind(this)
    this.confirmSell = this.confirmSell.bind(this)
  }

  componentDidMount () {
    fetch(`${Config.server}services/req_sells.php?structure=${this.state.structure}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      // (result);
      if (result.response_data) {
        this.setState({
          tableSells: {
            tableTitle: createKey(),
            thead: ["Nom du client", "Articles achetées", "Total TC"],
            tbody: result.response_data.map(sell => {
              return {
                id: sell.token,
                data: [
                  sell.clientName,
                  JSON.parse(sell.articles).join(", "),
                  sell.totality
                ]
              }
            })
          },
        })
      }
    })
    fetch(`${Config.server}services/req_clients.php`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      // (result);
      this.setState({
        clients: result.response_data.map((client) => {
          return {
            value: client.id,
            label: client.lastname + " " + client.name,
          }
        })
      })
    })
    fetch(`${Config.server}services/req_current_stock.php?structure=${this.state.structure}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      // (result);
      if (result.response_data) {
        this.setState({
          loading: true,
          currentStocks: result.response_data.map((stock) => {
            return {
              value: stock.token,
              label: `${stock.name} "${stock.unitary_price} FCFA"`,
              price: stock.unitary_price,
              currentQty: stock.quantity
            }
          }),
        })
      } else {
        this.setState({
          loading: true,
          currentStocks: []
        })
      }
    })
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
          let obj = {articleId: val.value, currentQty: val.currentQty, articlePrice: val.price}
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
            options={this.state.clients}
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
            options={this.state.currentStocks}
          />
        </div>
      </div>
      <div className="row">
        {this.state.productsToSell.map((product, k) => {

          return <div className="col-xl-6 col-12">
            <Field type="number" max={product.currentQty} label={"Quantité de " + product.label + " x" + product.currentQty} />
          </div>
        })}
      </div>
      {
        this.state.sellAlert ? <div className="error">{this.state.addClientAlert}</div> : ""
      }
    </ModalForm>
  }

  ModalConfirm () {
    return <Modal id="modal-confirm-sell" closeLabel="Annuler" buttons={[<Button type="button" onClick={this.doSell} name="Valider" />]}>
      Voulez vous faire une vente de {this.state.totality}FCFA ?
    </Modal>
  }

  confirmSell () {
    let inputs = document.querySelectorAll("#modal-sell .input-field")
    let tt = 0;
    for (let i = 0; i < inputs.length; i++) {
      const inputVal = inputs[i].value;
      const price = this.state.productsToSell[i].articlePrice
      let t = inputVal * price
      tt += t;
    }
    this.setState({totality: tt})
    openModal("modal-confirm-sell")
  }

  /**
   * Fonction appelé lors de la création d'une vente
   * A modifier lors de l'élaboration du backend
   */
  doSell () {
    let inputs = document.querySelectorAll("#modal-sell .input-field")
    let qties = [];
    let articles = [];
    let err = false
    for (let i = 0; i < inputs.length; i++) {
      const inputVal = inputs[i].value;
      if (inputVal !== "") {
        qties.push(inputVal)
        const article = this.state.productsToSell[i].value
        articles.push(article)
      } else {
        err = true;
        this.setState({ sellAlert: "Veuiller completer tous les champs" });
        break
      }
    }
    if (!err) {
      let qtiesToSend = JSON.stringify(qties);
      let articlesToSend = JSON.stringify(articles);
      let data = new FormData();
      data.append('qties', qtiesToSend);
      data.append('articles', articlesToSend);
      if (this.state.clientId !== null) {
        data.append('client_id', this.state.clientId);
      }
      fetch(`${Config.server}services/add-sell.php?userCookieToken=${localStorage.getItem('watapp_user')}&structure=${this.state.structure}`, {
        method: "POST",
        body: data,
        mode: "cors"
      })
      .then(response => response.json())
      .then(result => {
        if (result.response_data) {
          fetch(`${Config.server}services/req_current_stock.php?structure=${this.state.structure}`)
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            // (result);
            if (result.response_data) {
              this.setState({
                currentStocks: result.response_data.map((stock) => {
                  return {
                    value: stock.token,
                    label: `${stock.name} "${stock.unitary_price} FCFA"`,
                    price: stock.unitary_price,
                    currentQty: stock.quantity
                  }
                }),
              })
            } else {
              this.setState({
                currentStocks: []
              })
            }
          })
          fetch(`${Config.server}services/req_sells.php?structure=${this.state.structure}`)
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            // (result);
            if (result.response_data) {
              this.setState({
                tableSells: {
                  tableTitle: createKey(),
                  thead: ["Nom du client", "Articles achetées", "Total TC"],
                  tbody: result.response_data.map(sell => {
                    return {
                      id: sell.token,
                      data: [
                        sell.clientName,
                        JSON.parse(sell.articles).join(", "),
                        sell.totality
                      ]
                    }
                  })
                },
              })
            }
          })
          closeModal('modal-sell')
        }

      })
    } else {

    }
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
            <this.ModalConfirm />
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