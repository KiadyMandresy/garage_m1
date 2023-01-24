import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from 'express';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']


})
export default class LoginComponent {
  email: NgModel;
  password: string;
  private router: Router;
  private http: HttpClient;


  login() {
    const body = { username: this.email, password: this.password };
    this.http.post('http://localhost:3000/users/login', body).subscribe(
      res => {
        console.log(res);
        // this.router.navigateByUrl(['/default']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
