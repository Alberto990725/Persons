import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  public server:string = 'https://localhost:7271';

  constructor(private _http:HttpClient) { }

  public getPersonas(){
    return this._http.get(`${this.server}/api/Personas/get_personas`);
  }

}
