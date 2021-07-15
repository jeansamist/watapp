import React, { Component } from 'react'

export default class StatCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      evaluation: null
    }
  }
  
  componentDidMount () {
    if (this.props.newData < this.props.oldData && this.props.newData !== 0 && this.props.newData !== null) {
      let percent = (this.props.newData * 100) / this.props.oldData;
      let difference = 100 - Math.round(percent);
      this.setState({ evaluation: "-" + difference + "%" });
    } else {
      let percent = (this.props.newData * 100) / this.props.oldData;
      let difference = Math.round(percent) - 100;
      this.setState({ evaluation: "+" + difference + "%" });
    }
  }
  render() {
    return (
      <div className="stat-card">
        <div className="stat-card-head">
          <div className="stat-card-ico">
            {this.props.ico}
          </div>
          <div className="stat-card-evaluation">
            {this.state.evaluation}
          </div>
        </div>
        <div className="stat-card-data">{Math.round(this.props.newData)}</div>
        <div className="stat-card-name">{this.props.name}</div>
      </div>
    )
  }
}
