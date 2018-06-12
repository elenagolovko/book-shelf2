import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
import { Book } from "./book";

@Injectable()
export class BookService {
  private books: Book[] = [];
  private data: Book[] = JSON.parse(localStorage.getItem('books'));

  fetchData() {
    return fetch('../books.json')
      .then(response => response.json())
      .then(data => {
        this.books = data.bookList;
        localStorage.setItem('books', JSON.stringify(this.books));
      });
  }
  getData(): Book[] {
    return this.data;
  }
  addNew(book: any) {
    this.data.push(book);
    localStorage.setItem('books', JSON.stringify(this.data));
  }
  removeData(ind: number) {
    this.data.splice(ind, 1);
    localStorage.setItem('books', JSON.stringify(this.data));
  }
}
