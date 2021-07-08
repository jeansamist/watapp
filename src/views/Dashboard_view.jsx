import React from "react";
import { Line } from "react-chartjs-2";

export default class Dashboard_view extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      chartData: {}
    }
  }
  componentDidMount(){
    let c
  }
  render () {
    const data = (canvas) => {
      const ctx = canvas.getContext("2d")
      const gradient = ctx.createLinearGradient(0,0,0, 1000);
      gradient.addColorStop(0, "#52B788")
      gradient.addColorStop(1, "rgba(255,255,255,0)")
        return {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [65, 59, 80, 81, 56, 100, 40],
              fill: true,
              backgroundColor: gradient,
              borderColor: "#52B788"
            }
          ]
        }
      }
    return <div className="dashboard view">
      <div className="view-title title">
        Dashboard
      </div>
      .

      <Line
        data={data}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        }}
        width={600}
        height={400}
      />
    </div>
  }
}