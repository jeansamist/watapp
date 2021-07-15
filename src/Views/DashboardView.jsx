import React, { Component } from 'react'
import Topbar from "./../components/Topbar.jsx";
import { HouseDoorFill } from "react-bootstrap-icons";
import Stats from '../components/Dashboard/Stats.jsx';
import Jumbotron from '../components/Dashboard/Jumbotron.jsx';

export default class DashboardView extends Component {
  render() {
    return (
      <div className="view dashboard-view">
        <Topbar brand="Dashboard" ico={<HouseDoorFill />} />
        <div className="container-fluid">
          <section className="first-section">
            <div className="row">
              <div className="col-md-5">
                <Jumbotron>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptas porro magnam molestiae illo expedita consectetur excepturi provident voluptatum nesciunt illum soluta molestias corrupti, deserunt officia optio ducimus veritatis dolores?
                </Jumbotron>
              </div>
              <Stats />
            </div>
          </section>
        </div>
      </div>
    )
  }
}
