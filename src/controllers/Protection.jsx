import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Login from './Login.jsx';

export default class Protection extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLogin: null,
      isLoading: false
    }
  }
  
  componentDidMount () {
    let response = {
      data: {
        isLogin: false
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
          <Route path="/login" component={Login} />
          {console.log(this.state.isLogin)}
          <ProtectedRoute path="/" isLogin={this.state.isLogin} component={App} />
        </Router>
      )
    } else {
      return 'Loading...'
    }
    
  }
}
