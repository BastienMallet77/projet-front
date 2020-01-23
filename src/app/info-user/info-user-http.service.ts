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
export class InfoUserHttpService {



  constructor(private appConfig: AppConfigService, private http: HttpClient, private userService: UserHttpService, private router: Router) {
  }

  searchUser(Userid:number){
    return this.http.get<User>(this.appConfig.backEnd + 'user/' +Userid);
  }

}


