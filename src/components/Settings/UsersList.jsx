import React, { Component } from 'react'
import { CardUser } from '../Cards';
import avatarDefault from './../../assets/images/app/avatars/default.png';

export default class UsersList extends Component {
  render() {
    return (
      <>
        <h1 className="mb">Les utilistateurs enregister</h1>
        <CardUser userName="Admin" avatar={avatarDefault} />
        <CardUser userName="Admin" avatar={avatarDefault} />
        <CardUser userName="Admin" avatar={avatarDefault} />
        <CardUser userName="Admin" avatar={avatarDefault} />
      </>
    )
  }
}
