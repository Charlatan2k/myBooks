import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];

  constructor(private toastr: ToastrService) {}

  addBook(values: any) {
    const nuevoLibro = new Book(
      values.title,
      values.type,
      values.author,
      Number(values.price),
      values.photo,
      Number(values.id_book)
    );
    console.log('addBook called');

    this.books.push(nuevoLibro);
    this.toastr.success(
      'Tu libro a sido agregado correctamente',
      'Disfruta de tu nuevo libro',
      {
        titleClass: 'toast-title',
        messageClass: 'toast-message',
      }
    );
  }

  public searchBooks(searchTerm: string): Book[] {
    const foundBooks = this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.id_book.toString() === searchTerm
    );

    if (foundBooks.length === 0) {
      this.toastr.warning('No se encontró ningún libro con ese nombre o ID');
      return [];
    }

    return foundBooks;
  }

  public getAll(): Book[] {
    return this.books;
  }

  public getOne(id: number): Book {
    return this.books.find((book) => book.id_book === id);
  }

  public add(book: Book): void {
    this.books.push(book);
  }

  public update(updatedBook: Book): boolean {
    const index = this.books.findIndex(
      (book) => book.id_book === updatedBook.id_book
    );
    if (index !== -1) {
      this.books[index] = updatedBook;
      return true;
    }
    return false;
  }

  public delete(id: number) {
    const index = this.books.findIndex((book) => book.id_book === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
