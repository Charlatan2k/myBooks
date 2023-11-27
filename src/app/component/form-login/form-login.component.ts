import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent {
  public email: string;
  public password: string;
  errorMessage: string;

  constructor(
    private toastr: ToastrService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    this.usuarioService.login(form.value).subscribe(
      (response) => {
        this.toastr.success('Login successful!', 'Success!');
        this.usuarioService.logueado = true;
        this.usuarioService.user = response as User;
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.toastr.error(this.errorMessage, 'Error!');
      }
    );
  }
}
