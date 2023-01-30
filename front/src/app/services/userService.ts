import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { Car } from '../domain/car';
import { Person } from '../domain/personne';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient,
        private router: Router) { }

    baseUrl = environment.apiUrl + "users";

    public getByObjectId(id: any): Observable<Person> {
        const config = { headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + localStorage.getItem('token'))};
        return this.http.get<any>(
            this.baseUrl+'/getVoit/'+id,
            config
        );
        
    }
}