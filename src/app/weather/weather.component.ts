import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CovidService } from '../covid.service';

import {FormsModule} from  '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

export class Weather { 
  city: String 
  conditions: String 
  temperature: any 
  icon: String 


  city1: String 
  conditions1: String 
  temperature1: any 
  icon1: String 

  city2: String 
  conditions2: String 
  temperature2: any 
  icon2: String 

  city3: String 
  conditions3: String 
  temperature3: any 
  icon3: String 

  city4: String 
  conditions4: String 
  temperature4: any 
  icon4: String 

  city5: String 
  conditions5: String 
  temperature5: any 
  icon5: String 

  city6: String 
  conditions6: String 
  temperature6: any 
  icon6: String 

  city7: String 
  conditions7: String 
  temperature7: any 
  icon7: String 

  city8: String 
  conditions8: String 
  temperature8: any 
  icon8: String 
}



@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
    <form>
    <div class="form-group">
      
      <div class="input-group">
        <input class="form-control" placeholder="Enter city name">
       </div>
    </div>
  </form>
      
    </div>
    <button type="button" class="btn btn-primary" (click)="activeModal.close('Close click')">Add</button>
    
  `
})


export class NgbdModalContent {
  weather:any;
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent{
  error: any = [];
  printError: any;

  constructor(private modalService: NgbModal , private weatherData: CovidService) {}
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()  
  weather: Weather = new Weather()
  city: String = ""
  
  submit() {
    
    this.weatherData.load(this.city)
    .subscribe(data => {
      
      console.log(data['error'])
      this.weather.city = data['name']
      this.weather.conditions = data['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15)) + '°C'
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
     
    })
    
      
      
   
  }

  submit1() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city1 = data['statusText']
      this.weather.conditions1 = data['weather'][0]['main']
      this.weather.temperature1 = Math.round((data['main']['temp'] - 273.15)) + '°C'
      this.weather.icon1 = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
      
        
    })
  }

  submit2() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city2 = data['name']
      this.weather.conditions2 = data['weather'][0]['main']
      this.weather.temperature2 = Math.round((data['main']['temp'] - 273.15)) + '°C'
      this.weather.icon2 = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }

  submit3() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city3 = data['name']
      this.weather.conditions3 = data['weather'][0]['main']
      this.weather.temperature3 = Math.round((data['main']['temp'] - 273.15)) + '°C'
      this.weather.icon3 = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }

  submit4() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city4 = data['name']
      this.weather.conditions4 = data['weather'][0]['main']
      this.weather.temperature4 = Math.round((data['main']['temp'] - 273.15)) + '°C'
      this.weather.icon4 = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }

  submit5() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city5 = data['name']
      this.weather.conditions5 = data['weather'][0]['main']
      this.weather.temperature5 = Math.round((data['main']['temp'] - 273.15)) + '°C'
      this.weather.icon5 = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }

  submit6() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city6 = data['name']
      this.weather.conditions6 = data['weather'][0]['main']
      this.weather.temperature6 = Math.round((data['main']['temp'] - 273.15)) + '°C'
      this.weather.icon6 = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }

  submit7() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city7 = data['name']
      this.weather.conditions7 = data['weather'][0]['main']
      this.weather.temperature7 = Math.round((data['main']['temp'] - 273.15)) + '°C'
      this.weather.icon7 = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }

  submit8() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city8 = data['name']
      this.weather.conditions8 = data['weather'][0]['main']
      this.weather.temperature8 = Math.round((data['main']['temp'] - 273.15)) + '°C'
      this.weather.icon8 = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }

 
  
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
   Weather = {
    city: "No City",
    conditions: "-",
    temperature: 0,
    icon: ""
  }
  update(weather: Weather) { 
    this.weather = weather 
  }
  }
  


