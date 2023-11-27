import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  public user: User;

  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.user = this.usuarioService.getUser();
  }

  public enviar(
    nuevoNombre: HTMLInputElement,
    nuevoApellido: HTMLInputElement,
    nuevoEmail: HTMLInputElement,
    nuevaFoto: HTMLInputElement
  ) {
    this.user.first_name = nuevoNombre.value;
    this.user.last_name = nuevoApellido.value;
    this.user.email = nuevoEmail.value;
    this.user.photo = nuevaFoto.value;
  }
}
