import React, { Component } from 'react'
import { PeopleFill } from "react-bootstrap-icons";

// Components
import Loader from '../components/Loader.jsx';
import Topbar from "./../components/Topbar.jsx";
import Field from '../components/Forms/Field.jsx';
import { Button, ButtonOpenModal } from '../components/Forms/Buttons.jsx';
import { Modal, ModalForm, CustomAlert } from '../components/Modals.jsx';
import { createKey, closeModal } from '../config/functions.js';
import ClientsStats from '../components/Clients/ClientsStats.jsx';
import TitleToolsBar from '../components/TitleToolsBar.jsx';
import { TableOpenModal } from '../components/Tables.jsx';
import * as Config from "./../config/Variables"

export default class ShoppingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addClientAlert: false,
      loading: false,
      structure: this.props.match.params.structure,
      /*
        Liste des éléments du tableau
        A modifier lors de l'élaboration du backend
      */
      tableclients: {
        tableTitle: createKey(),
        thead: ['Nom et Prenom', "E-mail", "Inscrit le"],
        tbody: [
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
    this.doclient = this.doclient.bind(this)
  }

  componentDidMount () {
    fetch(`${Config.server}services/req_clients.php`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      this.setState({
        tableclients: {
          tableTitle: createKey(),
          thead: ['Nom et Prenom', "E-mail", "Inscrit le"],
          tbody: result.response_data.map((client, k) => {
            let t = new Date(parseInt(client.date, 10))
            console.log(parseInt(client.date, 10));
            return {
              id: client.id,
              data: [
                client.lastname + " " + client.name,
                client.mail,
                t.toDateString()
              ]
            }
          })
        },
      })
      this.setState({ loading: true })
    })
    setTimeout(() => {
      
    }, 500);
  }

  componentDidUpdate () {
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
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Field type="text" label="Nom du client" />
        </div>
        <div className="col-md-6 col-sm-12">
          <Field type="text" label="Prenom du client" />
        </div>
      </div>
      <Field type="text" label="E-mail du client" />
      {
        this.state.addClientAlert ? <div className="error">{this.state.addClientAlert}</div> : ""
      }
    </ModalForm>
  }

  
  /**
   * Fonction appelé lors de la création d'un client
   * A modifier lors de l'élaboration du backend
   */
  doclient () {
    let inputs = document.querySelectorAll('#modal-client input');
    let err = false;
    let toShare = [];
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.value !== "") {
        toShare.push(`${input.getAttribute("name").toLowerCase().replace(",", "").replace(",", "")}=${input.value}`)
      } else {
        err = true;
        this.setState({ addClientAlert: "Veuiller completer tous les champs" });
        break;
      }
    }
    if (!err) {
      let reqLoad = document.querySelectorAll(".modals .modal-load")
      reqLoad.forEach(load => {
        load.classList.add('active')
      })
      fetch(`${Config.server}services/add-client.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `${toShare[0]}&${toShare[1]}&${toShare[2]}`
      })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.response_data) {
          closeModal("modal-client");
          alert(result.response_message)
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
          this.setState({ addClientAlert: result.response_message });
          reqLoad.forEach(load => {
            load.classList.remove('active')
          })
        }
      })
    }
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
            <CustomAlert id="requestdone">
              Le client à bien été créer
            </CustomAlert>
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