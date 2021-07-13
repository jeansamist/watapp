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
  // componentWillMount () {
  //   let childs = this.props.children;
  //   childs.forEach(child => {
  //     child.props.onClick = () => {
  //       console.log('click');
  //     }
  //   })
  // }
  handdleClick (event) {
    event.preventDefault();
    let parent = event.target.parentNode;
    parent.addEventListener("click", (e)=>e.preventDefault())
    parent.classList.toggle('active')
  }

  
  render() {
    return (
      <a href="//#endregion" className="topbar-btn">
        <div className="icone" onClick={this.handdleClick.bind(this)}>
          {this.props.ico}
        </div>
        <div className="dropdown active">
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
        {this.props.ico}{this.props.brand}
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
        <a href="#" className="topbar-btn-user">
          <img src={userDefault} alt="" />
        </a>
      </div>
    </div>
  }
}