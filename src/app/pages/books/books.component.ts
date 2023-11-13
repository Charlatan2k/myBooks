import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  public libro1: Book;
  public books: Book[] = [];
  @ViewChild('noBooksAlert', { static: true }) noBooksAlert: TemplateRef<any>;

  constructor(private bookService: BookService) {
    this.libro1 = new Book(
      'El rey Leon',
      'Drama',
      'Pepe',
      15,
      'https://m.media-amazon.com/images/I/81G4SjA4+AL._AC_UF1000,1000_QL80_.jpg',
      1
    );

    // Only add libro1 if the books array is empty
    if (this.bookService.getAll().length === 0) {
      this.bookService.addBook(this.libro1);
    }
  }

  ngOnInit() {
    this.books = this.bookService.getAll();
  }

  public deleteBook(index: number) {
    this.books.splice(index, 1);
  }

  public searchTerm: string = '';

  public searchBooks() {
    this.books = this.bookService.searchBooks(this.searchTerm);
  }
}
