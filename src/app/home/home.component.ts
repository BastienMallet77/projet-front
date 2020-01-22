import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserHttpService} from '../user/user-http.service';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {HomeHttpService} from './home-http.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  currentConnection: User = new User();

  @Input()
  isConnected: boolean = false;


  constructor( private userService : UserHttpService, private homeService: HomeHttpService) {}

  ngOnInit() {
  }
  add() : void {
    this.currentUser = new User();

  }
  save(){
    this.userService.save(this.currentUser);
    this.cancel();
  }

  cancel() {
    this.currentUser = null;
  }

  login(userName: string, password: string)
  {
    this.homeService.login(userName, password);
  }
}
