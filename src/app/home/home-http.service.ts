import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {Level} from "../model/level";
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Observable} from "rxjs";
import {UserHttpService} from '../user/user-http.service';
import {User} from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeHttpService {

  currentUser: User;
  currentConnection: User;

  @Input()
  isConnected: boolean;

  constructor(private appConfig: AppConfigService, private http: HttpClient, private userService: UserHttpService, private router: Router) {
  }

  login(userName: String, password: String)
  {
    this.http.get<User>(this.appConfig.backEnd + 'user/' + userName + '/' + password).subscribe(resp => {
        this.currentConnection = resp;
        if(this.currentConnection.id)
        {
          localStorage.setItem('userConnected', JSON.stringify(this.currentConnection));
          this.router.navigate(['board']);
        }
      },
      error => console.log(error));
  }

  logout() {
    localStorage.removeItem('userConnected');
    localStorage.clear();
    this.currentConnection = null;
    this.router.navigate(['']);
  }

  user(){
    return this.currentConnection
  }
}


