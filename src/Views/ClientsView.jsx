import React, { Component } from 'react'
import { PeopleFill } from "react-bootstrap-icons";

// Components
import Loader from '../components/Loader.jsx';
import Topbar from "./../components/Topbar.jsx";
import Field from '../components/Forms/Field.jsx';
import { Button, ButtonOpenModal } from '../components/Forms/Buttons.jsx';
import { Modal, ModalForm } from '../components/Modals.jsx';
import { createKey } from '../config/functions.js';
import ClientsStats from '../components/Clients/ClientsStats.jsx';
import TitleToolsBar from '../components/TitleToolsBar.jsx';
import { TableOpenModal } from '../components/Tables.jsx';


export default class ShoppingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      structure: this.props.match.params.structure,
      productsToclient: [],
      articles: [],
      /*
        Liste des éléments du tableau
        A modifier lors de l'élaboration du backend
      */
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
      <ButtonOpenModal name="Créer un client" modalId="modal-client" />
    </>
  }
  
  handdleTableViewclientClick (event) {
    let target = event.target;
    let clientId = target.getAttribute("data-id")
    this.setState({ clientToView: clientId })
  }


  /**
   * Donnée du modal voir un client
   * A modifier lors de l'élaboration du backend
   */
  modalData() {
    let clientToView = this.state.clientToView
      if (clientToView !== "") {
        return clientToView;
    } else {
      return "no clientToView"
    }
  }


  
  /**
   * Modal pour voir un client
   * A modifier lors de l'élaboration du backend
   */
  ModalViewclient () {
    return <Modal title="Voir un client" id="modal-view-client">
      {this.modalData()}
    </Modal>
  }


  /**
   * Modal pour créer un client
   * A modifier lors de l'élaboration du backend
   */
  ModalDoclient() {
    return <ModalForm title="Créer un client" id="modal-client" onSubmit={this.doclient} buttons={[<Button type="submit" name="Créer" />]}>
      <Field type="text" label="Nom du client" />
    </ModalForm>
  }

  
  /**
   * Fonction appelé lors de la création d'un client
   * A modifier lors de l'élaboration du backend
   */
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
            <section>
              <TitleToolsBar title="Liste des clients">
                <this.Tools />
              </TitleToolsBar>
              <TableOpenModal
                modalId="modal-view-client"
                onClick={this.handdleTableViewclientClick.bind(this)}
                tdata={this.state.tableclients}
              />
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