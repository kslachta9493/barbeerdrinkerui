import { Component, OnInit } from '@angular/core';
import { BeersService, BeerLocation } from '../beers.service';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem'

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerName: string;
  beerLocations: BeerLocation[];
  manufacturer: string;
  filterOptions: SelectItem[];
  sortField: string;
  sortOrder: number;

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute

  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer')

      this.beerService.getBarsSelling(this.beerName).subscribe(
        data => {
          this.beerLocations = data;
        }
      )
      
      this.beerService.getBeerManufacturers(this.beerName).subscribe(
        data => {
          this.manufacturer = data;
        }
      )

      this.filterOptions = [
        {
        'label': 'Low price first',
        'value': 'low price'
        },
        {
          'label': 'High price first',
          'value': 'high price' 
        },
        {
          'label': 'Most Frequented First',
          'value': 'high customer' 
        },
        {
          'label': 'Least Frequented First',
          'value': 'low customer' 
        }
      ]
    })
  }

  ngOnInit() {
  }
  sortBy(selectedOptions: string) {
    if (selectedOptions === 'low price') {
      this.beerLocations.sort((a,b) => {
        return a.Price - b.Price;
      })
    } else if (selectedOptions === 'high price') {
      this.beerLocations.sort((a,b) => {
        return b.Price - a.Price;
      })
    } else if (selectedOptions === 'low customer') {
      this.beerLocations.sort((a,b) => {
        return a.customers - b.customers;
      })
    } else if (selectedOptions === 'high customer') {
      this.beerLocations.sort((a,b) => {
        return b.customers - a.customers;
      })
    }
  }

}
