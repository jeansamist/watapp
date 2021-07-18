import React, { Component } from 'react'
import applicationLogo from './../assets/images/app/logo/watapp-logo-svg.svg';
import avatarDefault from './../assets/images/app/avatars/default.png';
import { HouseDoorFill, BagFill, PeopleFill, GearFill } from 'react-bootstrap-icons';
import {
  Link
} from "react-router-dom";
class SidebarLink extends Component {
  render() {
    return (
      <Link to={this.props.href} className={"sidebar-link-key-" + this.props.k + " sidebar-link"}>
        {this.props.ico}
        <span>{this.props.name}</span>
      </Link>
    )
  }
}

class SidebarUser extends Component {
  state = {
    avatar: avatarDefault,
    userName: "BAHA Ephraïm",
    userPseudo: "Admin"
  }
  render() {
    return (
      <div className="sidebar-user">
        <div className="user-avatar">
          <img src={this.state.avatar} alt={this.state.userPseudo + " avatar"} />
        </div>
        <div className="user-infos">
          <h3>{this.state.userName}</h3>
          <div>{this.state.userPseudo}</div>
        </div>
      </div>
    )
  }
}

export default class Sidebar extends Component {
  links = [
    {
      name: "Dashboard",
      ico: <HouseDoorFill />,
      href: "/watapp/dashboard"
    },
    {
      name: "Commerce",
      ico: <BagFill />,
      href: "/watapp/shopping"
    },
    {
      name: "Clients",
      ico: <PeopleFill />,
      href: "#"
    },
    {
      name: "Parametres",
      ico: <GearFill />,
      href: "#"
    },
  ]
  buildLinks () {
    return this.links.map((link, k) => <SidebarLink k={k} key={k} href={link.href} ico={link.ico} name={link.name} />);
  }
  componentDidMount () {
    let keyOfWhoActived = this.props.k;
    let whoToActive = document.querySelector(".sidebar-link-key-" + keyOfWhoActived);
    whoToActive.classList.add('active');

  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-brand">
          <img src={applicationLogo} alt="application logo" className="sidebar-brand-logo" />
          {/* <span className="sidebar-brand-menu-btn"><ArrowLeftCircleFill /></span> */}
        </div>
        <div className="sidebar-links">
          {this.buildLinks()}
        </div>
        <SidebarUser id={1} />
      </div>
    )
  }
}
