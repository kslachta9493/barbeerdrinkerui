import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BartenderService {

  constructor(private http: HttpClient) {  }
  getBartenders() {
      return this.http.get<any[]>('/api/bartenders')
  }
  getBartenderShifts(name) {
      return this.http.get<any[]>(`/api/bartender/${name}`)
  }

  getBartendersSold(name) {
    return this.http.get<any[]>(`/api/bartender-sold/${name}`)
  }
}
