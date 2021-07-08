import React from "react";
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import logo from './../assets/images/logo/watapp-logo-svg-white.svg';

export default class Sidebar extends React.Component {
  constructor (props) {
    super(props);
    this.sidebarLinkHanddleClick = this.sidebarLinkHanddleClick.bind(this);
  }
  sidebarLinkHanddleClick (event) {
    event.stopPropagation()
    let target = event.target;
    let links = target.parentNode.parentNode.parentNode;
    let link = target.parentNode.parentNode;
    if (links.classList.contains('sidebar-links')) {
      let oldActive = links.querySelector(".active");
      if (oldActive) {
        if (oldActive.classList.contains('active')) {
          oldActive.classList.remove("active")
          link.classList.add("active")
        } else {
          link.classList.add("active")
        }
      } else {
        link.classList.add("active")
      }
    }
  }
  
  render () {
    let linksList = [
      {
        href: '/',
        Ico: <Icon.Grid1x2Fill />
      },
      {
        href: '/stockmanager',
        Ico: <Icon.BoxSeam />
      },
      {
        href: '/customermanager',
        Ico: <Icon.PeopleFill />
      },
      {
        href: '/options',
        Ico: <Icon.GearFill />
      }
    ];
    let links = linksList.map((l, k) => <li key={k} className="sidebar-link" onClick={this.sidebarLinkHanddleClick}>
      <Link to={l.href}>
        {l.Ico}
        <div className="fakerBtn"></div>
      </Link>
    </li>)
    return <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links-part">
        <ul className="sidebar-links">
          {links}
        </ul>
      </div>
    </div>
  }
}