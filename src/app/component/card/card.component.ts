import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Output() delete = new EventEmitter<void>();

  @Input() book: Book;
  @Input() index: number;

  public books: Book[] = [];

  constructor(private bookService: BookService) {}

  public deleteBook() {
    this.delete.emit();
  }

  public eliminarBook(id: number) {
    this.bookService.delete(id);
    this.books = this.bookService.getAll(); // Update the books array after deleting a book
  }
}
