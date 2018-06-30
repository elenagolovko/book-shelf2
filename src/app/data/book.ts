export class Book {
  constructor(
    public title: string,
    public author: string[],
    public pages: number,
    public publisherName?: string,
    public yearOfPublication?: number,
    public releaseDate?: string,
    public ISBN?: string,
    public image?: string
  ) {}
}
