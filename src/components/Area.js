
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Area extends React.Component {
  render() {
    return (
      
       <div>
    <HighchartsReact highcharts={Highcharts} options={{
    chart: {
        type: 'area'
    },
    title:{
        text:''
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050','2200','2500','3000'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        },
        visible:false
    },
    legend: {
        enabled: false
    },
    yAxis: {
        visible:false,
        title: {
            text: 'Billions'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        valueSuffix: ' millions',
        formatter: function () {
            return this.y;
        }
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            },
            color:'green'
        }
    },
    series: [{
        name: '',
        data: [3600,5268,4500, 6500,6000, 9000, 8000, 10000, 9000, 13000]
    }, {
        name: '',
        type:'line',
        data: [3300, 6000, 4500, 7800, 6500, 9500, 8000,10500,10000,13500]
    }]
}} />
  </div>
     
    );
  }
}

export default Area;