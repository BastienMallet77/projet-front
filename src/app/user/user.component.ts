import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserHttpService} from './user-http.service';
import {ProgramHttpService} from '../program/program-http.service';
import {Program} from '../model/program';
import {InProgress} from '../model/inProgress';
import {Degree} from '../model/degree';
import {InProgressHttpService} from '../in-progress/in-progress-http.service';
import {DegreeHttpService} from '../degree/degree-http.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  search: string = "";
  currentUser: User = null;

  constructor(private userService: UserHttpService, private degreeService: DegreeHttpService, private inProgressService: InProgressHttpService, private programService: ProgramHttpService) {

  }

  ngOnInit() {
  }

  list(){
    return this.userService.findAll();
  }
  roles(){
    return this.userService.roles;
  }

  add(){
    this.currentUser = new User();
  }

  edit(id: number){
    this.userService.findById(id).subscribe(resp => {
      this.currentUser = resp;

      if (!this.currentUser.programs) {
        this.currentUser.programs = new Program();
      }
      if (!this.currentUser.inProgress) {
        this.currentUser.inProgress = new InProgress();
      }
      if (!this.currentUser.degreesCoach) {
        this.currentUser.degreesCoach = new Degree();
      }
    }, err => {
      console.log(err);
    });
  }

  save(){
    this.userService.save(this.currentUser);
    this.cancel();
  }

  delete(id: number){
    this.userService.delete(id);
  }

  cancel(){
    this.currentUser = null;
  }
}
