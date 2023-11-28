import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public user: any = {};

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.user = this.usuarioService.user;
  }

  @ViewChild('modifyForm') modifyForm: NgForm;

  formData = {
    first_name: '',
    last_name: '',
    email: '',
    photo: '',
  };

  onSubmit(formValue) {
    Object.keys(formValue).forEach((key) => {
      if (formValue[key]) {
        this.user.userData[key] = formValue[key];
      }
    });

    this.usuarioService.updateUser(this.user.userData).subscribe(
      (response) => {
        this.usuarioService.user = this.user.userData;
        this.usuarioService.logueado = true;
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );

    // Reset form data
    this.formData = {
      first_name: '',
      last_name: '',
      email: '',
      photo: '',
    };
  }
}
