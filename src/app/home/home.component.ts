import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserHttpService} from '../user/user-http.service';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {HomeHttpService} from './home-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  currentConnection: User = new User();
  type: string;

  @Input()
  isConnected: boolean = false;
  @Input()
  info;

  userCo() {
    return this.homeService.currentConnection;
  }

  // @Output() onLogin: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userService: UserHttpService, private homeService: HomeHttpService, private router: Router) {

  }

  ngOnInit() {
  }

  add(): void {
    this.currentUser = new User();
  }

  save(){
    this.userService.save(this.currentUser);
    this.cancel();
  }

  cancel() {
    this.currentUser = null;
  }

  login(userName: string, password: string) {
    localStorage.clear();

    this.homeService.login(userName, password);
  }

}
