import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManfService {

  constructor(
    private http: HttpClient
  ) { }

  getManfBeers(manf: string) {
    return this.http.get<string[]>(`/api/manf/${manf}`)
  }
}
