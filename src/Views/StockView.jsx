import React, { Component } from 'react'
import { Box } from "react-bootstrap-icons";

// Components
import Loader from '../components/Loader.jsx';
import Topbar from "./../components/Topbar.jsx";
import StatCard from '../components/StatCard.jsx';
import { TableOpenModal } from '../components/Tables.jsx';
import { Modal, ModalForm } from '../components/Modals.jsx';
import TitleToolsBar from '../components/TitleToolsBar.jsx';
import { closeModal, createKey } from '../config/functions.js';
import { Button, ButtonOpenModal } from '../components/Forms/Buttons.jsx';
import CreatableSelect from 'react-select/creatable';
import Field from '../components/Forms/Field.jsx';
import * as Config from "./../config/Variables"

export default class StockView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createStockAlert: false,
      loading: false,
      structure: this.props.match.params.structure,
      tableProducts: {
        tableTitle: createKey(),
        thead: ['Nom du stock', "Prix Unitaire", "Quantité", "Total"],
        tbody: [
          {
            id: "No key :(",
            data: ["Loading..."]
          }
        ]
      },
      productToView: "",
      stockSelect: [
        { value:"hjk", label:"hjdqsdq" }
      ],
      stockToIncrement: [],
      stocks: [],
      stocksList: []
    }
    this.ModalViewProduct = this.ModalViewProduct.bind(this)
    this.modalData = this.modalData.bind(this)
    this.ModalIncrement = this.ModalIncrement.bind(this)
    this.ModalCreateStock = this.ModalCreateStock.bind(this)
    this.createStock = this.createStock.bind(this)
    this.increment = this.increment.bind(this)
  }

  componentDidMount () {
    fetch(`${Config.server}services/req_stocks.php`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      if (result.response_data) {
        this.setState({
          stocksList: result.response_data.map((stock, k) => {
            return {
              value: stock.token,
              unitary_price: stock.unitary_price,
              label: stock.name,
            }
          })
        })
      }
    })
    fetch(`${Config.server}services/req_current_stock.php`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      this.setState({
        loading: true,
        tableProducts: {
          tableTitle: createKey(),
          thead: ['Nom du stock', "Prix Unitaire", "Quantité", "Total"],
          tbody: result.response_data.map((stock, k) => {
            let tp = stock.unitary_price * stock.quantity;
            return {
              id: stock.token,
              data: [
                stock.name,
                stock.unitary_price,
                stock.quantity,
                tp
              ]
            }
          })
        },
      })
    })
  }
  modalData() {
    let productToView = this.state.productToView
      if (productToView !== "") {
        return productToView;
    } else {
      return "no productToView"
    }
  }

  ModalViewProduct () {
    return <Modal title="Voir un produit" id="modal-view-product">
      {this.modalData()}
    </Modal>
  }




  createStock () {
    let inputs = document.querySelectorAll('#modal-stock-create input');
    let err = false;
    let toShare = [];
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.value !== "") {
        toShare.push(`${input.getAttribute("name")}=${input.value}`)
      } else {
        err = true;
        this.setState({ createStockAlert: "Veuiller completer tous les champs" });
        break;
      }
    }
    if (!err) {
      let reqLoad = document.querySelectorAll(".modals .modal-load")
      reqLoad.forEach(load => {
        load.classList.add('active')
      })
      fetch(`${Config.server}services/create-stock.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `${toShare[0]}&${toShare[1]}`
      })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.response_data) {
          closeModal("modal-stock-create");
          // alert(result.response_message)d
          // openModal('requestdone')
          for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            input.value = ""
          }
          reqLoad.forEach(load => {
            load.classList.remove('active')
          })
        } else {
          // console.log(response);
          this.setState({ createStockAlert: result.response_message });
          reqLoad.forEach(load => {
            load.classList.remove('active')
          })
        }
      })
    }
  }
  ModalCreateStock () {
    return <ModalForm title="Créer un stock" id="modal-stock-create" onSubmit={this.createStock} buttons={[<Button type="submit" name="Créer" />]}>
      <Field type="text" name="name" label="Nom du stock" />
      <Field type="number" name="unitary_price" label="Prix unitaire du stock" />
      {
        this.state.createStockAlert ? <div className="error">{this.state.createStockAlert}</div> : ""
      }
    </ModalForm>
  }

  increment () {
    let inputs = document.querySelectorAll('#modal-stock-increment .input-field');
    let err = false;
    let toShare = [];
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.value !== "") {
        toShare.push(input.value)
      } else {
        err = true;
        this.setState({ createStockAlert: "Veuiller completer tous les champs" });
        break;
      }
    }
    if (!err) {
      let reqLoad = document.querySelectorAll(".modals .modal-load")
      reqLoad.forEach(load => {
        load.classList.add('active')
      })
      fetch(`${Config.server}services/increment-stock.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `stocks=${JSON.stringify(this.state.stocks)}&qty=${JSON.stringify(toShare)}`
      })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.response_data) {
          closeModal("modal-stock-inctement");
          // alert(result.response_message)d
          // openModal('requestdone')
          this.setState({ stockToIncrement: [] });
          for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            input.value = ""
          }
          reqLoad.forEach(load => {
            load.classList.remove('active')
          })
        } else {
          // console.log(response);
          this.setState({ createStockAlert: result.response_message });
          reqLoad.forEach(load => {
            load.classList.remove('active')
          })
        }
      })
      fetch(`${Config.server}services/req_current_stock.php`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.setState({
          tableProducts: {
            tableTitle: createKey(),
            thead: ['Nom du stock', "Prix Unitaire", "Quantité", "Total"],
            tbody: result.response_data.map((stock, k) => {
              let tp = stock.unitary_price * stock.quantity;
              return {
                id: stock.token,
                data: [
                  stock.name,
                  stock.unitary_price,
                  stock.quantity,
                  tp
                ]
              }
            })
          },
        })
      })
      fetch(`${Config.server}services/req_stocks.php`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        if (result.response_data) {
          this.setState({
            stocksList: result.response_data.map((stock, k) => {
              return {
                value: stock.token,
                unitary_price: stock.unitary_price,
                label: stock.name,
              }
            })
          })
        }
      })
    }
  }
  ModalIncrement () {

    const selectStockhandleChange = (newValue) => {
      this.setState({
        stockToIncrement: newValue,
        stocks: newValue.map((val) => {
          return val.value;
        }),
      })
    }
    return <ModalForm title="Incrémenter un stock" id="modal-stock-increment" onSubmit={this.increment} buttons={[<Button type="submit" name="Incrémenter" />]}>
      {/* <SelectSearch /> */}
      <div className="row">
        <div className="field col-md-6 col-12">
          <div className="label">Selectioner le(s) stock(s)</div>
          <CreatableSelect
            isMulti
            className="select"
            onChange={selectStockhandleChange}
            name="colors"
            options={this.state.stocksList}
          />
        </div>
      </div>
      <div className="row">
        {this.state.stockToIncrement.map((product, k) => {

          return <div className="col-xl-6 col-12" key={k}>
            <Field type="number" label={"Quantité de " + product.label} />
          </div>
        })}
      </div>
      {
        this.state.createStockAlert ? <div className="error">{this.state.createStockAlert}</div> : ""
      }
    </ModalForm>
  }
  handdleTableViewProductClick (event) {
    let target = event.target;
    let productId = target.getAttribute("data-id")
    this.setState({ productToView: productId })
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="view stock-view">
          <Topbar brand="Stock" ico={<Box />} />
          <div className="container-fluid">
            <section className="row stock-stats">
              <div className="col-md-6">
                <StatCard ico={<Box />} oldData={Math.round((Math.random() * 100))} newData={this.state.stocksList.length} name="Total de Stock" />
              </div>
              <div className="col-md-6">
                <StatCard ico={<Box />} oldData={Math.round((Math.random() * 100))} newData={this.state.tableProducts.tbody.length} name="Total des stocks plein" />
              </div>
            </section>
            <section>
              <TitleToolsBar title="Inventaire des Stock récents">
                <ButtonOpenModal name="Incrément un stock" modalId="modal-stock-increment" />
                <ButtonOpenModal name="Créer un stock" modalId="modal-stock-create" />
              </TitleToolsBar>
              <TableOpenModal modalId="modal-view-product" onClick={this.handdleTableViewProductClick.bind(this)} tdata={this.state.tableProducts}/>
            </section>
          </div>
          <div className="modals">
            <this.ModalViewProduct />
            <this.ModalIncrement />
            <this.ModalCreateStock />
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
