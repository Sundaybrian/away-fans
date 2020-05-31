export interface Article {
  _id: string;
  title: string;
  url: string;
  imageUrl: string;
  subtitle?: string;
  excerpt?: string;
  scrappedDate: Date;
}

export interface Video {
  _id: string;
  club: string;
  title: string;
  duration: string;
  url: string;
  thumbnail: string;
  scrappedDate: Date;
}

export interface Fixture {
  id: string;
  date: string;
  stadium: string;
  logoHome: string;
  logoAway: string;
  home: string;
  away: string;
  imageUrl: string;
}

export class Ticket {
  constructor(
    public id: string,
    public title: string,
    public competition: string,
    public subtitle: string,
    public imageUrl: string,
    public user: string
  ) {}
}

export class Travel {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public user: string,
    public booked: boolean,
    public capacity: number,
    public from: Date,
    public to: Date
  ) {}
}

export class Booking {
  constructor(
    public id: string,
    public vehicleId: string,
    public userId: string,
    public title: string,
    public imageUrl: string,
    public capacity: number,
    public firstName: string,
    public lastName: string,
    public from: Date,
    public to: Date
  ) {}
}
