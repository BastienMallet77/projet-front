import { Injectable } from '@angular/core';
import {Program} from '../model/program';
import {AppConfigService} from '../app-config.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramHttpService {

  programs: Array<Program>;

  constructor(private appConfig: AppConfigService, private http: HttpClient)
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
    return this.http.get<Program>(this.appConfig.backEnd + 'program/' + id);
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
