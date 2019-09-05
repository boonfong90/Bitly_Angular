import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = "https:///bit.ly/urls"

@Injectable({
  providedIn: 'root'
})
export class BitlyService {

  constructor(private http: HttpClient) { }

  showAllURL(){
    return this.http.get(`${BASE_URL}`)
  }
}
