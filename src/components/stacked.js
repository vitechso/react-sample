
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Stacked extends React.Component {
  render() {
    return (
      
       <div>
    <HighchartsReact highcharts={Highcharts} options={{

chart: {
    type: 'column'
},

title: {
    text: ''
},

xAxis: {
    categories: ['1', '2', '3', '4', '5']
},
legend: {
    enabled: false
},

yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
        text: ''
    }
},

tooltip: {
    formatter: function () {
        return 'Total: ' + this.point.stackTotal;
    }
},

plotOptions: {
    column: {
        stacking: 'normal'
    }
},

series: [{
    name: '',
    data: [5, 3, 4, 7, 2],
    stack: 'male'
}, {
    name: '',
    data: [3, 4, 4, 2, 5],
    stack: 'male'
}, {
    name: '',
    data: [2, 5, 6, 2, 1],
    stack: 'female'
}, {
    name: '',
    data: [3, 0, 4, 4, 3],
    stack: 'female'
}]
}} />
  </div>
     
    );
  }
}

export default Stacked;