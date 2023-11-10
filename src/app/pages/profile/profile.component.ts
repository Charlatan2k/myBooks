import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  public user: User;

  constructor() {
    this.user = new User(
      'Carlos',
      'Garcia',
      'carlos@gmail.com',
      'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg'
    );
  }

  public enviar(
    nuevoNombre: HTMLInputElement,
    nuevoApellido: HTMLInputElement,
    nuevoEmail: HTMLInputElement,
    nuevaFoto: HTMLInputElement
  ) {
    this.user.name = nuevoNombre.value;
    this.user.last_name = nuevoApellido.value;
    this.user.email = nuevoEmail.value;
    this.user.photo = nuevaFoto.value;
  }
}
