import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/shared/book.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  public libro1: Book;
  public books: Book[] = [];
  public id_user: number;
  userIdSearchTerm: string;
  bookIdSearchTerm: string;

  @ViewChild('noBooksAlert', { static: true }) noBooksAlert: TemplateRef<any>;

  constructor(
    public bookService: BookService,
    public usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    if (this.usuarioService.isLoggedIn()) {
      const user: any = this.usuarioService.getUser();

      if (user && user.userData) {
        this.bookService
          .getBooksByUser(user.userData.id_user)
          .subscribe((books: Book[]) => {
            this.bookService.books = books;
            this.bookService.filteredBooks = [...this.bookService.books];
          });
      } else {
        console.error(
          'User is not defined or does not have an id_user property'
        );
      }
    }
  }

  getBookById(id_book: string) {
    const id_user = this.usuarioService.user.id_user;
    if (id_book) {
      this.bookService.filteredBooks = this.bookService.books.filter(
        (book) => book.id_book === +id_book
      );
    } else {
      this.bookService.filteredBooks = [...this.bookService.books];
    }
  }

  searchBook() {
    this.getBookById(this.bookIdSearchTerm);
  }
}
