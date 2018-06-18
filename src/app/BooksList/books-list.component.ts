import { Component } from '@angular/core';
import { BookService } from '../data/book.service';
import { Book } from '../data/book';

@Component({
  selector: 'books-list',
  template: `
    <div>
        <h3>Добавленные книги</h3>
        <button class="sort-btn" type="button" (click)="nameSort()">Sort by name</button>
        <button class="sort-btn" type="button" (click)="dateSort()">Sort by release date</button>
        <ul *ngFor="let book of books; let index = index" class="book-list">
            <li class="img-upload book-element">
                <img src="{{book.image}}" width="115" height="150" alt="Обложка книги">
            </li>
            <li class="book-element">
            {{book.title}} <br> 
            {{book.author}} <br> 
            {{book.pages}} <br> 
            </li>
            <button class="close-btn" type="button" (click)="removeBook(index)"></button>
        </ul>
    </div>
  `,
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

    dateSort(){
        this.bookService.sortDates();
    }
}