import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LevelHttpService} from "./level-http.service";
import {Level} from "../model/level";
import {SportHttpService} from "../sport/sport-http.service";
import {SpecialisationHttpService} from "../specialisation/specialisation-http.service";
import {ProgramHttpService} from "../program/program-http.service";
import {Sport} from "../model/sport";
import {Specialisation} from "../model/specialisation";
import {Program} from "../model/program";

@Component({
  selector: 'level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  currentLevel: Level = null;
  modalLevel: Level = null;

  constructor(private modalService: NgbModal, private levelHttpService: LevelHttpService, private sportHttpService: SportHttpService, private specialisationHttpService: SpecialisationHttpService, private programHttpService: ProgramHttpService) {
  }

  ngOnInit() {
  }

  sports() {
    return this.sportHttpService.findAll();
  }
  specialisations() {
    return this.specialisationHttpService.findAll();
  }
  programs() {
    return this.programHttpService.findAll();
  }

  list() {
    return this.levelHttpService.findAll();
  }

  add() {
    this.currentLevel = new Level();
    this.currentLevel.programs = new Array<Program>();
    this.currentLevel.specialisation = new Specialisation();
    this.currentLevel.sport = new Sport();
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

      if (!this.currentLevel.sport) {
        this.currentLevel.sport = new Sport();
      }

      if (!this.currentLevel.specialisation) {
        this.currentLevel.specialisation = new Specialisation();
      }

      if (!this.currentLevel.programs) {
        this.currentLevel.programs = new Array<Program>();
      }

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
}
