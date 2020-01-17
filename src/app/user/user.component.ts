import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserHttpService} from './user-http.service';
import {ProgramHttpService} from '../program/program-http.service';
import {Program} from '../model/program';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: User = null;
  // TODO à mettre dans le constructeur
  // , private inProgressService: InProgressHttpService, private degreeService: DegreeHttpService
  constructor(private userService: UserHttpService, private programService: ProgramHttpService) {

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
      //TODO les algo pour les mapping avec le programme/inprogress et le degree
      if (!this.currentUser.programs) {
        this.currentUser.programs = new Program();
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
