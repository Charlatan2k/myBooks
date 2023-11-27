import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookService } from '../../shared/book.service';
import { UsuarioService } from '../../shared/usuario.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) {
    this.form = this.formBuilder.group({
      title: '',
      b_type: '',
      autor: '',
      price: '',
      photo: '',
      id_book: '',
    });
  }

  ngOnInit(): void {}

  addBook() {
    const user: any = this.usuarioService.getUser();
    console.log(user);
    if (!user || !user.userData) {
      console.error('User information is not available');
      return;
    }

    const bookData = {
      ...this.form.value,
      id_user: user.userData.id_user,
      id_book: this.form.value.id_book,
    };

    this.bookService.addBook(bookData).subscribe(
      (response) => {
        console.log('Book added:', response);
        this.toastr.success('Book added successfully');
      },
      (error) => {
        console.error('Error adding book:', error);
      }
    );
  }
}
