import { Component, OnInit } from '@angular/core';
import {InProgress} from '../model/inProgress';
import {InProgressHttpService} from './in-progress-http.service';
import {UserHttpService} from '../user/user-http.service';

@Component({
  selector: 'in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit {
  currentInProgress: InProgress = null;

  constructor(private inProgressService: InProgressHttpService, private userService: UserHttpService) { }

  ngOnInit() {
  }

  list() {
    return this.inProgressService.findAll();
  }

  users(){
    return this.userService.findAll();
  }

  add() {
    this.currentInProgress = new InProgress();
  }

  edit(id: number) {
    this.inProgressService.findById(id).subscribe(resp =>
    {
      this.currentInProgress = resp;
    }, error =>
    {
      console.log(error);
    });
  }

  save() {
    this.inProgressService.save(this.currentInProgress);
    this.currentInProgress = null;
  }

  delete(id: number) {
    this.inProgressService.delete(id);
  }

  cancel() {
    this.currentInProgress = null;
  }
}

