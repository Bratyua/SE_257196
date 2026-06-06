export class Student {

  id?: number;
  user?: any; // Represents the linked User object
  faculty?: any;
  points: number;
  olaAgreement?: any;
  destUni?: any;
  olaStatus: string;

  constructor(points: number, olaStatus: string) {
    this.points = points;
    this.olaStatus = olaStatus;
  }

}
