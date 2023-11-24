import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/shared/book.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private bookService: BookService,
    private toastr: ToastrService
  ) {}

  public deleteBook(id: number) {
    this.bookService.delete(id).subscribe(
      () => {
        const index = this.bookService.books.findIndex(
          (book) => book.id_book === id
        );
        if (index !== -1) {
          this.toastr.success('Book deleted succesfully');
          this.bookService.books.splice(index, 1);
          this.bookService.filteredBooks = [...this.bookService.books];
        }
      },
      (error) => {
        console.error('Error deleting book:', error);
      }
    );
  }
}
