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
    return this.http.get<Book[]>(this.url);
  }

  public getOne(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }

  public add(values: any): Observable<Book> {
    return this.http.post<Book>(this.url, values);
  }

  public update(id: number, values: any): Observable<any> {
    console.log(id);
    return this.http.request('put', `${this.url}`, {
      body: { id: id, ...values },
    });
  }

  delete(id: number): Observable<any> {
    console.log(id, `${this.url}`);
    return this.http.request('delete', `${this.url}`, { body: { id: id } });
  }
}
