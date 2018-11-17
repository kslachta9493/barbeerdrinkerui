import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkerService {

  constructor(private http: HttpClient) { }

  getDrinkerInfo(drinker) {
    return this.http.get<string[]>(`/api/drinker/${drinker}`)
  }

  getFrequents(name) {
    return this.http.get<string[]>(`/api/frequents/${name}`)
  }

  getDrinkerTrans(name) {
    return this.http.get<any[]>(`/api/trans/${name}`)
  }

  getAllDrinkers() {
    return this.http.get<any[]>('/api/drinker-only')
  }

  getDrinkerBeerMost(name) {
    return this.http.get<any[]>(`/api/drinker-beer-most/${name}`)
  }

  getDrinkerBarMost(name) {
    return this.http.get<any[]>(`/api/drinker-bar-most/${name}`)
  }
}
