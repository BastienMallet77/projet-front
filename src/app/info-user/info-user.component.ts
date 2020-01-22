import { Component, OnInit } from '@angular/core';
import {UserHttpService} from '../user/user-http.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  constructor(private userService: UserHttpService) { }

  ngOnInit() {
  }

  back() {
    window.history.back()
  }
}
