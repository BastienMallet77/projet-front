import {Component, OnInit} from '@angular/core';
import {ProgramHttpService} from "../program/program-http.service";
import {ProgramBoardViewHttpService} from "./program-board-view-http.service";
import {Session} from "../model/session";
import {Program} from "../model/program";
import {ActivatedRoute} from "@angular/router";
import {SessionHttpService} from "../session/session-http.service";
import {Exercice} from "../model/exercice";
import {ExerciceHttpService} from "../exercice/exercice-http.service";

@Component({
  selector: 'program-board-view',
  templateUrl: './program-board-view.component.html',
  styleUrls: ['./program-board-view.component.css']
})
export class ProgramBoardViewComponent implements OnInit {
  program: Program;
  monId: number;
  sessions: Array<Session>;
  numberSession: number = 0;
  numberSessionDone: number = 0;
  percentageOfDone: number;
  sectionsize: number;
  maSessionId: number;
  currentSession: Session;

  exercices: Array<Exercice>;

  selectedProgram: Program;
  selectedSession: Session;
  afficheExos: boolean;

  constructor(private route: ActivatedRoute, private programService: ProgramHttpService, private programBoardViewHttpService: ProgramBoardViewHttpService, private exerciceService: ExerciceHttpService, private sessionService: SessionHttpService) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.monId = params.id;
      this.programBoardViewHttpService.findById(params.id).subscribe(resp => {
          this.program = resp;
        this.sessions = resp.sessions;
        for(let sess of this.sessions){
          this.numberSession ++;
          if(sess.isDone){
            this.numberSessionDone ++;
          }
          this.maSessionId = sess.id;
          // this.exercices = sess.exercices;
          // console.log("LES EXERCICES SONT:" +this.exercices);
        }
        this.sectionsize = 100/this.numberSession;
        });

      if(this.numberSessionDone > 0){
        this.percentageOfDone = (this.numberSessionDone*100)/this.numberSession;
      } else {
        this.percentageOfDone =0;
      }

      console.log("pourcentage de fait:" +this.percentageOfDone)
    });

  }

  ngOnInit() {
  }


  findSessionsByProgramId(id: number): Array<Session> {
    this.programBoardViewHttpService.findById(this.monId).subscribe(resp =>{
      this.sessions = resp.sessions;
    });
    return this.sessions;
  }


  display(id: number) {
    this.afficheExos = true;
    this.sessionService.findById(id).subscribe(resp => {
      this.exercices = resp.exercices;
      this.selectedSession = resp;
    });
  }

  sessionIsDone(sess: Session){
    if(sess.isDone == false) {
      sess.isDone = true;
      this.numberSessionDone ++;
      this.percentageOfDone = (this.numberSessionDone*100)/this.numberSession;
      console.log(this.percentageOfDone);
    }
    for(let session of this.sessions){
      if(session.id == sess.id) {
        session = sess;
      }
    }

    // if(this.percentageOfDone == 100){
    //TODO modal BRAVO !
    // }

  }

  programIsDone(prog: Program) {
    prog.isDone = true;
    console.log("OK THE PROGRAM IS DONE!");
}




  // findSessionsByProgramId2(id: number): Array<Session> {
  //   this.sessions = this.programBoardViewHttpService.findSessionsByProgramId(this.monId);
  //   return this.programBoardViewHttpService.findSessionsByProgramId(this.monId);
  // }




  // findSessionsByProgramId(): Array<Session> {
  //   for(let sess of this.programBoardViewHttpService.findSessionsByProgramId()) {
  //     numberSession: number = ++;
  //
  //   };
  // }

  // findSession(id: number): Array<Session> {
  //   this.route.params.subscribe(params => {
  //     console.log(params);
  //
  //     for(prog of this.programService.findAll()) {
  //       if (prog.id == id) {
  //         return prog.sessions;
  //       }
  //     }
  //   });
  // }

  // list() {
  //   return this.programService.findById().sessions;
  // }

  // findSessions(): Array<Session> {
  //   return this.programBoardViewHttpService.findSessionsByProgramId();
  // }


//   for(let prog of this.programService.findAll()){
//   if(prog.id == +params) {
//   this.program = prog;
// }
// }

}
