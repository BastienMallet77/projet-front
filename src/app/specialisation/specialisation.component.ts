import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SpecialisationHttpService} from "./specialisation-http.service";
import {Specialisation} from "../model/specialisation";
import {SportHttpService} from "../sport/sport-http.service";
import {Sport} from "../model/sport";
import {Program} from "../model/program";
import {Level} from "../model/level";

@Component({
  selector: 'specialisation',
  templateUrl: './specialisation.component.html',
  styleUrls: ['./specialisation.component.css']
})
export class SpecialisationComponent implements OnInit {
  currentSpecialisation: Specialisation = null;
  modalSpecialisation: Specialisation = null;

  constructor(private modalService: NgbModal, private specialisationHttpService: SpecialisationHttpService, private sportHttpService: SportHttpService) { }

  ngOnInit() {
  }

  sports() {
    return this.sportHttpService.findAll();
  }

  list() {
    return this.specialisationHttpService.findAll();
  }

  add() {
    this.currentSpecialisation = new Specialisation();
    this.currentSpecialisation.sport = new Sport();
    this.currentSpecialisation.levelss = new Array<Level>();
    this.currentSpecialisation.programss = new Array<Program>();
  }

  detail(content, id: number) {
    this.specialisationHttpService.findById(id).subscribe(resp => {
      this.modalSpecialisation = resp;
    }, error => {
      console.log(error);
    });
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', scrollable: true});
  }

  edit(id: number) {
    this.specialisationHttpService.findById(id).subscribe(resp => {
      this.currentSpecialisation = resp;

      if (!this.currentSpecialisation.sport) {
        this.currentSpecialisation.sport = new Sport();
      }

    }, error => {
      console.log(error);
    });
  }

  save() {
    this.specialisationHttpService.save(this.currentSpecialisation);
    this.cancel();
  }

  delete(id: number) {
    this.specialisationHttpService.delete(id);
  }

  cancel() {
    this.currentSpecialisation = null;
  }

}
