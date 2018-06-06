import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Book } from "./book";
import { BookService } from "./book.service";

@Component({
  selector: "book-form",
  template: `
  <div class="book-info"> 
    <div class="form-group">
        <label>Title <input class="form-control" name="title" [(ngModel)]="book.title"/></label>
    </div>
    <div class="form-group">
        <label>Author <input class="form-control" name="author" [(ngModel)]="book.author"/></label>
    </div>
    <div class="form-group">
        <label>Pages <input type="number" class="form-control" name="pages" [(ngModel)]="book.pages"/></label>
    </div>
    <div class="form-group">
        <button class="btn" (click)="addBook(book.title, book.author, book.pages);">Добавить</button>
    </div>
  </div>`,
  styles: [
    ` 
            input{float:right;}
            .form-group{padding-bottom: 20px;}
            .book-info{width: 300px;}
    `
  ],
  providers: [BookService]
})
export class BookFormComponent {
  @Output() onAdd = new EventEmitter<boolean>();
  add(newBook: any) {
    this.onAdd.emit(newBook);
  }

  book: Book = new Book("","",0);
  constructor(private bookService: BookService) {}

  addBook(title: string, author: string, pages: number) {
    this.bookService.addNew(new Book(title, author, pages));
    this.add(true);
    console.log(this.bookService.getData());
  }
}
