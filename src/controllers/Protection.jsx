import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from './App.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Login from './Login.jsx';
import SelectStructure from '../Views/SelectStructure.jsx';


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
    let response;
    try {
      response = {
        data: {
          isLogin: localStorage.getItem('isLogin')
        }
      }
    } catch (error) {
      response = {
        data: {
          isLogin: false
        }
      }
    }
    setTimeout(() => {
      if (response.data.isLogin) {
        this.setState({isLogin: true, isLoading: true});
      } else {
        this.setState({isLogin: false, isLoading: true});
      }
    }, 3000);
  }
  
  render() {
    if (this.state.isLoading) {
      return (
        <Router>
          <Route path="/login">
            <Login isLogin={this.state.isLogin} />
          </Route>
          {console.log("isLogin", this.state.isLogin)}
          <ProtectedRoute path="/structures" isLogin={this.state.isLogin} component={SelectStructure} />
          <ProtectedRoute path="/watapp/*/:structure" isLogin={this.state.isLogin} component={App} redirectUrl="../login" />
          <ProtectedRoute path="/" isLogin={this.state.isLogin} component={GoToStructure} />
        </Router>
      )
    } else {
      return 'Loading...'
    }
    
  }
}
