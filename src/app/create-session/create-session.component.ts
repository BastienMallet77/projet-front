import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  monId: number;

  constructor(route : ActivatedRoute) {
    route.params.subscribe(params => {
      console.log(params);
      this.monId = params.id;
      console.log(this.monId);
    });
  }

  ngOnInit() {
  }

}
