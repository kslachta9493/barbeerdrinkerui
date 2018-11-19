import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Bar {
  name: string;
  address: string;
  WeekOpen: string;
  WeekClose: string;
  WeekendOpen: string;
  WeekendClose: string;
  State: string;
}

export interface BarMenuItem {
  beer: string;
  manf: string;
  price: number;
  likes: number;
}
@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http: HttpClient
  ) { }
  getBars() {
    return this.http.get<Bar[]>('/api/bar');
  }
  getBar(bar: string) {
    return this.http.get<Bar>('/api/bar/' + bar)
  }
  getBarList() {
    return this.http.get<string[]>('/api/bar-only');
  }
  getTop10Bar(bar: string) {
    return this.http.get<any[]>(`/api/bar-spender-10/${bar}`);
  }
  getMenu(bar: string) {
    return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  }
  getTopBarDrinkers(bar:string, week:string) {
    return this.http.get<any[]>(`/api/bar-top/${bar}&${week}`)
  }

  getFrequentCounts() {
    return this.http.get<any[]>('/api/frequents-data')
  }
  getBarDay(bar: string) {
    return this.http.get<any[]>(`/api/bar-time-day/${bar}`)
  }
  getBarHour(bar: string) {
    return this.http.get<any[]>(`/api/bar-time-hour/${bar}`)
  }
  getBarInventory(bar: string) {
    return this.http.get<any[]>(`/api/bar-inventory/${bar}`)
  }
}
