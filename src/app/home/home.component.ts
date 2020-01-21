import {Component, ElementRef, OnInit, Renderer, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserHttpService} from '../user/user-http.service';
import {User} from '../model/user';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User = null;

  constructor( private userService : UserHttpService ) {}

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

  login() {

  }
}
