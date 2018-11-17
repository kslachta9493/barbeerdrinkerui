import { Component, OnInit } from '@angular/core';
import { BarsService, Bar } from '../bars.service';
import { SelectItem } from 'primeng/components/common/selectitem';
declare const Highcharts: any;
@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})

export class BarsComponent implements OnInit {

  barList: string[];
  barDrinkerList: string[];
  barOptions: SelectItem[];
  dayOptions: SelectItem[];
  barTemp: string;
  weekTemp: string;
  constructor( private barService: BarsService) { 
    this.barService.getBarList().subscribe(
      data => {
        this.barList = data;
        this.barOptions = data.map(name => {
          return {
            label: name,
            value: name,
          }
        })
      }
    )
    this.dayOptions = [
      {
        label: 'Weekend',
        value: '1'
      },
      {
        label: 'Weekday',
        value: '0'
      }
    ]
  }

  ngOnInit() {
  }
  filterBars(bar: string) {
    if (bar) {
      this.barService.getTop10Bar(bar).subscribe(
        data => {
          this.barList = data;

          const bars = [];
          const counts = [];
          data.forEach(bar => {
            bars.push(bar.Patron)
            counts.push(bar.sum_total)
          })

          this.makeChart(bars,counts)
        }
      )
    }
  }
  filterBarsBar(bar:string) {
    if (bar) {
      this.barTemp = bar;
    }
    if (this.weekTemp) {
      this.barService.getTopBarDrinkers(this.barTemp, this.weekTemp).subscribe(
        data => {
          this.barDrinkerList = data;
          const beers = [];
          const counts = [];
          data.forEach(beer => {
            beers.push(beer.beer)
            counts.push(beer.beer_count)
          })
          this.renderChart(beers, counts)
        }
      )
  }
  }
  filterBarsWeek(week:string) {
    if (week) {
      this.weekTemp = week;
    }
    if (this.barTemp) {
        this.barService.getTopBarDrinkers(this.barTemp, this.weekTemp).subscribe(
          data => {
            this.barDrinkerList = data;
            const beers = [];
            const counts = [];
            data.forEach(beer => {
              beers.push(beer.beer)
              counts.push(beer.beer_count)
            })
            this.renderChart(beers, counts)
          }
        )
    }
  }
  renderChart(beers: string[], counts:number[]) {
    Highcharts.chart('bargraph1', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top 10 Beer Brands'
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
  makeChart(bars: string[], counts: number[]) {
    Highcharts.chart('bargraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top 10 Spenders'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Patron'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Money Spent'
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
