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
  drinkerBeerMost: string[];
  drinkerBarMost: string[];
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
