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


  LesEnCours: Array<InProgress> = new Array<InProgress>();
  mesEnCours: Array<InProgress> = new Array<InProgress>();

  constructor(private dashboardService: DashboardHttpService, private inProgressService: InProgressHttpService) {
    this.LesEnCours = this.inProgressService.findAll();

// this.userCo.inProgress

    for(let enCours of this.LesEnCours){
      if(enCours.userProgressing.id != null) {

        if(enCours.userProgressing.id == this.userCo.id){
          this.mesEnCours.push(enCours);
        }
      }

      }

  }

  ngOnInit() {
  }

}
