import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApixuService } from '../apixu.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
    ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues) {
   this.apixuService
   .getWeather(formValues.location)
   .subscribe(data => this.weatherData = data)
    console.log(this.weatherData);
  }


  userSearch:boolean = false;
  userSearchFunction(){
    this.userSearch=true;
  }

  welcomediv:boolean = true;
  welcomeDivFunction(){
    this.welcomediv=false;
  }

}


