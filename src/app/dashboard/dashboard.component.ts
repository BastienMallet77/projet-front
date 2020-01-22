import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProgramHttpService} from "../program/program-http.service";
import {ProgramBoardViewHttpService} from "../program-board-view/program-board-view-http.service";
import {ExerciceHttpService} from "../exercice/exercice-http.service";
import {SessionHttpService} from "../session/session-http.service";
import {DashboardHttpService} from "./dashboard-http.service";
import {User} from "../model/user";
import {Program} from "../model/program";
import {InProgressHttpService} from "../in-progress/in-progress-http.service";
import {InProgress} from "../model/inProgress";
import {Specialisation} from "../model/specialisation";
import {Level} from "../model/level";
import {Sport} from "../model/sport";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  currentConnection: User = new User();

  @Input()
  isConnected: boolean = false;
  @Input()
  info;

  userCo: User = JSON.parse(localStorage.getItem('userConnected'));

  leInProgressDeUserCo: InProgress;

  LesEnCours: Array<InProgress> = new Array<InProgress>();
  mesEnCours: Array<InProgress> = new Array<InProgress>();

  monProgEnCours: Program;
  monSport: Sport;
  monLevel: Level;
  maSpe: Specialisation;

  lesProgrammes: Array<Program> = new Array<Program>();
  mesProgrammesEnCours: Array<Program> = new Array<Program>();

  constructor(private dashboardService: DashboardHttpService, private inProgressService: InProgressHttpService, private programService: ProgramHttpService) {
    // RECUP LES INPROGRESS DE L'USER
    this.LesEnCours = this.inProgressService.findAll();
    for (let enCours of this.LesEnCours) {
      if (enCours.userProgressing.id != null) {
        if (enCours.userProgressing.id == this.userCo.id) {
          this.mesEnCours.push(enCours);
          this.monProgEnCours = enCours.program;
          this.monSport = this.monProgEnCours.sport;
          this.monLevel = this.monProgEnCours.level;
          this.maSpe = this.monProgEnCours.specialisation;
        }
      }
    }

    // RECUP LES PROGRAMMES CORRESPONDANTS
    for (let encours of this.mesEnCours) {
      this.mesProgrammesEnCours.push(encours.program);
    }




    //this.lesProgrammes = this.programService.findAll();
  }

  ngOnInit() {
  }

}
