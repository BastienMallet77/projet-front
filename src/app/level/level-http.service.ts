import {Injectable} from '@angular/core';
import {Level} from "../model/level";
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Observable} from "rxjs";
import {Specialisation} from '../model/specialisation';

@Injectable({
  providedIn: 'root'
})
export class LevelHttpService {
  levels: Array<Level>;
  levelsWithSpecId: Array<Level>;

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
      if (level.sport && !level.sport.id) {
        level.sport = null;
      }
      if (level.specialisation && !level.specialisation.id) {
        level.specialisation = null;
      }
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

  findBySpecId(lvlId: number): Array<Level>{
    let id = lvlId;
    this.http.get<Array<Level>>(this.appConfig.backEnd + 'level/' + id + '/levels').subscribe(resp => {
      this.levelsWithSpecId = resp;
    });
    return this.levelsWithSpecId;
  }

}


