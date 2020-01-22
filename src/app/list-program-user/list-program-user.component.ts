import { Component, OnInit } from '@angular/core';
import {Program} from '../model/program';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {ActivatedRoute} from '@angular/router';
import {ProgramHttpService} from '../program/program-http.service';

@Component({
  selector: 'app-list-program-user',
  templateUrl: './list-program-user.component.html',
  styleUrls: ['./list-program-user.component.css']
})
export class ListProgramUserComponent implements OnInit {
  programs : Array<Program>
  monId: number;

  constructor(private programService: ProgramHttpService, private http: HttpClient, private appConfig: AppConfigService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      console.log(params);
      this.monId = params.id;
      console.log(this.monId);
    })
  }

  ngOnInit() {
    this.load(this.monId)
  }

  private load(id: number) {
    this.http.get<Array<Program>>(this.appConfig.backEnd + 'program/' +id+ '/programs').subscribe( resp => {
      this.programs = resp;
    })
  }
  listPrograms(){
    return this.programs;
  }

  back() {
    window.history.back()
  }

}
