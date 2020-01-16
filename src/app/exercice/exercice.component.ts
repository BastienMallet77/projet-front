import { Component, OnInit } from '@angular/core';
import {Exercice} from '../model/exercice';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExerciceHttpService} from './exercice-http.service';
import {Session} from '../model/session';

@Component({
  selector: 'exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  currentExercice: Exercice = null;

  modalExercice: Exercice = null;

  constructor(private modalService: NgbModal,
              private exerciceService: ExerciceHttpService/*TODO ,private sessionService: SessionHttpService*/) { }

  ngOnInit() {
  }
  list() {
    return this.exerciceService.findAll();
  }

  /* TODO sessions() {
    return this.sessionService.findAll();
  } */

  add() {
    this.currentExercice = new Exercice();
    this.currentExercice.session = new Session();
  }

  detail(content, id: number) {
    this.exerciceService.findById(id).subscribe(resp => {
      this.modalExercice = resp;
    }, error => {
      console.log(error);
    });
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', scrollable: true});
  }

  edit(id: number) {
    this.exerciceService.findById(id).subscribe(resp => {
      this.currentExercice = resp;

      if (!this.currentExercice.session) {
        this.currentExercice.session = new Session();
      }
    }, error => {
      console.log(error);
    });
  }

  save() {
    this.exerciceService.save(this.currentExercice);
    this.cancel();
  }

  delete(id: number) {
    this.exerciceService.delete(id);
  }

  cancel() {
    this.currentExercice = null;
  }

}
