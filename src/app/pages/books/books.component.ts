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

  @ViewChild('noBooksAlert', { static: true }) noBooksAlert: TemplateRef<any>;

  constructor(public bookService: BookService) {
    this.libro1 = new Book(
      'Holita',
      'Drama',
      'Yo',
      100,
      'https://picsum.photos/200/300',
      1
    );
  }

  ngOnInit() {
    this.bookService.getAll().subscribe((books: Book[]) => {
      this.bookService.books = books;
      this.bookService.filteredBooks = [...this.bookService.books]; // Initialize filteredBooks with books
    });
  }

  public getBookById(id: string) {
    if (id) {
      this.bookService.filteredBooks = this.bookService.books.filter(
        (book) => book.id_book === +id
      );
    } else {
      this.bookService.filteredBooks = [...this.bookService.books];
    }
  }
}
