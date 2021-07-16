import React, { Component } from 'react'
import Topbar from "./../components/Topbar.jsx";
import { HouseDoorFill } from "react-bootstrap-icons";
import Stats from '../components/Dashboard/Stats.jsx';
import Jumbotron from '../components/Dashboard/Jumbotron.jsx';
import { Button } from '../components/Forms/Buttons'

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
          <section>
            <table>
              <thead>
                <tr>
                  <th>-</th>
                  <th>Nom du produitt</th>
                  <th>Quantité</th>
                  <th>Prix unitaire</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="https://grafikart.fr/uploads/avatars/2/18522.png" alt="" /></td>
                  <td>Fil de fer</td>
                  <td>23</td>
                  <td>300</td>
                  <td><Button type="submit" name="Show" /></td>
                </tr>
                <tr>
                  <td><img src="https://grafikart.fr/uploads/avatars/2/18522.png" alt="" /></td>
                  <td>Fil de fer</td>
                  <td>23</td>
                  <td>300</td>
                  <td><Button type="submit" name="Show" /></td>
                </tr>
                <tr>
                  <td><img src="https://grafikart.fr/uploads/avatars/2/18522.png" alt="" /></td>
                  <td>Fil de fer</td>
                  <td>23</td>
                  <td>300</td>
                  <td><Button type="submit" name="Show" /></td>
                </tr>
                <tr>
                  <td><img src="https://grafikart.fr/uploads/avatars/2/18522.png" alt="" /></td>
                  <td>Fil de fer</td>
                  <td>23</td>
                  <td>300</td>
                  <td><Button type="submit" name="Show" /></td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    )
  }
}
