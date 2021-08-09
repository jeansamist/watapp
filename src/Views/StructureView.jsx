import React, { Component } from 'react'
import { Building } from 'react-bootstrap-icons';
import CreatableSelect from 'react-select/creatable';

import { CardWithImage } from '../components/Cards.jsx';
import Loader from '../components/Loader.jsx';
import { createKey, closeModal } from '../config/functions.js';
import Topbar from "./../components/Topbar.jsx";
import structureImageDefault from './../assets/images/app/structures/default.jpg'
import { Button, ButtonOpenModal } from '../components/Forms/Buttons.jsx';
import TitleToolsBar from '../components/TitleToolsBar.jsx';
import { ModalForm } from '../components/Modals.jsx';
import Field from '../components/Forms/Field.jsx';
import * as Config from "./../config/Variables"

export default class StructureView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      addStructureAlert: false,
      structure: this.props.match.params.structure,
      structures: [
        {
          id: "Loading...",
          img: structureImageDefault,
          name: "Loading...",
          info: {
            location: "Loading...",
            visits: Math.round(Math.random() * 15)
          }
        }
      ],
      workersToAdd: [],
      workers: [],
      workersList: []
    }
    this.ModalCreateStructure = this.ModalCreateStructure.bind(this)
    this.createStructure = this.createStructure.bind(this)
  }

  /**
   * Modal pour créer une structure
   * A modifier lors de l'élaboration du backend
   */
   ModalCreateStructure() {
    
    const selectWorkershandleChange = (newValue) => {
      this.setState({
        workersToAdd: newValue,
        workers: newValue.map((val) => {
          return val.value;
        }),
      })
    }
    return <ModalForm title="Créer une structure" id="modal-create-structure" onSubmit={this.createStructure} buttons={[<Button type="submit" name="Créer" />]}>
      <Field type="text" name="name" label={"Nom de la structure"} />
      <div className="field">
        <div className="label">Selectioner des employés</div>
        <CreatableSelect
          isClearable
          isMulti
          className="select"
          onChange={selectWorkershandleChange}
          name="structures"
          options={
            this.state.workersList
          }
        />
      </div>
      <Field type="text" name="localisation" label={"Localisation de la structure"} />
      {
        this.state.addStructureAlert ? <div className="error">{this.state.addStructureAlert}</div> : ""
      }
    </ModalForm>
  }

  /**
   * Fonction appelé lors de la création d'une structure
   * A modifier lors de l'élaboration du backend
   */
  createStructure () {
    let inputs = document.querySelectorAll('#modal-create-structure .input-field');
    console.log(inputs);
    let err = false;
    let toShare = [];
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.value !== "") {
        toShare.push(`${input.getAttribute("name")}=${input.value}`)
      } else {
        err = true;
        this.setState({ addStructureAlert: "Veuiller completer tous les champs" });
        break;
      }
    }
    if (!err) {
      if (this.state.workers !== []) {
        let reqLoad = document.querySelectorAll(".modals .modal-load")
        fetch(`${Config.server}services/req_users.php`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          if (result.response_data) {
            this.setState({
              workersList: result.response_data.map((worker, k) => {
                return {
                  value: worker.id,
                  label: worker.full_name
                }
              })
            })
          }
        })
        // reqLoad.forEach(load => {
        //   load.classList.add('active')
        // })
        fetch(`${Config.server}services/add-structure.php`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: `${toShare[0]}&workers=${JSON.stringify(this.state.workers)}&${toShare[1]}`
        })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          if (result.response_data) {
            closeModal("modal-create-structure");
            reqLoad.forEach(load => {
              load.classList.remove('active')
            })
            alert(result.response_message)
            // // openModal('requestdone')
            for (let i = 0; i < inputs.length; i++) {
              const input = inputs[i];
              input.value = ""
            }
            // reqLoad.forEach(load => {
            //   load.classList.remove('active')
            // })
            // // this.reRender()
          }
        })
      }
    }
  }



  componentDidMount () {
    
    fetch(`${Config.server}services/req_users.php`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      this.setState({
        workersList: result.response_data.map((worker, k) => {
          return {
            value: worker.id,
            label: worker.full_name
          }
        })
      })
    })
    fetch(`${Config.server}services/req_structures.php`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.response_data) {
        this.setState({
          loading: true,
          structures: result.response_data.map((e) => {
            return {
              id: e.token,
              img: structureImageDefault,
              name: e.name,
              info: {
                location: e.localisation,
                visits: Math.round(Math.random() * 15)
              }
            }
          })
        })
      }
    })
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="view structure-view">
          <Topbar brand="Structures" ico={<Building />} />
          <div className="container-fluid">
            <section className="first-section">
              <TitleToolsBar title="Liste des différentes structures">
                <ButtonOpenModal name="Ajouter une structure" modalId="modal-create-structure" />
              </TitleToolsBar>
              <div className="row">
                {this.state.structures.map((structure, key) => {
                  return <div className="col-xl-4 col-md-6 col-12">
                    <CardWithImage imageSrc={structure.img} buttons={[<Button name="Modifier" type="button" />]}>
                      <h1>{structure.name}</h1>
                      <ul>
                        <li><b>Localisation :</b> {structure.info.location}</li>
                        <li><b>Visites :</b> {structure.info.visits}</li>
                      </ul>
                    </CardWithImage>
                  </div>
                })}
              </div>
            </section>
          </div>
          <div className="modals">
            <this.ModalCreateStructure />
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
