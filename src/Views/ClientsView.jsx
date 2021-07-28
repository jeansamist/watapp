import React, { Component } from 'react'
import { PeopleFill } from "react-bootstrap-icons";

// Components

import Loader from '../components/Loader.jsx';
import Topbar from "./../components/Topbar.jsx";
import Field from '../components/Forms/Field.jsx';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import { Button, ButtonOpenModal } from '../components/Forms/Buttons.jsx';
import { Modal, ModalForm } from '../components/Modals.jsx';
import { createKey } from '../config/functions.js';
import ClientsStats from '../components/Clients/ClientsStats.jsx';
// import TitleToolsBar from '../components/TitleToolsBar.jsx';
// import { CardWithoutFooter } from '../components/Cards.jsx';
// import { ChartLine } from '../components/Chart.jsx';
// import {TableOpenModal} from '../components/Tables.jsx';
// import { SelectSearch } from '../components/Forms/Selects.jsx';


export default class ShoppingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      structure: this.props.match.params.structure,
      productsToclient: [],
      articles: [],
      tableclients: {
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
      clientToView: ""
    }
    this.ModalViewclient = this.ModalViewclient.bind(this)
    this.ModalDoclient = this.ModalDoclient.bind(this)
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
      <ButtonOpenModal name="Faire une ventes" modalId="modal-client" />
    </>
  }
  
  handdleTableViewclientClick (event) {
    let target = event.target;
    let clientId = target.getAttribute("data-id")
    this.setState({ clientToView: clientId })
  }


  modalData() {
    let clientToView = this.state.clientToView
      if (clientToView !== "") {
        return clientToView;
    } else {
      return "no clientToView"
    }
  }

  ModalViewclient () {
    return <Modal title="Faire une vente" id="modal-view-client">
      {this.modalData()}
    </Modal>
  }

  ModalDoclient() {
    const selectProductshandleChange = (newValue) => {
      this.setState({
        productsToclient: newValue,
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
    return <ModalForm title="Faire une vente" id="modal-client" onSubmit={this.doclient} buttons={[<Button type="submit" name="Vendre" />]}>
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
        {this.state.productsToclient.map((product, k) => {

          return <div className="col-xl-6 col-12">
            <Field type="number" label={"Quantité de " + product.label} />
          </div>
        })}
      </div>
    </ModalForm>
  }
  doclient () {
    console.log("client");
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="view clients-view">
          <Topbar brand="Clients" ico={<PeopleFill />} />
          <div className="container-fluid">
            <section className="first-section">
              <ClientsStats />
            </section>
          </div>
          <div className="modals">
            <this.ModalViewclient />
            <this.ModalDoclient />
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