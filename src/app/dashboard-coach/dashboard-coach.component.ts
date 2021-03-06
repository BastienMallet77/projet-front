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
  sumGradeCoach: number = 0;
  avgGradeCoach: number = 0;

  @Output()
  userCo: User = JSON.parse(localStorage.getItem('userConnected'));

  constructor(private modalService: NgbModal, private programService: ProgramHttpService) {
    this.programService.findByCoachId(this.userCo.id).subscribe(resp => {
      this.progWithCreatorId = resp;
      this.proglistnb = this.progWithCreatorId.length;
      for (let i = 0; i<this.proglistnb; i++) {
        this.sumGradeCoach += this.progWithCreatorId[i].rate;
      }
      this.avgGradeCoach = this.sumGradeCoach/this.proglistnb;
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
