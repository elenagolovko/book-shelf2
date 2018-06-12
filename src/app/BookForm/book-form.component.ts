import { Component, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { Book } from '../data/book';
import { BookService } from '../data/book.service';

@Component({
  selector: "book-form",
  templateUrl: "book-form.component.html",
  styles: [
    ` 
            input{float:right;}
            .form-group{padding-bottom: 20px;}
            .book-info{width: 300px;}
            .add-author-btn{position: relative; left: 265px; background-color: #fff;}
            .error{border: 1px solid red;}
    `
  ]
})
export class BookFormComponent {
    bookForm : FormGroup;

    constructor(private bookService: BookService,
                        buildForm: FormBuilder
                ) {
                    this.bookForm = buildForm.group({
                        'title' : ["", Validators.compose([Validators.required,
                                                           Validators.minLength(5),
                                                           Validators.maxLength(30)])],
                        'author': ["", Validators.required],
                        'pages' : [null, Validators.compose([
                                            Validators.required,
                                            Validators.min(0),
                                            Validators.max(10000)])],
                        'publisherName' : ["", Validators.maxLength(30)],
                        'yearOfPublication' : [null, Validators.min(1800)],
                        'releaseDate' : "",// не раньше 01.01.1800
                        'ISBN': ["", Validators.pattern(/\d+-\d+/g)]
                      })
                }

    
    addBook(value: Book[]) {
        this.bookService.addNew(value);
    }
  }
