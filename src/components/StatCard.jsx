import React from 'react'

export default class StatCard extends React.Component {
  render() {
    return (
      <div className="col-sm-12 col-md-6 col-xl-3">
        <div className="stat-card">
          <div className="stat-card-data">
            <div className="stat-card-title">{this.props.title}</div>
            <div className="stat-card-number">{this.props.data}</div>
          </div>
          <div className="stat-card-ico">
            {this.props.ico}
          </div>
        </div>
      </div>
    )
  }
}