import {Injectable} from '@angular/core';
import {Sport} from '../model/sport';
import {AppConfigService} from '../app-config.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Degree} from '../model/degree';

@Injectable({
  providedIn: 'root'
})

export class DegreeHttpService {

  degrees: Array<Degree>;


  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get<Array<Degree>>(this.appConfig.backEnd + 'degree').subscribe(resp => {
        this.degrees = resp;
      },
      err => console.log(err));
  }

  findAll(): Array<Degree> {
    return this.degrees;
  }

  findById(id: number): Observable<Degree> {
    return this.http.get<Degree>(this.appConfig.backEnd + 'degree/' + id);
  }

  save(degree: Degree) {
    if (degree) {
      if(degree.sport && !degree.sport.id){
        degree.sport=null;
      }
      if(degree.usercertified && !degree.usercertified.id){
        degree.usercertified = null;
      }

      if (!degree.id) {
        this.http.post<Degree>(this.appConfig.backEnd + 'degree', degree).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      } else {
        this.http.put<Degree>(this.appConfig.backEnd + 'degree/' + degree.id, degree).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      }
    }

  }
  delete(id:number){
    this.http.delete<Degree>(this.appConfig.backEnd + 'degree/' + id ).subscribe(resp => {
      this.load();
    }, err => console.log(err));
  }

}

