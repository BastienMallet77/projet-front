import { Component, OnInit } from '@angular/core';
import {ProgramHttpService} from './program-http.service';
import {Program} from '../model/program';

@Component({
  selector: 'program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  currentProgram: Program = null;

  constructor(private programService: ProgramHttpService) { }

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
    this.programService.save(this.currentProgram);
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
}
