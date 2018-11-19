import { Component, OnInit } from '@angular/core';
import { DrinkerService } from '../drinker.service';
import { SelectItem } from 'primeng/components/common/selectitem';
declare const Highcharts: any;

@Component({
  selector: 'app-drinker',
  templateUrl: './drinker.component.html',
  styleUrls: ['./drinker.component.css']
})
export class DrinkerComponent implements OnInit {
  drinkerTrans: string[];
  drinkersList: any[];
  drinkerOptions: SelectItem[];
  filterOptions: SelectItem[];
  drinkerBeerMost: string[];
  drinkerBarMost: string[];
  drinkerMonth: string;
  drinkerName: string;
  constructor(private drinkerService: DrinkerService) { 
        this.drinkerService.getAllDrinkers().subscribe(
          data => {
            this.drinkersList = data
            this.drinkerOptions = data.map(name => {
              return {
                label: name,
                value: name,
              }
            })
          }
        )
        this.filterOptions = [
          {
            label: 'January',
            value: '1'
          },
          {
            label: 'Febuary',
            value: '2'
          },
          {
            label: 'March',
            value: '3'
          },
          {
            label: 'April',
            value: '4'
          },
          {
            label: 'May',
            value: '5'
          },
          {
            label: 'June',
            value: '6'
          },
          {
            label: 'July',
            value: '7'
          },
          {
            label: 'August',
            value: '8'
          },
          {
            label: 'September',
            value: '9'
          },
          {
            label: 'October',
            value: '10'
          },
          {
            label: 'November',
            value: '11'
          },
          {
            label: 'December',
            value: '12'
          }
        ]
  }

  ngOnInit() {
  }
  filterDrinker(name: string) {
    this.drinkerService.getDrinkerTrans(name).subscribe(
      data => {
        this.drinkerTrans = data
      }
    )
  }
  filterDrinkerBeerMost(name: string) {
    this.drinkerService.getDrinkerBeerMost(name).subscribe(
      data => {
        this.drinkerBeerMost = data
        const beers = [];
        const counts = [];
        data.forEach(beer => {
          beers.push(beer.Beer)
          counts.push(beer.beer_count)
        })

        this.makeChart(beers,counts)
      }
    )
  }
  filterDrinkerBarMost(name: string) {
    this.drinkerService.getDrinkerBarMost(name).subscribe(
      data => {
        this.drinkerBarMost = data
        const bars = [];
        const counts = [];
        data.forEach(bar => {
          bars.push(bar.Bar)
          counts.push(bar.bar_total)
        })

        this.renderChart(bars,counts)
      }
    )  
  }
  filterDrinkerPerBarDrinker(name: string) {
    if(this.drinkerMonth) {
      this.drinkerService.getDrinkerBarTotal(name, this.drinkerMonth).subscribe(
        data => {
          const bars = [];
          const counts = [];
          data.forEach(bar => {
            bars.push(bar.bar)
            counts.push(bar.total)
          })
  
          this.buildChart(bars,counts)
        }
      )
    }
    this.drinkerName = name;
  }
  filterDrinkerPerBarMonth(month: string) {
    if(this.drinkerName) {
      this.drinkerService.getDrinkerBarTotal(this.drinkerName, month).subscribe(
        data => {
          const bars = [];
          const counts = [];
          data.forEach(bar => {
            bars.push(bar.bar)
            counts.push(bar.total)
          })
  
          this.buildChart(bars,counts)
        }
      )
    }  
    this.drinkerMonth = month;  
  }
  buildChart(beers: string[], counts: number[]) {
    Highcharts.chart('bargraphDrinkerAll', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Bars Vs Amount spent for a single patron'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Bars'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Spent'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    })
  }
  makeChart(beers: string[], counts: number[]) {
    Highcharts.chart('bargraphDrinkerBeerMost', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top 10 Beers'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Beer'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Bought'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    })
  }
  renderChart(bars: string[], counts: number[]) {
    Highcharts.chart('bargraphDrinkerBarMost', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Spending per bar'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Bar'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Spent'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    })
  }
}
