import React, { Component } from 'react'
import Loader from '../components/Loader.jsx';

export default class ShoppingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      structure: this.props.match.params.structure
    }

  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: true })
    }, 5000);
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="view shopping-view">
          <h1>Shopping</h1>
        </div>
      )
    } else {
      return <div className="view loader-view">
        <Loader />
      </div>
    }
  }
}
