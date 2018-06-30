import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BooksListModule } from './BooksList/books-list.module';
import { BookFormModule } from './BookForm/book-form.module';
import { BookDetailsModule } from './BookDetails/book-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BooksListModule, BookFormModule, BookDetailsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
