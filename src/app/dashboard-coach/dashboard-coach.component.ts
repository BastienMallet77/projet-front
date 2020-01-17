import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SessionHttpService} from '../session/session-http.service';
import {ProgramHttpService} from '../program/program-http.service';

@Component({
  selector: 'app-dashboard-coach',
  templateUrl: './dashboard-coach.component.html',
  styleUrls: ['./dashboard-coach.component.css']
})
export class DashboardCoachComponent implements OnInit {

  constructor(private modalService: NgbModal, private programService: ProgramHttpService) { }

  ngOnInit() {
  }
  validate(){

  }
}
