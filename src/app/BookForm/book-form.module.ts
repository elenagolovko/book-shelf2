import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { BookFormComponent} from './book-form.component';
import { BookService } from '../data/book.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MyDatePickerModule
    ],
    declarations: [
      BookFormComponent
    ],
    exports: [
        BookFormComponent,
    ],
    providers: [
        BookService
    ]
  })
export class BookFormModule {

} 