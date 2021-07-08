import React from "react";
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import logo from './../assets/images/logo/watapp-logo-svg-white.svg';

export default class Sidebar extends React.Component {
  
  
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
    let links = linksList.map((l, k) => <li className="sidebar-link">
      <Link to={l.href}>
        {l.Ico}
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