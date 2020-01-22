import { Component, OnInit } from '@angular/core';
import {ProgramHttpService} from '../program/program-http.service';
import {Program} from '../model/program';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.css']
})
export class CreateProgramComponent implements OnInit {

  currentProgram: Program = null;

  constructor(private programService: ProgramHttpService) { }

  ngOnInit() {
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

  cancel()
  {
    this.currentProgram = null;
  }
}
