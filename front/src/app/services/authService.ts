import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean = false;    
    // store the URL so we can redirect after logging in
    public redirectUrl: string;

    constructor(
        private http: HttpClient,
        private router: Router) { }

    baseUrl = environment.apiUrl + "users";

    public login(username: string, password: string): any {
        const data = {'email': username, 'mdp': password};
      const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
        return this.http.post<any>(
            this.baseUrl+'/login',
            data,
            config
        );
        
    }
    // ato no tokny micheck ny catégorie anle user de selon anzay no hiredirigéna anazy
    public checkLogin(username: string,password:string) : any{
        this.login(username,password).subscribe(
            result =>{
                console.log(result);
                sessionStorage.setItem('role',result.categorie);
                sessionStorage.setItem('currentUser',result.login);
                return result;
            },
            error => {
                console.log(error);
                console.log(username + password);
                return error;
            },
            () => {
                // 'onCompleted' callback.
                // No errors, route to new page here
                this.router.navigate(['/accueil']);
            }
        );
    }
}