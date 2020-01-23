import {Component, Input, OnInit} from '@angular/core';
import {ProgramHttpService} from "../program/program-http.service";
import {ProgramBoardViewHttpService} from "./program-board-view-http.service";
import {Session} from "../model/session";
import {Program} from "../model/program";
import {ActivatedRoute} from "@angular/router";
import {SessionHttpService} from "../session/session-http.service";
import {Exercice} from "../model/exercice";
import {ExerciceHttpService} from "../exercice/exercice-http.service";
import {FormControl, Validators} from '@angular/forms';
import {User} from "../model/user";
import {HomeHttpService} from "../home/home-http.service";

@Component({
  selector: 'program-board-view',
  templateUrl: './program-board-view.component.html',
  styleUrls: ['./program-board-view.component.css']
})
export class ProgramBoardViewComponent implements OnInit {
  userCo: User;

  program: Program;
  monId: number;
  sessions: Array<Session>;
  numberSession: number = 0; //nb total de sessions du programme
  numberSessionDone: number = 0; //nb de sessions finies à l'interieur du programme
  percentageOfDone: number;
  maSessionId: number;
  currentSession: Session;
  ctrl = new FormControl(null, Validators.required);
  currentRate: number = -1;
  meanRate: number;
  moyenne: number;

  exercices: Array<Exercice>;

  selectedSession: Session;
  afficheExos: boolean;
  private read: boolean = true;

  constructor(private route: ActivatedRoute, private programService: ProgramHttpService, private programBoardViewHttpService: ProgramBoardViewHttpService, private exerciceService: ExerciceHttpService, private sessionService: SessionHttpService, private homeService: HomeHttpService) {
    //RECUP L'USER CO
    this.programBoardViewHttpService.loadUser(this.homeService.currentConnection.id).subscribe(resp=> {
      this.userCo = resp;
    }, err=> console.log(err));

    this.route.params.subscribe(params => {
      console.log(params.id);
      this.monId = params.id;

      this.programBoardViewHttpService.findById(params.id).subscribe(resp => {
        this.program = resp;
        this.sessions = resp.sessions;
        for (let sess of this.sessions) {
          this.numberSession++; //nb total de sessions du programme
          if (sess.isDone) {
            this.numberSessionDone++; //nb de sessions finies à l'interieur du programme
          }
          this.maSessionId = sess.id; // Pourquoi on fait ça ??????????????????????
          // this.exercices = sess.exercices;
          // console.log("LES EXERCICES SONT:" +this.exercices);
        }
      }, err => console.log(err));

      if (this.numberSessionDone > 0) {
        this.percentageOfDone = (this.numberSessionDone * 100) / this.numberSession;
      } else {
        this.percentageOfDone = 0;
      }
      console.log("pourcentage de fait:" + this.percentageOfDone)
    });
  }

  ngOnInit() {
  }

  findSessionsByProgramId(id: number): Array<Session> {
    this.programBoardViewHttpService.findById(this.monId).subscribe(resp => {
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

  toRate(nb: number) {
    this.meanRate = this.program.rate * this.program.nbRate;
    this.program.rate = (this.meanRate + nb) / (this.program.nbRate + 1);
    this.program.nbRate += 1;
    this.programBoardViewHttpService.save(this.program);
    this.read = false;
  }

  sessionIsDone(sess: Session, prog: Program, monUser: User) {
    if (sess.isDone == false) {
      sess.isDone = true;
      this.numberSessionDone++;

      //CALCUL PROGRESSION
      this.percentageOfDone = (this.numberSessionDone * 100) / this.numberSession;
      console.log(this.percentageOfDone);

      //SAVE PROGRESSION % DANS LE INPROGRESS CORRESPONDANT AU PROGRAMME
      for (let inpro of prog.inProgresses) {
        if (inpro.program) {
          if (inpro.program.id == inpro.id) {
            inpro.progression = this.percentageOfDone;
            this.programBoardViewHttpService.saveInProgress(inpro);
          }
        }
      }
    }

    this.programBoardViewHttpService.sessionIsDone(sess, prog, monUser);

    // if(this.percentageOfDone == 100){
    //TODO modal BRAVO !
    // }
  }


  programIsDone(prog: Program, monUser: User) {
    // INPROGRESS: AJOUT ENDDATE ET SAVE PROGRESSION 100%
    for (let inpro of prog.inProgresses) {
      if (inpro.program) {
        if (inpro.program.id == inpro.id) {
          inpro.progression = this.percentageOfDone;
          inpro.endDate = new Date();
          this.programBoardViewHttpService.saveInProgress(inpro);
        }
      }
    }

    //PASSER LE PROGRAMME EN DONE TRUE
    prog.isDone = true;

    //INCREMENTER NB PROG FINIS DE L'USER
    monUser.nbProgramFinished++;

    this.programBoardViewHttpService.programIsDone(prog, monUser);

    // //PROG IS DONE
    // prog.isDone = true;
    //
    // //CREER ENDDATE DANS LE INPROGRESS CORRESPONDANT AU PROGRAMME
    // for (let inpro of prog.inProgresses) {
    //   if (inpro.program.id == inpro.id) {
    //     inpro.endDate = new Date();
    //     // SAVE PROGRESSION 100%
    //     inpro.progression = this.percentageOfDone;
    //   }
    // }
    //
    // this.userCo.nbProgramFinished++;
    // console.log("OK THE PROGRAM IS DONE!");
  }


}
