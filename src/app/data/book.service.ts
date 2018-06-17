import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
import { Logger } from './logger.service';
import { Book } from "./book";

@Injectable()

export class BookService {
  private logger: Logger;
  private books: Book[] = [];
  private data: Book[] = JSON.parse(localStorage.getItem('books'));
  save(){
    localStorage.setItem('books', JSON.stringify(this.data));
  }

  fetchData() {
    return fetch('../books.json')
      .then(response => response.json())
      .then(data => {
        this.books = data.bookList;
        localStorage.setItem('books', JSON.stringify(this.books));
      })
      .catch(err => {
        this.logger.error(err);
        throw err;
      })
  }
  getData(): Book[] {
    return this.data;
  }
  addNew(book: any) {
    this.data.push(book);
    this.save();
  }
  removeData(ind: number) {
    this.data.splice(ind, 1);
    this.save();
  }
  sortNames() {
    this.data.sort(function (a, b) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
      }
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
      }
      return 0;
    });
    this.save();
  }
  sortDates(){
    this.data.sort(function (a, b) {
      return a.releaseDate - b.releaseDate;
    });
    this.save();
  }
}
