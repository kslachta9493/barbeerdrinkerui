import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface BeerLocation {
  bar: string;
  Price: number;
  customers: number;
}

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(
    private http: HttpClient
  ) { }

  getBeers() {
    return this.http.get<any[]>('/api/beer')
  }
  getBeersOnly() {
    return this.http.get<string[]>('/api/beer_only');
  }
  getBars() {
    return this.http.get<any[]>('/api/bar');
  }
  getBarsSelling(beer: string) {
    return this.http.get<BeerLocation[]>(`/api/bars-selling/${beer}`);
  }
  getTopBarMenu(beer: string) {
    return this.http.get<string[]>(`/api/menu-top/${beer}`)
  }

  getTopDrinkers(beer: string) {
    return this.http.get<string[]>(`/api/drinker-top/${beer}`)
  }
  getBeerManufacturers(beer ?: string): any {
    if (beer) {
      return this.http.get<string>(`/api/beer-manufacturer/${beer}`);
    }
    return this.http.get<string[]>('/api/beer-manufacturer');
  }
  getBarMenu() {
    return this.http.get<any[]>('/api/menu')
  }
}
