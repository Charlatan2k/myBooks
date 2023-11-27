import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { UsuarioService } from './usuario.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'http://localhost:3000';
  public books: Book[] = [];
  public filteredBooks: Book[] = [];
  public;

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    public usuarioService: UsuarioService
  ) {}

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

  getBooksByUser(id_user: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.url}/books?id_user=${id_user}`).pipe(
      map((books: Book[]) => {
        return books;
      })
    );
  }

  getBookById(id_user: number, id_book: number): Observable<Book[]> {
    return this.http.get<Book[]>(
      `${this.url}/books?id_user=${id_user}&id_book=${id_book}`
    );
  }

  addBook(book: any): Observable<any> {
    return this.http.post(`${this.url}/books`, book);
  }

  updateBook(book: any): Observable<any> {
    return this.http.put(`${this.url}/books`, book);
  }
}
