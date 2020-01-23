import {Component, Output} from '@angular/core';
import {User} from './model/user';
import { Router } from '@angular/router';
import {UserHttpService} from './user/user-http.service';
import {HomeHttpService} from './home/home-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private homeService: HomeHttpService) {

  }

  title = 'projet-front';

  isConnected: boolean;

  userCo() {
    return this.homeService.currentConnection;
  }

  logout() {
    this.homeService.logout();
  }
}
