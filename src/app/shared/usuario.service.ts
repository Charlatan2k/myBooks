import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: string = 'http://localhost:3000';
  public logueado: boolean = false;
  public user: User;

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(`${this.url}/register`, user);
  }

  login(user: User) {
    return this.http.post(`${this.url}/login`, user);
  }

  isLoggedIn(): boolean {
    return this.logueado;
  }

  updateUser(user: User) {
    return this.http.put(`${this.url}/usuarios`, user);
  }

  getUser() {
    return this.user;
  }
}
