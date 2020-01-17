import { Component, OnInit } from '@angular/core';
import {Session} from '../model/session';
import {Program} from '../model/program';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SessionHttpService} from './session-http.service';
import {ProgramHttpService} from '../program/program-http.service';

@Component({
  selector: 'session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  currentSession: Session = null;
  modalSession: Session = null;

  constructor(private modalService: NgbModal,
              private sessionService: SessionHttpService,private programService: ProgramHttpService) { }

  ngOnInit() {
  }
  list() {
    return this.sessionService.findAll();
  }

  programs() {
    return this.programService.findAll();
  }

  add() {
    this.currentSession = new Session();
    this.currentSession.program = new Program();
  }

  detail(content, id: number) {
    this.sessionService.findById(id).subscribe(resp => {
      this.modalSession = resp;
    }, error => {
      console.log(error);
    });
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', scrollable: true});
  }

  edit(id: number) {
    this.sessionService.findById(id).subscribe(resp => {
      this.currentSession = resp;

      if (!this.currentSession.program) {
        this.currentSession.program = new Program();
      }
    }, error => {
      console.log(error);
    });
  }

  save() {
    this.sessionService.save(this.currentSession);
    this.cancel();
  }

  delete(id: number) {
    this.sessionService.delete(id);
  }

  cancel() {
    this.currentSession = null;
  }

}
