export class Sport {

  id: number;
  version: number;
  sportName: string;
  sportDescription: string;


  constructor(id?: number, version?: number, sportName?: string, sportDescription?: string) {
    this.id = id;
    this.version = version;
    this.sportName = sportName;
    this.sportDescription = sportDescription;
  }
}
