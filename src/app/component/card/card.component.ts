import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Output() delete = new EventEmitter<void>();

  @Input() book: Book;
  @Input() index: number;

  constructor() {}

  public deleteBook() {
    this.delete.emit();
  }
}
