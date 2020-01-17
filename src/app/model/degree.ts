import {User} from './user';
import {Sport} from './sport';

export class Degree{

  id:number;
  version: number;
  certificate : boolean;
  usercertified: User;
  sport : Sport;


  constructor(id?: number, version?: number, certificate?: boolean, usercertified?: User, sport?: Sport) {
    this.id = id;
    this.version = version;
    this.certificate = certificate;
    this.usercertified = usercertified;
    this.sport = sport;
  }
}
