import {Program} from './program';
import {InProgress} from './inProgress';
import {Degree} from './degree';


export class User {
  id: number;
  version: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  birthDate: Date;
  // TODO role ;
  commercial: boolean;
  isDesactivated: boolean;
  programs: Program;
  inProgress: InProgress;
  degreesCoach: Degree;
}
