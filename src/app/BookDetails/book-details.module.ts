import { BrowserModule } from "@angular/platform-browser";
// import { datePicker } from '';
import { NgModule } from '@angular/core';
import { BookDetailsComponent} from './book-details.component';
import { BookService } from '../data/book.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
      BookDetailsComponent
    ],
    exports: [
        BookDetailsComponent,
    ],
    providers: [
        BookService
    ]
  })
export class BookDetailsModule {

} 