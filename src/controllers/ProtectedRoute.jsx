import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class ProtectedRoute extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }
  componentWillMount () {
    try {
      this.setState({ isLogin: this.props.isLogin }); 
    } catch (error) {
      // (error);
    }
  }
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={props => {
        if (this.state.isLogin) {
          return <Component {...props} />;
        } else if (this.state.isLogin !== null) {
          if (this.props.redirectUrl !== undefined) {
            return <Redirect to={this.props.redirectUrl} />;
          } else {
            return <Redirect to={"login"} />;
          }
        } else {
          return null;
        }
        }}
      />
    );
  }
}

