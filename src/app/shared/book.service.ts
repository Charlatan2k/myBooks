import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];

  constructor() {}

  addBook(values: any) {
    const nuevoLibro = new Book(
      values.title,
      values.type,
      values.author,
      values.price,
      values.photo,
      values.id_libro
    );
    console.log('addBook called');

    this.books.push(nuevoLibro);
  }

  public searchBooks(searchTerm: string): Book[] {
    return this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.id_book.toString() === searchTerm
    );
  }

  public getAll(): Book[] {
    return this.books;
  }

  public getOne(id: number): Book {
    return this.books[id];
  }

  public add(book: Book): void {
    this.books.push(book);
  }

  public edit(book: Book): boolean {
    return;
  }

  public delete(id: number): void {
    this.books.splice(id, 1);
  }
}
