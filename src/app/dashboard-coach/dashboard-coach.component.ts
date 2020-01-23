import {Component, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProgramHttpService} from '../program/program-http.service';
import {Program} from '../model/program';
import {User} from '../model/user';

@Component({
  selector: 'app-dashboard-coach',
  templateUrl: './dashboard-coach.component.html',
  styleUrls: ['./dashboard-coach.component.css']
})
export class DashboardCoachComponent implements OnInit {

  progWithCreatorId: Array<Program> = new Array<Program>();
  progValidatedWithCreatorId: Array<Program> = new Array<Program>();
  proglistnb: number = 0;
  progValidatedlistnb: number = 0;

  @Output() /* TODO User connecté, pour récupérer l'ID du coach connecté */
  userCo: User = JSON.parse(localStorage.getItem('userConnected'));

  constructor(private modalService: NgbModal, private programService: ProgramHttpService) {
    this.programService.findByCoachId(this.userCo.id).subscribe(resp => {
      this.progWithCreatorId = resp;
      this.proglistnb = this.progWithCreatorId.length;
    });
    this.programService.findValidatedByCoachId(this.userCo.id).subscribe(resp => {
      this.progValidatedWithCreatorId = resp;
      this.progValidatedlistnb = this.progValidatedWithCreatorId.length;
    });
  }

  ngOnInit() {
  }

  validate(){

  }
}
