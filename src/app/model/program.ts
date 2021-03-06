import {User} from './user';
import {Session} from './session';
import {InProgress} from './inProgress';
import {Sport} from './sport';
import {Specialisation} from './specialisation';
import {Level} from './level';

export class Program{
  id: number;
  version: number;
  name: string;
  description: string;
  duration: number;
  nbValidation: number;
  creationDate: Date;
  isValidated: boolean;
  isDone: boolean;
  rate: number;
  nbRate: number;
  creatorId: number;

  users: Array<User> = new Array<User>();
  sessions: Array<Session> = new Array<Session>();
  sport: Sport;
  level: Level;
  specialisation: Specialisation;
  inProgresses: Array<InProgress> = new Array<InProgress>();


  constructor(id?: number, version?: number, name?: string, description?: string, duration?: number, nbValidation?: number, creationDate?: Date, isValidated?: boolean, isDone?: boolean, users?: Array<User>,sessions?: Array<Session>, sport?: Sport, level?: Level, specialisation?: Specialisation, inProgresses?: Array<InProgress>, rate?: number, creatorId?: number, nbRate?: number) {
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
    this.sessions = sessions;
    this.sport = sport;
    this.level = level;
    this.specialisation = specialisation;
    this.inProgresses = inProgresses;
    this.rate = rate;
    this.creatorId = creatorId;
    this.nbRate = nbRate;
  }
}
