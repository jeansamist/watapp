import React, { Component } from 'react'
import Loader from '../components/Loader.jsx';

export default class OptionsView extends Component {
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
        <div className="view options-view">
          <h1>Options</h1>
        </div>
      )
    } else {
      return <div className="view loader-view">
        <Loader />
      </div>
    }
  }
}
