import { Component, OnInit } from "@angular/core";
import { BookFormComponent } from "./book-form.component";
import { Book } from "./book";
import { BookService } from "./book.service";

@Component({
  selector: "my-app",
  template: `<book-form (onAdd)="onAdd($event)"></book-form>
             <div><h3>Добавленные книги</h3>
              <ul *ngFor="let book of books">
                <li>{{book.title}} ({{book.author}}) - {{book.pages}}</li>
              </ul>
             </div>`,
  providers: [BookService]
})
export class AppComponent {
  constructor(private bookService: BookService) {}

  // books: Book[] = this.bookService.getData();

  books: Book[] = [];
  onAdd(newBook: any) {
    if (newBook) {
      this.books = this.bookService.getData();
    }
  }
}
