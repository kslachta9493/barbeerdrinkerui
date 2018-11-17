import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers: any[];
  bars: any[];
  menuList: string[];
  drinkerList: string[];
  beerOptions: SelectItem[];
  manufacturerOptions: SelectItem[];

  originalBeersList: any[];
  originalBarsList: any[];

  constructor( private beerService: BeersService) { 
    this.beerService.getBeers().subscribe(
      data => {
        this.beers = data;
        this.originalBeersList = data;
      }
    )
    this.beerService.getBarMenu().subscribe(
      data => {
        this.menuList = data;
      }
    )
    this.beerService.getBars().subscribe(
      data => {
        this.bars = data;
        this.originalBarsList = data;
      }
    )
    this.beerService.getBeerManufacturers().subscribe(
      data => {
        this.manufacturerOptions = data.map(manf => {
          return {
            label: manf,
            value: manf,
          }
        })
      }
    )
    this.beerService.getBeersOnly().subscribe(
      data => {
        this.beerOptions = data.map(beer => {
          return {
            label: beer,
            value: beer,
          }
        })
      }
    )
  }

  ngOnInit() {
  }

  filterBeers(manufacturer: string) {
    this.beers = this.originalBeersList;
    if (manufacturer) {
      this.beers = this.originalBeersList.filter(beer => beer.manf === manufacturer)
    }
  }
  filterBeerAnalytics(beer: string) {
    //this.menus = this.originalMenuList;
    this.beerService.getTopBarMenu(beer).subscribe(
      data => {
        this.menuList = data;
      }
    )
  }
  filterDrinkerAnalytics(beer: string) {
    //this.menus = this.originalMenuList;
    this.beerService.getTopDrinkers(beer).subscribe(
      data => {
        this.drinkerList = data;
      }
    )
  }
}
