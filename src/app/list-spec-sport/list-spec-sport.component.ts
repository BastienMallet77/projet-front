import {Component, OnInit} from '@angular/core';
import {SportHttpService} from '../sport/sport-http.service';
import {SpecialisationHttpService} from '../specialisation/specialisation-http.service';
import {Specialisation} from '../model/specialisation';
import {ActivatedRoute} from '@angular/router';
import {AppConfigService} from '../app-config.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-spec-sport',
  templateUrl: './list-spec-sport.component.html',
  styleUrls: ['./list-spec-sport.component.css']
})
export class ListSpecSportComponent implements OnInit {

  specs: Array<Specialisation>;
  monId: number;

  constructor(private http: HttpClient, private appConfig: AppConfigService, private route: ActivatedRoute, private sportService: SportHttpService, private specialisationService: SpecialisationHttpService) {
    route.params.subscribe(params => {
      console.log(params);
      this.monId = params.id;
      console.log(this.monId);
    });
  }

  ngOnInit() {
    this.load(this.monId);
  }

  listSport() {
    return this.sportService.findAll();
  }

  listSpec() {
    return this.specialisationService.findAll();
  }

  private load(id: number) {
    this.http.get<Array<Specialisation>>(this.appConfig.backEnd + 'specialisation/' + id + '/specs').subscribe(resp => {
      this.specs = resp;
    });
  }

  listSpecs() {
    return this.specs;
  }
}
