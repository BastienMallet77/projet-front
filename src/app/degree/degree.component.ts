import { Component, OnInit } from '@angular/core';
import {Sport} from '../model/sport';
import {Degree} from '../model/degree';
import {DegreeHttpService} from './degree-http.service';
import {SportHttpService} from '../sport/sport-http.service';

@Component({
  selector: 'degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {

  currentDegree : Degree = null;
  constructor(private degreeService: DegreeHttpService, private sportService: SportHttpService) { }

  ngOnInit() {
  }
  list() {
    return this.degreeService.findAll();
  }
  sports(){
    return this.sportService.findAll();
  }

  add() {
    this.currentDegree = new Degree();
  }

  detail(id: number) {

  }

  edit(id: number) {
    this.degreeService.findById(id).subscribe(resp => {
      this.currentDegree = resp;
    }, error => {
      console.log(error);
    });

  }

  save() {
    this.degreeService.save(this.currentDegree);
    this.cancel();
  }

  delete(id: number) {
    this.degreeService.delete(id);
  }


  cancel() {
    this.currentDegree = null;
  }

}
