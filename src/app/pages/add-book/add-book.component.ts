import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/shared/book.service';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';

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

  constructor(public bookService: BookService, private toastr: ToastrService) {}

  public addBook() {
    console.log('addBook() called');
    if (this.bookForm.valid) {
      const values = this.bookForm.value;
      console.log('Form values:', values);
      this.bookService.add(values).subscribe(
        (book: Book) => {
          console.log('Book added:', book);
          this.toastr.success('Book added successfully'); // add this line
          this.bookForm.reset();
          this.bookService.getAll().subscribe((books: Book[]) => {
            this.bookService.books = books;
            this.bookService.filteredBooks = [...this.bookService.books];
          });
        },
        (error) => {
          console.error('Error adding book:', error);
        }
      );
    }
  }
}
