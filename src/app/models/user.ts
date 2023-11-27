export class User {
  public id_user: number;
  public first_name: string;
  public last_name: string;
  public email: string;
  public photo: string;
  public user_password: string;

  constructor(name, last_name, email, photo, user_password) {
    this.first_name = name;
    this.last_name = last_name;
    this.email = email;
    this.photo = photo;
    this.user_password = user_password;
  }
}
