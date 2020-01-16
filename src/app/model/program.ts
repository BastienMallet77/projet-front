import {User} from './user';
// import {Session} from './session';
import {InProgress} from './inProgress';

export class Program{
  id: number;
  version: number = 0;
  name: string;
  description: string;
  duration: number;
  nbValidation: number;
  creationDate: Date;
  isValidated: boolean;
  isDone: boolean;

  users: Array<User> = new Array<User>();
  // sessions: Array<Session> = new Array<Session>();
  // sport: Sport;
  // level: Level;
  // specialisation: Specialisation; todo
  inprogress: InProgress;


  constructor(id?: number, version?: number, name?: string, description?: string, duration?: number, nbValidation?: number, creationDate?: Date, isValidated?: boolean, isDone?: boolean, users?: Array<User>, inprogress?: InProgress) {
    this.id = id;
    this.version = version;
    this.name = name;
    this.description = description;
    this.duration = duration;
    this.nbValidation = nbValidation;
    this.creationDate = creationDate;
    this.isValidated = isValidated;
    this.isDone = isDone;
    this.users = users;
    // this.sessions = sessions;
    // this.sport = sport;
    // this.level = level;
    // this.specialisation = specialisation;
    this.inprogress = inprogress;
  }
}
