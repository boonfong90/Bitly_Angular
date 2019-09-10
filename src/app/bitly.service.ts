import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = "http://localhost:3000/bit.ly/urls"

@Injectable({
  providedIn: 'root'
})
export class BitlyService {

  constructor(private http: HttpClient) { }

  showAllURL(){
    return this.http.get(BASE_URL)
  }

  showURL(id){
    return this.http.get(`${BASE_URL}/${id}`)
  }

  shorten(url){
    
    const params = {
      url: url,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }

    return this.http.post(BASE_URL, params, httpOptions)
  }
}
