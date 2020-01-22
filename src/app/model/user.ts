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
  role: string;
  commercial: boolean;
  isDesactivated: boolean;
  programs: Program;
  inProgresses: Array<InProgress> = new Array<InProgress>();
  degreesCoach: Degree;


  constructor(id?: number, version?: number, firstName?: string, lastName?: string, userName?: string, email?: string, password?: string, birthDate?: Date, commercial?: boolean, isDesactivated?: boolean, programs?: Program, inProgresses?: Array<InProgress>, degreesCoach?: Degree) {
    this.id = id;
    this.version = version;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
    this.commercial = commercial;
    this.isDesactivated = isDesactivated;
    this.programs = programs;
    this.inProgresses = inProgresses;
    this.degreesCoach = degreesCoach;
  }
}
