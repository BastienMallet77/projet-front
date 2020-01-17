import { Injectable } from '@angular/core';
import {Program} from '../model/program';
import {AppConfigService} from '../app-config.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserHttpService} from '../user/user-http.service';
import {SessionHttpService} from '../session/session-http.service';
import {LevelHttpService} from '../level/level-http.service';
import {SportHttpService} from '../sport/sport-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramHttpService {

  programs: Array<Program>;

  constructor(private appConfig: AppConfigService, private userService: UserHttpService, private sportService: SportHttpService, private levelService: LevelHttpService, /* private inProgressService: InProgressHttpService, TODO*/ private http: HttpClient)
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
          this.load();
        }, err => console.log(err));
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
