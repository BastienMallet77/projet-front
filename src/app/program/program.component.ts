import { Component, OnInit } from '@angular/core';
import {ProgramHttpService} from './program-http.service';
import {Program} from '../model/program';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  currentProgram: Program = null;
  detailProgram: Program = null;


  constructor(private modalService: NgbModal, private programService: ProgramHttpService) { }

  ngOnInit() {
  }

  list()
  {
    return this.programService.findAll();
  }

  add()
  {
    this.currentProgram = new Program();
  }

  edit(id: number)
  {
    this.programService.findById(id).subscribe(resp =>
    {
      this.currentProgram = resp;
    }, error =>
    {
      console.log(error);
    });
  }

  save()
  {
    console.log(this.currentProgram);
    this.programService.save(this.currentProgram);
    console.log(this.currentProgram);
    this.currentProgram = null;
  }

  delete(id: number)
  {
    this.programService.delete(id);
  }

  cancel()
  {
    this.currentProgram = null;
  }



  detail(content, id: number) {
    this.programService.findById(id).subscribe(resp => {
      this.detailProgram = resp;
    }, error => {
      console.log(error);
    });
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', scrollable: true});
  }

}
