import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { UsuarioService } from 'src/app/shared/usuario.service';

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
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: [''],
      b_type: [''],
      autor: [''],
      price: [''],
      photo: [''],
      id_book: [''],
    });
  }
  updateBook() {
    const user: any = this.usuarioService.getUser();
    console.log('User:', user);
    console.log('User ID:', user.userData.id_user);
    console.log('Book ID:', this.bookForm.value.id_book);

    if (!user || !user.userData) {
      console.error('User information is not available');
      return;
    }

    const bookData = {
      ...this.bookForm.value,
      id_book: this.bookForm.value.id_book,
    };

    console.log('Updating book with data:', bookData);

    this.bookService.updateBook(bookData).subscribe(
      (response) => {
        console.log('Book updated:', response);
        this.toastr.success('Book updated successfully');
      },
      (error) => {
        console.error('Error updating book:', error);
        if (error.error) {
          console.error('Server responded with:', error.error);
        }
      }
    );
  }
}
