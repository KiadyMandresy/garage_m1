import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Car } from '../domain/car';
import { Person } from '../domain/personne';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl + "voit";

  public getData(id: any) {
    // let params = new HttpParams()
    //   .set("idClient",args.idClient);
    const config = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http
      .get<any>(this.baseUrl + "/getByObjectId/" + id, config);
    // .toPromise()
    // .then((res) => <Car[]>res.data)
    // .then((data) => {
    //   console.log(data)
    //   return data
    // });
  }
  public getDataAvailable(id: any) {
    const config = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http
      .get<any>(this.baseUrl + "/getAvalaible/" + id, config);
  }
  public getVoitInGarage(id: any) {
    const config = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http
      .get<any>(this.baseUrl + "/getInGarage/" + id, config);
  }
  public InsertIntoGarage(id: any) {
    const param = {
      "status": 1,
    }
    const config = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };

    return this.http.patch(this.baseUrl + "/updateStatus/" + id, JSON.stringify(param), config);
  }

  public addCar(car: Car): any {
    // car.personne = new Person()
    console.log("addCar_voitureService");
    const param = {
      // 'personne.id': car.personne.id,
      // 'personne.nom': car.personne.nom,
      // 'personne.prenom': car.personne.prenom,
      // 'personne.login': car.personne.login,
      // 'personne.email': car.personne.email,
      // 'personne.mdp': car.personne.mdp,
      // 'personne.categorie': car.personne.categorie,
      "personne": car.personne,
      "nom": car.nom,
      "marque": car.marque,
      "numero": car.numero,
    }
    console.log(param);
    const config = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    };
    return this.http.post<any>(
      this.baseUrl + '/CreateVoit',
      param,
      config
    );
  }
}
