import {User} from './user';
import {Exercice} from './exercice';
import {Program} from './program';

export class InProgress{
  id: number;
  version: number;
  beginingDate: Date;
  endDate: Date;
  progression: number;
  userProgressing: User;
  program: Program;

  constructor(id?: number, version?: number, beginingDate?: Date, endDate?: Date,
              progression?: number, userProgressing?: User, program?: Program) {
    this.id = id;
    this.version = version;
    this.beginingDate = beginingDate;
    this.endDate = endDate;
    this.progression = progression;
    this.userProgressing = userProgressing;
    this.program = program;
  }

}
