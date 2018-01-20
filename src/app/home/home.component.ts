import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Nameville:any;
ville:any;
listicon:any;
icon="http://openweathermap.org/img/w/";
 weatherFinal:any;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    
  }

  WeatherVille(ville){
    this.weatherService.getWeather(ville).subscribe((response) => {
      this.Nameville = response;
      this.weatherFinal = response.list[0];
      console.log(this.weatherFinal);
      this.listicon= this.weatherFinal.weather;
      console.log(this.weatherFinal.weather);
      
      this.ville = "";
  })

}
}

