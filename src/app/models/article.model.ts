export class Article {
  constructor(
    public id: string,
    public title: string,
    public subtitle: string,
    public description: string,
    public imageUrl: string
  ) {}
}

export interface Fixture {}
