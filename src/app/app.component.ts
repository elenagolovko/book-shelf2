import { Component } from "@angular/core";
// import { Book } from "./book";
// import { BookService } from "./book.service";

@Component({
  selector: "my-app",
  template: `
    <books-list></books-list>    
    <book-form></book-form>
  `
})
export class AppComponent {}
