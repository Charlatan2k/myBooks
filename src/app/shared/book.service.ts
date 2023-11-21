import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'http://localhost:3000/books';
  public books: Book[] = [];
  public filteredBooks: Book[] = [];

  constructor(private toastr: ToastrService, private http: HttpClient) {}

  public getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url).pipe(
      tap((books: Book[]) => {
        this.books = books;
        this.filteredBooks = [...this.books];
      })
    );
  }

  public getOne(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }

  public add(values: any): Observable<Book> {
    return this.http.post<Book>(this.url, values);
  }

  public update(id: number, values: any): Observable<Book> {
    console.log(id); // add this line
    return this.http.put<Book>(`${this.url}/${id}`, values);
  }

  public delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }
}
