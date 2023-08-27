import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  Highcharts = Highcharts
  chartOptions = {}

  constructor(){
    this.chartOptions={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Average Student Admission 2023',
          align: 'center'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Courses',
          colorByPoint: true,
          data: [{
              name: 'MEARN',
              y: 35.67,
              // sliced: true,
              selected: true
          }, {
              name: 'Python',
              y: 20.77
          },  {
              name: 'Testing',
              y: 18.86
          }, {
              name: 'Data Science',
              y: 2.63
          }, {
              name: '.NET',
              y: 3.53
          },  {
              name: 'AI-ML',
              y: 4.40
          }, {
              name: 'Java',
              y: 4.84
          }, {
              name: 'QQ',
              y: 3.51
          }, {
              name: 'Other',
              y: 2.6
          }]
      }]
  }
  }
}
