import {Injectable} from '@angular/core';
import {InProgress} from '../model/inProgress';
import {AppConfigService} from '../app-config.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProgramHttpService} from '../program/program-http.service';
import {UserHttpService} from '../user/user-http.service';

@Injectable({
  providedIn: 'root'
})

export class InProgressHttpService {

  inProgresses: Array<InProgress>;

  constructor(private appConfig: AppConfigService,
               private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get<Array<InProgress>>(this.appConfig.backEnd + 'inprogress').subscribe(resp => {
        this.inProgresses = resp;
      },
      err => console.log(err));
  }

  findAll(): Array<InProgress> {
    return this.inProgresses;
  }

  findById(id: number): Observable<InProgress> {
    return this.http.get<InProgress>(this.appConfig.backEnd + 'inprogress/' + id);
  }

  save(inProgress: InProgress) {
    if (inProgress) {
      if (inProgress.userProgressing && !inProgress.userProgressing.id) {
        inProgress.userProgressing = null;
      }
      if (inProgress.progInProgress /*TODO utile ??? && !inProgress.progInProgress.??*/) {
        inProgress.progInProgress = null;
      }
      if (!inProgress.id) {
        this.http.post<InProgress>(this.appConfig.backEnd + 'inprogress', inProgress).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      } else {
        this.http.put<InProgress>(this.appConfig.backEnd + 'inprogress/' + inProgress.id, inProgress).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      }
    }
  }

  delete(id: number) {
    this.http.delete<InProgress>(this.appConfig.backEnd + 'inprogress/' + id).subscribe(resp => {
      this.load();
    }, err => console.log(err));
  }
}
