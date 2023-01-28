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

  public addCar(car: Car): any{
    // car.personne = new Person()
    const param = {
      'personne.id': car.personne.id,
      'personne.nom': car.personne.nom,
      'personne.prenom': car.personne.prenom,
      'personne.login': car.personne.login,
      'personne.email': car.personne.email,
      'personne.mdp': car.personne.mdp,
      'personne.categorie': car.personne.categorie,
      'nom': car.nom,
      'marque': car.marque,
      'numero': car.numero,
    }
    const config = { headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'))};
        return this.http.post<any>(
            this.baseUrl+'/CreateVoit',
            param,
            config
        );
  }
}
