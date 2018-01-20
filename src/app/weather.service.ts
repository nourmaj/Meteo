import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

  apiKey="68ad30e98435acc2511a03ab7342765d";
  url;
  constructor(private http:Http) {
    this.url="http://api.openweathermap.org/data/2.5/forecast?q=";
   }

   getWeather(city) {
    return this.http.get(this.url + city  + '&APPID=' + this.apiKey).map( res => res.json());

  }

}
