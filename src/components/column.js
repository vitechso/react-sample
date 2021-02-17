
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Column extends React.Component {
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
        categories: [
            '1',
            '2',
            '3',
            '4',
           
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: ''
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<tr>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    
    credits: {
        enabled: false
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        series: {
            colorByPoint: true,
            colors: ['#FFC133','#8CD163','blue','red']
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: '',
        data: [49.9, 71.5, 106.4, 129.2]

    }]
}} />
  </div>
     
    );
  }
}

export default Column;