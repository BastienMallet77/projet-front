import {Component, Output} from '@angular/core';
import {User} from './model/user';
import { Router } from '@angular/router';
import {UserHttpService} from './user/user-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  title = 'projet-front';

  @Output()
  isConnected: boolean;

  @Output()
  userCo: User = JSON.parse(localStorage.getItem('userConnected'));



  logout() {
    localStorage.removeItem('userConnected');
    localStorage.clear();
    this.router.navigate(['']);
  }
}
