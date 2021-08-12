import React, { Component } from 'react'
import { GearFill } from 'react-bootstrap-icons';
import { CardSimple } from '../components/Cards.jsx';
import { Button } from '../components/Forms/Buttons.jsx';
import Loader from '../components/Loader.jsx';
import CreateUser from '../components/Settings/CreateUser.jsx';
import UsersList from '../components/Settings/UsersList.jsx';
import Topbar from '../components/Topbar.jsx';
import avatarDefault from './../assets/images/app/avatars/default.png';

export default class OptionsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      structure: this.props.match.params.structure
    }

  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: true })
    }, 1000);
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="view options-view">
          <Topbar brand="Options" ico={<GearFill />} />
          <div className="container-fluid mt">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <CardSimple>
                  <CreateUser />
                </CardSimple>
              </div>
              <div className="col-md-6 col-sm-12"> 
                <CardSimple className="mb-3">
                  <div className="myprofile">
                    <div className="avatar">
                      <img src={avatarDefault} alt="" />
                    </div>
                    <div className="who">
                      <h1>BAHA Ephraïm Jean-Samuel</h1>
                      <p>
                        Admin
                      </p>
                    </div>
                    <Button type="button" name="Editer mon profile" />
                  </div>
                </CardSimple>
                <CardSimple>
                  <UsersList />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6d63ff" fill-opacity="1" d="M0,224L120,192C240,160,480,96,720,69.3C960,43,1200,53,1320,58.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
                </CardSimple>
              </div>
            </div>
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
