import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/authService';
import { Car } from 'src/app/domain/car';
import { Person } from 'src/app/domain/personne';
import { FormsModule, NgModel } from '@angular/forms';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  @Input() nom: string;
  @Input() prenom: string;
  @Input() email: string;
  @Input() password: string;
  
  constructor(
    private authService : AuthService
  ){}
  public register(){
    let personne = new Person(this.email,this.nom,this.prenom,this.password);
    this.authService.register(personne).subscribe(res=> {return res},err=>{console.log(err)});
    console.log("button Clicked");
  }
}
