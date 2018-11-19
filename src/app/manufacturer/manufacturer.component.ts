import { Component, OnInit } from '@angular/core';
import { ManfService} from '../manf.service'
import { SelectItem } from 'primeng/components/common/selectitem';
declare const Highcharts: any;
@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})

export class ManufacturerComponent implements OnInit {
  manfOptions: SelectItem[];
  manfCities: string[];
  constructor(private manfService: ManfService) {
    this.manfService.getAllManf().subscribe(
      data => {
        this.manfOptions = data.map(name => {
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

  filterManf(manf: string) {
    this.manfService.getManfCity(manf).subscribe(
      data => {
        this.manfCities = data
        const cities = [];
        const counts = [];
        data.forEach(city => {
          cities.push(city.city)
          counts.push(city.sold_count)
        })
        this.renderChart(cities, counts)
      }
    )
  }
  filterManfCity(manf: string) {
    this.manfService.getManfTopCity(manf).subscribe(
      data => {
        this.manfCities = data
        const cities = [];
        const counts = [];
        data.forEach(city => {
          cities.push(city.City)
          counts.push(city.Total)
        })
        this.buildChart(cities, counts)
      }
    )
  }
  buildChart(beers: string[], counts:number[]) {
    Highcharts.chart('bargraphTopCities', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Cities for October'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'City'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Sold'
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
  renderChart(beers: string[], counts:number[]) {
    Highcharts.chart('bargraphCities', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Cities'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'City'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount Sold'
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
