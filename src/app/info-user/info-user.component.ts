import { Component, OnInit } from '@angular/core';
import {UserHttpService} from '../user/user-http.service';
import {User} from '../model/user';
import {HomeHttpService} from '../home/home-http.service';
import {InfoUserHttpService} from './info-user-http.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
userCo: User;

  constructor(private userService: UserHttpService, private homeService : HomeHttpService,  private userInfoService: InfoUserHttpService) {
    this.userInfoService.searchUser(this.homeService.currentConnection.id).subscribe( resp => {
      this.userCo = resp;
      console.log(this.userCo)
    })
  }

  ngOnInit() {
  }

  back() {
    window.history.back()
  }
  save(){
    this.userService.save(this.userCo);
  }


}
