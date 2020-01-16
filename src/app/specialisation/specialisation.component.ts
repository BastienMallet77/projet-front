import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SpecialisationHttpService} from "./specialisation-http.service";
import {Specialisation} from "../model/specialisation";

@Component({
  selector: 'specialisation',
  templateUrl: './specialisation.component.html',
  styleUrls: ['./specialisation.component.css']
})
export class SpecialisationComponent implements OnInit {
  currentSpecialisation: Specialisation = null;
  modalSpecialisation: Specialisation = null;

  constructor(private modalService: NgbModal, private specialisationHttpService: SpecialisationHttpService) { }

  ngOnInit() {
  }

  list() {
    return this.specialisationHttpService.findAll();
  }

  add() {
    this.currentSpecialisation = new Specialisation();
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
