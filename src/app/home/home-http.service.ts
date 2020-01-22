import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {Level} from "../model/level";
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Observable} from "rxjs";
import {UserHttpService} from '../user/user-http.service';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class HomeHttpService {

  currentUser: User;
  currentConnection: User;

  @Input()
  isConnected: boolean;

  @Output()
  info: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private appConfig: AppConfigService, private http: HttpClient, private userService: UserHttpService) {
  }

  login(userName: String, password: String)
  {
    this.http.get<User>(this.appConfig.backEnd + 'user/' + userName + '/' + password).subscribe(resp => {
      this.currentConnection = resp;
      localStorage.setItem('userConnected', JSON.stringify(this.currentConnection));
      this.isConnected = true;
      this.info.emit(this.isConnected);
    },
      error => console.log(error));
  }

}


