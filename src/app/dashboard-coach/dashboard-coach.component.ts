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

  progWithCreatorId: Array<Program>;
  proglistnb: number;

  /*@Output() TODO User connecté, pour récupérer l'ID du coach connecté
  userCo: User = JSON.parse(localStorage.getItem('userConnected'));
  */
  constructor(private modalService: NgbModal, private programService: ProgramHttpService) { }

  ngOnInit() {
  }

  getCoachPrograms (uId){
    let cId = uId;
    this.progWithCreatorId = this.programService.findByCoachId(cId);
    this.proglistnb = this.progWithCreatorId.length;
    console.log("Cherche");
    this.afficheProfList();
    return this.proglistnb;
  }

  afficheProfList(){
    console.log("Affiche");
    return this.proglistnb;
  }

  validate(){

  }
}
