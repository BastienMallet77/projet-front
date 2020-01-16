import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LevelHttpService} from "./level-http.service";
import {LevelService} from "./level.service";
import {Level} from "../model/level";

@Component({
  selector: 'level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  currentLevel: Level = null;
  modalLevel: Level = null;

  constructor(private modalService: NgbModal, private levelHttpService: LevelHttpService) {
  }

  ngOnInit() {
  }

  list() {
    return this.levelHttpService.findAll();
  }

  add() {
    this.currentLevel = new Level();
  }

  detail(content, id: number) {
    this.levelHttpService.findById(id).subscribe(resp => {
      this.modalLevel = resp;
    }, error => {
      console.log(error);
    });
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', scrollable: true});
  }

  edit(id: number) {
    this.levelHttpService.findById(id).subscribe(resp => {
      this.currentLevel = resp;
    }, error => {
      console.log(error);
    });
  }

  save() {
    this.levelHttpService.save(this.currentLevel);
    this.cancel();
  }

  delete(id: number) {
    this.levelHttpService.delete(id);
  }

  cancel() {
    this.currentLevel = null;
  }

 next(level: Level) {
    this.levelHttpService.next(level);
  }

}
