import {Injectable} from '@angular/core';
import {Level} from "../model/level";
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LevelHttpService {
  levels: Array<Level>;

  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.load();
  }

  load()  {
    this.http.get<Array<Level>>(this.appConfig.backEnd + 'level').subscribe(resp => {
        this.levels = resp;
      },
      err => console.log(err));
  }

  findAll(): Array<Level> {
    return this.levels;
  }

  findById(id: number): Observable<Level> {
    for (const level of this.levels) {
      if (level.id == id) {
        return this.http.get<Level>(this.appConfig.backEnd + 'level/' + id);
      }
    }
    return null;
  }

  save(level: Level) {
    if (level) {

      if (!level.id) {
        this.http.post<Level>(this.appConfig.backEnd + 'level', level).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      } else {
        this.http.put<Level>(this.appConfig.backEnd + 'level/' + level.id, level).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      }
    }
  }

  delete(id: number) {
    this.http.delete<Level>(this.appConfig.backEnd + 'level/' + id).subscribe(resp => {
      this.load();
    }, err => console.log(err));
  }

}


