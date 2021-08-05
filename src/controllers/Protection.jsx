import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from './App.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Login from './Login.jsx';
import SelectStructure from '../Views/SelectStructure.jsx';
import * as Config from "./../config/Variables";

class GoToStructure extends Component {
  render() {
    return (
      <Redirect to="/structures" />
    )
  }
}

export default class Protection extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLogin: null,
      isLoading: false
    }
  }
  
  componentDidMount () {
    try {
      let watapp_user = localStorage.getItem("watapp_user");
      if (watapp_user !== null) {
        fetch(`${Config.server}services/user_is_connected.php?watapp_user=${watapp_user}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          this.setState({isLogin: result.response_data, isLoading: true})
        })
      } else {
        this.setState({isLogin: false, isLoading: true })
      }
      
    } catch (error) {
      this.setState({isLogin: false, isLoading: true })
    }
  }
  
  render() {
    if (this.state.isLoading) {
      return (
        <Router>
          <Route path="/login">
            <Login isLogin={this.state.isLogin} />
          </Route>
          {console.log("isLogin", this.state.isLogin)}
          <ProtectedRoute k={0} path="/structures" isLogin={this.state.isLogin} component={SelectStructure} />
          <ProtectedRoute k={1} path="/watapp/*/:structure" isLogin={this.state.isLogin} component={App} redirectUrl="../login" />
          <ProtectedRoute k={2} path="/" isLogin={this.state.isLogin} component={GoToStructure} />
        </Router>
      )
    } else {
      return 'Loading...'
    }
    
  }
}
