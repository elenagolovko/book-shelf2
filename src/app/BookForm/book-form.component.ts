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

  onDateChanged (event: IMyDateModel) {
    if (event.formatted === '') {
      return;
    }
    var target = document.querySelector('.selectiongroup');
    target.setAttribute('style', 'box-shadow: 0px 0px 8px green;');
  };

  cleanUpForm () {
    this.bookForm.reset();
    var dpInput: HTMLInputElement = document.querySelector('.selection');
    var dpGroup = document.querySelector('.selectiongroup');
    dpGroup.setAttribute('style', '');
    dpInput.value = "";
    var cropper: any = document.querySelector('.img-thumbnail');
    cropper.src = "";
  }

  addBook (value: Book) {
    this.bookService.addNew(value);
    this.cleanUpForm();
  };

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent (event: any): void {
    this.imageChangedEvent = event;
  };

  imageCropped (image: string) {
    this.croppedImage = image;
    this.bookForm.controls['image'].setValue(image);
    var cropper: any = document.querySelector('image-cropper');
    cropper.parentNode.removeChild(cropper);
  };
}
