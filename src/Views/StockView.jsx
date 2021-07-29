import React, { Component } from 'react'
import { Box } from "react-bootstrap-icons";

// Components
import Loader from '../components/Loader.jsx';
import Topbar from "./../components/Topbar.jsx";
import StatCard from '../components/StatCard.jsx';
import { TableOpenModal } from '../components/Tables.jsx';
import { Modal, ModalForm } from '../components/Modals.jsx';
import TitleToolsBar from '../components/TitleToolsBar.jsx';
import { createKey } from '../config/functions.js';
import { Button, ButtonOpenModal } from '../components/Forms/Buttons.jsx';
import CreatableSelect from 'react-select/creatable';
import Field from '../components/Forms/Field.jsx';
export default class StockView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      structure: this.props.match.params.structure,
      tableProducts: {
        tableTitle: createKey(),
        thead: ['Nom du stock', "Prix Unitaire", "Quantité"],
        tbody: [
          {
            id: createKey(),
            data: [createKey(), 'ghsd', 'mlkjh']
          },
          {
            id: createKey(),
            data: [createKey(), 'ghsd', 'mlkjh']
          },
          {
            id: createKey(),
            data: [createKey(), 'ghsd', 'mlkjh']
          },
          {
            id: createKey(),
            data: [createKey(), 'ghsd', 'mlkjh']
          }
        ]
      },
      productToView: "",
      stockSelect: [
        { value:"hjk", label:"hjdqsdq" }
      ],
      stockToIncrement: [],
      stocks: []
    }
    this.ModalViewProduct = this.ModalViewProduct.bind(this)
    this.modalData = this.modalData.bind(this)
    this.ModalIncrement = this.ModalIncrement.bind(this)
    this.ModalCreateStock = this.ModalCreateStock.bind(this)
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: true })
    }, 1000);
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
    console.log("Create");
  }
  ModalCreateStock () {
    return <ModalForm title="Créer un stock" id="modal-stock-create" onSubmit={this.createStock} buttons={[<Button type="submit" name="Créer" />]}>
      <Field type="text" label="Nom du stock" />
    </ModalForm>
  }

  increment () {
    console.log("Incrément");
  }
  ModalIncrement () {

    const selectStockhandleChange = (newValue) => {
      this.setState({
        stockToIncrement: newValue,
        stocks: newValue.map((val, k) => {
          let obj = {stockId: val.value, stockQty: 0, stockPrice: val.price}
          return obj;
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
            options={this.state.stockSelect}
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
                <StatCard ico={<Box />} oldData={Math.round((Math.random() * 100))} newData={Math.round((Math.random() * 100))} name="Total des stocks vide" />
              </div>
              <div className="col-md-6">
                <StatCard ico={<Box />} oldData={Math.round((Math.random() * 100))} newData={Math.round((Math.random() * 100))} name="Total des stocks plein" />
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
