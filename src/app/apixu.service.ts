import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get(
      'https://api.weatherstack.com/current?access_key= YOUR API KEY GOES HERE &units=f&query=' + location
    );
  }
}
