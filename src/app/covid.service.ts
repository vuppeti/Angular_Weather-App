import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = '2ccef5d4a466a7c18c5134e92a5cb01d' 
@Injectable({
  providedIn: 'root'
})
export class CovidService {
  errorMsg: string;

  constructor(private http: HttpClient) { }
  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey)
    .pipe(
      catchError(this.handleError)
      );
  }
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
  handleError(error: HttpErrorResponse){
    console.log("lalalalalalalala");
    
    return throwError(error);
    }
}
