import { Component } from '@angular/core';
import { BookService } from '../data/book.service';
import { Book } from '../data/book';

@Component({
  selector: 'books-list',
  templateUrl: "book-list.component.html",
  styleUrls: ['book-list.component.css']
})

export class BooksListComponent {
    books: Book[];

    constructor(private bookService: BookService) {
        this.books = [];
        this.bookService.fetchData()
          .then(() => {
              this.books = this.bookService.getData();
          });
    }

    removeBook (ind: number) {
        this.bookService.removeData(ind);
    }

    nameSort() {
        this.bookService.sortNames();
    }

    // dateSort() {
    //     this.bookService.sortDates();
    // }

    passInfo(book: Book) {
        this.bookService.showBook(book);
    }
}