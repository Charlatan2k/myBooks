import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    price: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    photo: new FormControl('', Validators.required),
    id_book: new FormControl('', Validators.required),
  });

  constructor(public bookService: BookService) {}

  onSubmit() {
    console.log('onSubmit called');
    this.bookService.addBook(this.bookForm.value);
  }
}
