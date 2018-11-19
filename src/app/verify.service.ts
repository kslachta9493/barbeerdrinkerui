import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient) {

   }
   getTestBartender(){
     return this.http.get<string>('/api/test-bartender');
   }
   getTestBeer(){
    return this.http.get<string>('/api/test-beers');
  }
  getTestDrinkers(){
    return this.http.get<string>('/api/test-drinkers');
  }
  getTestTrans(){
    return this.http.get<string>('/api/test-trans');
  }
  getTestTwoBeers(){
    return this.http.get<string>('/api/test-twobeers');
  }
}
