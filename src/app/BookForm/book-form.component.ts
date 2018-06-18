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
                          
            .visually-hidden {
                position: absolute;
                
                width: 1px;
                height: 1px;
                margin: -1px;
                border: 0;
                padding: 0;
                
                white-space: nowrap;
                
                -webkit-clip-path: inset(100%);
                        clip-path: inset(100%);
                
                clip: rect(0 0 0 0);
                overflow: hidden;
            }
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
                        'ISBN': ["", Validators.pattern(/\d+-\d+/g)],
                        'image' : ""
                      })
                }

    
    addBook(value: Book, image: any) {
        if (image) {
            value.image = image
        }
        this.bookService.addNew(value);
    }

    uploadImage(event: any){
        let fileChooser: HTMLInputElement = event.target || event.srcElement;
        let imageValueInput: HTMLInputElement = document.querySelector('[name="image"]');
        let file: File = fileChooser.files[0];
        let reader  = new FileReader();

        reader.onloadend = function () {
            imageValueInput.value = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } 
    }
  }
