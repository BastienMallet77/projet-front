import { Component, OnInit } from '@angular/core';
import {ProgramHttpService} from '../program/program-http.service';
import {Program} from '../model/program';
import {SportHttpService} from '../sport/sport-http.service';
import {Specialisation} from '../model/specialisation';
import {SpecialisationHttpService} from '../specialisation/specialisation-http.service';
import {LevelHttpService} from '../level/level-http.service';
import {Sport} from '../model/sport';
import {Level} from '../model/level';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.css']
})
export class CreateProgramComponent implements OnInit {

  currentProgram: Program = null;


  constructor(private programService: ProgramHttpService, private sportService : SportHttpService, private SpecService : SpecialisationHttpService, private levelService : LevelHttpService) { }

  ngOnInit() {

  }
  add()
  {
    this.currentProgram = new Program();
    this.currentProgram.level = new Level();
    this.currentProgram.specialisation = new Specialisation();
    this.currentProgram.sport = new Sport();
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
