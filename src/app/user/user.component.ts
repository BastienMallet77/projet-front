import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserHttpService} from './user-http.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: User = null;
  // TODO à mettre dans le constructeur
  // private programService : ProgramHttpService, private inProgressService: InProgressHttpService, private degreeService: DegreeHttpService
  constructor(private userService: UserHttpService) {

  }

  ngOnInit() {
  }

  list(){
    return this.userService.findAll();
  }

  add(){
    this.currentUser = new User();
  }

  edit(id: number){
    this.userService.findById(id).subscribe(resp => {
      this.currentUser = resp;
      //TODO les algo pour les mapping avec le programme/inprogress et le degree
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
