import { Component, OnInit } from '@angular/core';
import {SportHttpService} from '../sport/sport-http.service';
import {SpecialisationHttpService} from '../specialisation/specialisation-http.service';

@Component({
  selector: 'app-list-spec-sport',
  templateUrl: './list-spec-sport.component.html',
  styleUrls: ['./list-spec-sport.component.css']
})
export class ListSpecSportComponent implements OnInit {

  constructor(private sportService: SportHttpService, private specialisationService:SpecialisationHttpService) { }

  ngOnInit() {
  }
listSport(){
    return this.sportService.findAll()
}
listSpec(){
    return this.specialisationService.findAll()
}
}
