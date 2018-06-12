import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BooksListModule } from './BooksList/books-list.module';
import { BookFormModule } from './BookForm/book-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BooksListModule, BookFormModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
