import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-front';

  @Output()
  isConnected: boolean;


  logout() {
    localStorage.removeItem('userConnected');

  }
}
