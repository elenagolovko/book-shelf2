import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

import { Book } from '../data/book';
import { BookService } from '../data/book.service';
import {IMyDpOptions} from 'mydatepicker';
import {IMyDateModel} from 'mydatepicker';

@Component({
  selector: "book-form",
  templateUrl: "book-form.component.html",
  styleUrls: ['book-form.component.css']
})
export class BookFormComponent {
  bookForm : FormGroup;
  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
    indicateInvalidDate: false, 
    minYear: 1800,
    editableDateField: false
  };


  constructor(private bookService: BookService,
              private buildForm: FormBuilder,
              ) { }


  ngOnInit() {
    this.bookForm = this.buildForm.group({
      'title' : ["", Validators.compose([Validators.required,
                                          Validators.minLength(3),
                                          Validators.maxLength(30)])],
      'author': ["", Validators.required],
      'pages' : [null, Validators.compose([
                          Validators.required,
                          Validators.min(0),
                          Validators.max(10000)])],
      'publisherName' : ["", Validators.maxLength(30)],
      'yearOfPublication' : [null, Validators.compose([
                                    Validators.pattern(/\d+/g),
                                    Validators.min(1800)])],
      'releaseDate' : "",// не раньше 01.01.1800
      'ISBN': ["", Validators.pattern(/\d+-\d+/g)],
      'image' : ""
    })
  }  

  onDateChanged(event: IMyDateModel) {
    if (event.formatted === '') {
      return;
    }
    var target = document.querySelector('.selectiongroup');
    var dateInput: HTMLInputElement = document.querySelector('.date-picker');
      this.bookForm.controls['releaseDate'].setValue(event.formatted);
      target.setAttribute('style', 'box-shadow: 0px 0px 8px green;');
  };

  addBook(value: Book) {
    this.bookService.addNew(value);
  };

    // uploadImage(event: any){
    //     let fileChooser: HTMLInputElement = event.target || event.srcElement;
    //     let imageValueInput: HTMLInputElement = document.querySelector('[name="image"]');
    //     let file: File = fileChooser.files[0];
    //     let reader  = new FileReader();

    //     reader.onloadend = function () {
    //         imageValueInput.value = reader.result;
    //     }

    //     if (file) {
    //         reader.readAsDataURL(file);
    //     } 
    // }
  }
