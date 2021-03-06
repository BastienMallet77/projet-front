import {Injectable} from '@angular/core';
import {AppConfigService} from "../app-config.service";
import {HttpClient} from "@angular/common/http";
import {Level} from "../model/level";
import {Specialisation} from "../model/specialisation";
import {Observable} from "rxjs";
import {Sport} from "../model/sport";

@Injectable({
  providedIn: 'root'
})
export class SpecialisationHttpService {
  specialisations: Array<Specialisation>;
  speWithSportId: Array<Specialisation>;

  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get<Array<Specialisation>>(this.appConfig.backEnd + 'specialisation').subscribe(resp => {
        this.specialisations = resp;
      },
      err => console.log(err));
  }

  findAll(): Array<Specialisation> {
    return this.specialisations;
  }

  findById(id: number): Observable<Specialisation> {
    for (const specialisation of this.specialisations) {
      if (specialisation.id == id) {
        return this.http.get<Specialisation>(this.appConfig.backEnd + 'specialisation/' + id);
      }
    }
    return null;
  }

  findBySportId(spId: number): Array<Specialisation>{
    let id = spId;
    this.http.get<Array<Specialisation>>(this.appConfig.backEnd + 'specialisation/' + id + '/specs').subscribe(resp => {
      this.speWithSportId = resp;
    });
    return this.speWithSportId;
  }


  save(specialisation: Specialisation) {
    if (specialisation) {

      if (specialisation.sport && !specialisation.sport.id) {
        specialisation.sport = null;
      }
      if (!specialisation.id) {
        this.http.post<Specialisation>(this.appConfig.backEnd + 'specialisation', specialisation).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      } else {
        this.http.put<Specialisation>(this.appConfig.backEnd + 'specialisation/' + specialisation.id, specialisation).subscribe(resp => {
          this.load();
        }, err => console.log(err));
      }
    }
  }

  delete(id: number) {
    this.http.delete<Specialisation>(this.appConfig.backEnd + 'specialisation/' + id).subscribe(resp => {
      this.load();
    }, err => console.log(err));
  }
}
