import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  bookForm: FormGroup;
  bookId: number;
  book: Book;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: [''],
      author: [''],
      price: [''],
      photo: [''],
      type: [''],
      id_book: [''],
    });

    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
  }
  onSubmit() {
    const updatedBook = this.bookForm.value;
    console.log(updatedBook);
    console.log(this.book?.photo);
    this.bookService.update(updatedBook.id_book, updatedBook).subscribe(
      (updatedBook) => {
        this.book = updatedBook;
        this.toastr.success('Book modified successfully');
      },
      (error) => {
        console.error(error);
        this.toastr.warning(
          error.message || 'Libro con id dado no se a encontrado'
        );
      }
    );
  }
}
