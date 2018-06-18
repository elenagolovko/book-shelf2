import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { BooksListComponent } from './books-list.component';
import { BookService } from '../data/book.service';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
      BooksListComponent
    ],
    exports: [
        BooksListComponent,
    ],
    providers: [
        BookService
    ]
  })
export class BooksListModule {}