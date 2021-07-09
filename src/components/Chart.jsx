import React from 'react'
import { Line, Bar } from "react-chartjs-2";

/**
 * Créé un Chart soit Line soit Bar
 */
export default class Chart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      chartName: props.type,
      chartData: props.data
    }
  }
  whichChart (data) {
    if (this.state.chartName == "line") {
      return <Line
        data={data}
        options={{
          maintainAspectRatio: true,
          legend: {
            display: false
          }
        }}
      />
    } else if (this.state.chartName == "bar") {
      return <Bar
        data={data}
        options={{
          maintainAspectRatio: true
        }}
      />
    }
  }
  render () {
    const data = {
      labels: this.state.chartData.labels,
      datasets: [{
        label: this.state.chartData.title,
        data: this.state.chartData.data,
        fill: true,
        tension: 0.4,
        backgroundColor: "#52b7888e",
        borderColor: "#52B788",
        borderWidth: 3
      }]
    }
    return <div className="chart-container">
      {this.whichChart(data)}
    </div>
  }
}