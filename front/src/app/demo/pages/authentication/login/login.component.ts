import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from 'express';
import { FormsModule, NgModel } from '@angular/forms';
import { AuthService } from 'src/app/services/authService';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']


})
export default class LoginComponent {
  email: string;
  password: string;

  constructor(
    private authService : AuthService
  ){}

  public login() {
    this.authService.checkLogin(this.email,this.password);
    // const body = { username: this.email, password: this.password };
    // this.http.post('http://localhost:3000/users/login', body).subscribe(
    //   res => {
    //     console.log(res);
    //     // this.router.navigateByUrl(['/default']);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    
  }

}
