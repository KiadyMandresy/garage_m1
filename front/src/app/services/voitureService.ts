import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../domain/car';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl + "voit";

  public getData(args: any){
    let params = new HttpParams()
      .set("idClient",args.idClient);
    return this.http
    .get<any>(this.baseUrl+"/getAllVoiture",{params: params})
    .toPromise()
    .then((res) => <Car[]>res.data)
    .then((data) => {
      return data
    });
  }
}
