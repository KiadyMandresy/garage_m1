import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/userService';
import { Car, Cars } from 'src/app/domain/car';
import { FormsModule, NgModel } from '@angular/forms';
import { ApiService} from 'src/app/services/voitureService';
import { Person } from 'src/app/domain/personne';
import { catchError, concatMap, of, tap } from 'rxjs';



@Component({
  selector: 'app-new-car',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export default class RegisterComponent {
  @Input() nom: string;
  @Input() marque: string;
  @Input() numero: string;
  
  constructor(
    private voitureService : ApiService
  ){}
  public  addCar()
  {
    var id = sessionStorage.getItem('_id');
    if (!sessionStorage.getItem('_id')) {
      console.log("id is not present in the session storage");
      return;
    }
    let car : Cars;
    car = new Cars();
    car.personne = id;
    car.marque = this.marque;
    car.nom = this.nom;
    car.numero = this.numero;
    console.log(car);
    this.voitureService.addCar(car).subscribe(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        console.error(error);
      }
    );
    //       console.log(car.personne)
    //       return this.voitureService.addCar(car);
    // this.userService.getByObjectId(id)
    //   .pipe(
    //     concatMap(
    //     res => {
    //       //console.log(res);
    //       //personne = new Person(res.email,res.nom,res.prenom,res.mdp,Number(res.id),res.login,res.categorie)
    //       //personne = res,
    //       //console.log(res);
    //       car = new Cars(res._id,this.nom,this.marque,this.numero)
    //       console.log(car.personne)
    //       return this.voitureService.addCar(car);
    //     }),
    //     catchError((error) => {
    //       console.log(error);
    //       return of(error);
    //     })
    //   ).subscribe();
    //this.voitureService.addCar(car);
  }
  // this.userService.getById(id)
  //     .pipe(
  //       concatMap(
  //       res => {
  //         console.log(res);
  //         personne = res,
  //         console.log(res.id);
  //         car = new Cars(personne,this.nom,this.marque,this.numero),
  //         console.log(car.personne)
  //         return this.voitureService.addCar(car);
  //       }),
  //       catchError((error) => {
  //         console.log(error);
  //         return of(error);
  //       })
  //     ).subscribe();
}
