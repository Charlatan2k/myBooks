import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  bookForm: FormGroup;
  bookId: number;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: [''],
      author: [''],
      price: [''],
      photo: [''],
      type: [''],
      id_book: [''],
    });

    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    const book = this.bookService.getOne(this.bookId);

    if (book) {
      this.bookForm.setValue({
        title: book.title,
        author: book.author,
        price: book.price,
        photo: book.photo,
        type: book.type,
        id_book: book.id_book,
      });
    }
  }
  onSubmit() {
    const updatedBook = this.bookForm.value;
    const updateSuccessful = this.bookService.update(updatedBook);

    if (updateSuccessful) {
      this.toastr.success('Libro modificado correctamente');
      this.router.navigate(['/books']);
    } else {
      this.toastr.warning('Libro con id dado no se a encontrado');
    }
  }
}
