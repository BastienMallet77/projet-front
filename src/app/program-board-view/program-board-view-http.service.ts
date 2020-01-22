import {Injectable, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Program} from "../model/program";
import {AppConfigService} from "../app-config.service";
import {UserHttpService} from "../user/user-http.service";
import {SportHttpService} from "../sport/sport-http.service";
import {LevelHttpService} from "../level/level-http.service";
import {HttpClient} from "@angular/common/http";
import {Session} from "../model/session";

@Injectable({
  providedIn: 'root'
})
export class ProgramBoardViewHttpService {
  program: Program;
  sessions: Array<Session>;

  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.load();
  }

  load()
  {
    this.http.get<Program>(this.appConfig.backEnd + 'program/id/detail').subscribe(resp =>
    {
      this.program = resp;
      console.log(this.program)
    },err => console.log(err));
  }

   findById(id: number): Observable<Program>
  {
    return this.http.get<Program>(this.appConfig.backEnd + 'program/' + id +'/detail/');
  }

  save(program: Program)
  {
    if(program)
    {
        this.http.put<Program>(this.appConfig.backEnd + 'program/' + program.id, program).subscribe(resp =>
        {
          this.load();
        }, error => console.log(error));
    }
  }




  // findSessionsByProgramId(id: number): Array<Session>
  // {
  //    this.http.get<Program>(this.appConfig.backEnd + 'program/' + id +'/detail/').subscribe(resp =>
  //   {
  //     this.program = resp;
  //     this.sessions = this.program.sessions;
  //   });
  //    return this.sessions;
  // }



}
