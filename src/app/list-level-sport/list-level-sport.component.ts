import { Component, OnInit } from '@angular/core';
import {SportHttpService} from '../sport/sport-http.service';
import {SpecialisationHttpService} from '../specialisation/specialisation-http.service';

@Component({
  selector: 'app-list-level-sport',
  templateUrl: './list-level-sport.component.html',
  styleUrls: ['./list-level-sport.component.css']
})
export class ListLevelSportComponent implements OnInit {
  constructor(private sportService: SportHttpService, private specialisationService: SpecialisationHttpService) {
  }

  ngOnInit() {
  }

  listSport() {
    return this.sportService.findAll()
  }

  listSpec() {
    return this.specialisationService.findAll()
  }
}
