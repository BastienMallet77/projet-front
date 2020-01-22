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
  speWithSportId: Array<Specialisation> = null;
  listSports: Array<Sport>;
  //currentLevelSportId: number = null;
  //sportSelectedId: number = null;

  constructor(private modalService: NgbModal, private levelHttpService: LevelHttpService, private sportHttpService: SportHttpService, private specialisationHttpService: SpecialisationHttpService, private programHttpService: ProgramHttpService) {
  }

  ngOnInit() {
  }

  spe(){
    console.log(this.currentLevel.sport.id);
    this.specialisationHttpService.findBySportId(this.currentLevel.sport.id);
    console.log("ici");
    console.log(this.speWithSportId);
    return this.speWithSportId;
  }


  sports() {
    /*if (this.curentLevelSportId != this.sportSelectedId) {
      this.speWithSportId = this.specialisationHttpService.findBySportId(this.currentLevel.sport.id);
      this.sportSelectedId = this.currentLevel.sport.id;
    }*/
    //this.sportHttpService.findAll();
    /*console.log(this.currentLevel.sport.id);
    console.log(this.sportSelectedId);
    console.log(this.speWithSportId);*/

    console.log(this.currentLevel.sport.id);
    if (this.currentLevel.sport.id !=null) {
      this.specialisationHttpService.findBySportId(this.currentLevel.sport.id);
      console.log(this.speWithSportId);
    }
    return this.listSports;
  }
  specialisations() {
    console.log("ici");
    console.log(this.currentLevel.sport.id);
    return this.specialisationHttpService.findBySportId(this.currentLevel.sport.id);
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
    this.listSports = this.sportHttpService.findAll();
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
