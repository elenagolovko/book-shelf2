import { Book } from "./book";

export class BookService {
  private book: Book[] = [
    { title: "Wpow", author: "Meow", pages: 12 },
    { title: "Wcpow", author: "Mceow", pages: 12 },
    { title: "Wcpow", author: "Mceow", pages: 12 }
  ];
  // books: Book[] = [];
  getData(): Book[] {
    return this.book;
  }
  addNew(book: any) {
    this.book.push(book);
    console.log(this.book);
  }
}
