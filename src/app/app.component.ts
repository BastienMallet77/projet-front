import {Component, Output} from '@angular/core';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-front';

  @Output()
  isConnected: boolean;

  @Output()
  userCo: User = JSON.parse(localStorage.getItem('userConnected'));


  logout() {
    localStorage.removeItem('userConnected');
    console.log(JSON.parse(localStorage.getItem('userConnected')));
    localStorage.clear();
  }
}
