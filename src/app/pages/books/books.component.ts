import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  public libro1: Book;
  public libros: Book[];

  constructor() {
    this.libro1 = new Book(
      'El rey Leon',
      'Drama',
      'Pepe',
      15,
      'https://m.media-amazon.com/images/I/81G4SjA4+AL._AC_UF1000,1000_QL80_.jpg'
    );
  }

  public guardarLibro(libro) {
    this.libros.push(libro);
  }
}
