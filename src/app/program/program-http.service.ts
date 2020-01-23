import { Injectable } from '@angular/core';
import {Program} from '../model/program';
import {AppConfigService} from '../app-config.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserHttpService} from '../user/user-http.service';
import {SessionHttpService} from '../session/session-http.service';
import {LevelHttpService} from '../level/level-http.service';
import {SportHttpService} from '../sport/sport-http.service';
import {Session} from "../model/session";
import {Router} from '@angular/router';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProgramHttpService {

  programs: Array<Program>;
  progWithCoachId: Array<Program>;
  programSaved: Program;
  userCo: User = JSON.parse(localStorage.getItem('userConnected'));
  newUser: User;

  constructor(private router: Router,private appConfig: AppConfigService, private userService: UserHttpService, private sportService: SportHttpService, private levelService: LevelHttpService, /* private inProgressService: InProgressHttpService, TODO*/ private http: HttpClient)
  {
    this.load();
  }

  load()
  {
    this.http.get<Array<Program>>(this.appConfig.backEnd + 'program').subscribe(resp =>
    {
      this.programs = resp;
    },err => console.log(err));
  }

  findAll(): Array<Program>
  {
    return this.programs;
  }

  findByCoachId(spId: number): Array<Program>{
    let id = spId;
    this.http.get<Array<Program>>(this.appConfig.backEnd + 'program/' + id + '/creator').subscribe(resp => {
      this.progWithCoachId = resp;
    });
    return this.progWithCoachId;
  }

  /* TODO Test coach-program findAllByUser(id: number): Observable<Program>
  {
    for (const program of this.programs)
    {
      if (program.id == id)
      {
        {
          return this.http.get<Program>(this.appConfig.backEnd + 'program/' + id);
        }
      }
    }
    return null;
  }*/

  findById(id: number): Observable<Program>
  {
    for (const program of this.programs)
    {
      if (program.id == id)
      {
        {
          return this.http.get<Program>(this.appConfig.backEnd + 'program/' + id);
        }
      }
    }
    return null;
  }

  save(program: Program)
  {
    if(program)
    {
      if(!program.id)
      {
        this.http.post<Program>(this.appConfig.backEnd + 'program',
          program).subscribe(resp =>
        {
          this.programSaved = resp;
          this.load();
          this.userService.findById(this.userCo.id).subscribe(resp=>
            {
              this.newUser=resp;
              this.newUser.programStop = this.programSaved.id;
              this.userService.save(this.newUser);
            }
          );
        }, err => console.log(err));
      }
      else
        {
          this.http.put<Program>(this.appConfig.backEnd + 'program/' + program.id, program).subscribe(resp =>
          {
            this.load();

          }, error => console.log(error));
        }
    }
  }

  delete(id: number)
  {
    this.http.delete<Program>(this.appConfig.backEnd + 'program/' + id).subscribe(resp =>
    {
      this.load();
    }, err => console.log(err));
  }



}
