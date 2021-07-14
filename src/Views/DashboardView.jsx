import React, { Component } from 'react'
import Topbar from "./../components/Topbar.jsx";
import { HouseDoorFill } from "react-bootstrap-icons";

export default class DashboardView extends Component {
  render() {
    return (
      <div class="view dashboard-view">
        <Topbar brand="Dashboard" ico={<HouseDoorFill />} />
      </div>
    )
  }
}
