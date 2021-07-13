import React, { Component } from 'react'
import { BellFill, Mailbox } from "react-bootstrap-icons";
import userDefault from './../assets/images/app/user-default.jpg'
class DropdownItem extends Component {
  render() {
    return (
      <a href={this.props.href} className="dropdown-item">
        <div className="dropdown-item-image">
          <img src={this.props.image} />
        </div>
        <div className="dropdown-item-data">
          <h3 className="dropdown-item-title">
            {this.props.title}
          </h3>
          <p className="dropdown-item-text">
            {this.props.children}
          </p>
        </div>
      </a>
    )
  }
}
class TopbarBtn extends Component {
  render() {
    return (
      <a href="//#endregion" className="topbar-btn">
        <div className="icone">
          {this.props.ico}
        </div>
        <div className="dropdown">
          {this.props.children}
        </div>
      </a>
    )
  }
}


export default class Topbar extends Component {
  render () {
    return <div className="topbar">
      <div className="topbar-brand">
        {this.props.ico}   {this.props.brand}
      </div>
      <div className="topbar-search">

      </div>
      <div className="topbar-tools">
        <TopbarBtn ico={<BellFill />}>
          <DropdownItem title="Dropdown" href="//#region" image={userDefault}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </DropdownItem>
          <DropdownItem title="Dropdown" href="//#region" image={userDefault}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </DropdownItem>
          <DropdownItem title="Dropdown" href="//#region" image={userDefault}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </DropdownItem>
          <DropdownItem title="Dropdown" href="//#region" image={userDefault}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </DropdownItem>
        </TopbarBtn>
        {/* <TopbarBtn ico={<Mailbox />} /> */}
        <div className="topbar-user-btn">
          {/* <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" alt="" /> */}
        </div>
      </div>
    </div>
  }
}