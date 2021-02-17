
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Lines extends React.Component {
  render() {
    return (
      
       <div className="line_chart">
    <HighchartsReact highcharts={Highcharts} options={{
  chart: {
    type: 'spline'
  },
  title: {
    text: ''
  },
  legend: {
    enabled: false
},
tooltip: {
    formatter: function () {
        return this.y;
    }
},
  xAxis: {
    
    visible:false,
    labels:
    {
        enabled: false
    }
},
yAxis:{
title:''
},
  series: [
    {
        name:'',
      data: [1, 2, 1, 4, 3, 6]
    }
  ]
}} />
  </div>
     
    );
  }
}

export default Lines;