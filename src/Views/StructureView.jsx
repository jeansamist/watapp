import React, { Component } from 'react'
import { Building } from 'react-bootstrap-icons';
import CreatableSelect from 'react-select/creatable';

import { CardWithImage } from '../components/Cards.jsx';
import Loader from '../components/Loader.jsx';
import { createKey } from '../config/functions.js';
import Topbar from "./../components/Topbar.jsx";
import structureImageDefault from './../assets/images/app/structures/default.jpg'
import { Button, ButtonOpenModal } from '../components/Forms/Buttons.jsx';
import TitleToolsBar from '../components/TitleToolsBar.jsx';
import { ModalForm } from '../components/Modals.jsx';
import Field from '../components/Forms/Field.jsx';

export default class StructureView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      structure: this.props.match.params.structure,
      structures: [
        {
          id: createKey(),
          img: structureImageDefault,
          name: createKey(),
          info: {
            location: createKey(),
            visits: Math.round(Math.random() * 15)
          }
        },
        {
          id: createKey(),
          img: structureImageDefault,
          name: createKey(),
          info: {
            location: createKey(),
            visits: Math.round(Math.random() * 15)
          }
        },
        {
          id: createKey(),
          img: structureImageDefault,
          name: createKey(),
          info: {
            location: createKey(),
            visits: Math.round(Math.random() * 15)
          }
        },
        {
          id: createKey(),
          img: structureImageDefault,
          name: createKey(),
          info: {
            location: createKey(),
            visits: Math.round(Math.random() * 15)
          }
        },
        {
          id: createKey(),
          img: structureImageDefault,
          name: createKey(),
          info: {
            location: createKey(),
            visits: Math.round(Math.random() * 15)
          }
        },
        {
          id: createKey(),
          img: structureImageDefault,
          name: createKey(),
          info: {
            location: createKey(),
            visits: Math.round(Math.random() * 15)
          }
        },
      ],
      workersToAdd: [],
      workers: []
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
        workers: newValue.map((val, k) => {
          let obj = { k: k, workerId: val.value }
          return obj;
        }),
      })
    }
    return <ModalForm title="Créer une structure" id="modal-create-structure" onSubmit={this.createStructure} buttons={[<Button type="submit" name="Créer" />]}>
      <Field type="text" label={"Nom de la structure"} />
      <div className="field">
        <div className="label">Selectioner des employés</div>
        <CreatableSelect
          isClearable
          isMulti
          className="select"
          onChange={selectWorkershandleChange}
          name="colors"
          options={[
            { value: createKey(), label: 'Francis LeGrand'},
            { value: createKey(), label: 'Emmanuel Newz'},
            { value: createKey(), label: 'Peter Widston'}
          ]}
        />
      </div>
    </ModalForm>
  }

  /**
   * Fonction appelé lors de la création d'une structure
   * A modifier lors de l'élaboration du backend
   */
  createStructure () {
    console.log("create structure");
  }



  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: true })
    }, 5000);
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
